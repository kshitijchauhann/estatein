const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const { Pool } = require('pg');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || 'your_super_secret_key_change_this_in_prod';

// PostgreSQL Connection
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

app.use(cors());
app.use(express.json());

// Swagger Options
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Estatein Properties API',
            version: '1.0.0',
            description: 'A simple Express API to serve property data from PostgreSQL',
        },
        servers: [
            {
                url: `http://localhost:${PORT}`,
            },
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                }
            }
        },
        security: [{
            bearerAuth: []
        }]
    },
    apis: ['./server.js'],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Middleware to authenticate token
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.sendStatus(401);

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};

/**
 * @swagger
 * components:
 *   schemas:
 *     Property:
 *       type: object
 *       required:
 *         - id
 *         - title
 *         - price
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the property
 *         title:
 *           type: string
 *           description: The title of the property
 *         description:
 *           type: string
 *           description: The property description
 *         price:
 *           type: string
 *           description: The price of the property
 *         location:
 *           type: string
 *           description: Location of the property
 *         features:
 *           type: array
 *           items:
 *             type: string
 *           description: List of features
 *         image:
 *           type: string
 *           description: URL of the property image
 *         beds:
 *           type: string
 *           description: Number of bedrooms
 *         baths:
 *           type: string
 *           description: Number of bathrooms
 *         type:
 *           type: string
 *           description: Type of property
 *       example:
 *         id: 1
 *         title: Modern Apartment
 *         description: A beautiful modern apartment
 *         price: "$120,000"
 *         location: New York, USA
 *         image: "/building1.png"
 *         beds: "2-Bedroom"
 *         baths: "2-Bathroom"
 *         type: "Apartment"
 *     User:
 *       type: object
 *       required:
 *         - username
 *         - email
 *         - password
 *       properties:
 *         username:
 *           type: string
 *         email:
 *           type: string
 *         password:
 *           type: string
 */

/**
 * @swagger
 * /api/auth/signup:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: User already exists
 *       500:
 *         description: Server error
 */
app.post('/api/auth/signup', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Check if user exists
        const userCheck = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        if (userCheck.rows.length > 0) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Insert user
        const newUser = await pool.query(
            'INSERT INTO users (username, email, password_hash) VALUES ($1, $2, $3) RETURNING id, username, email',
            [username, email, hashedPassword]
        );

        // Generate token
        const token = jwt.sign({ id: newUser.rows[0].id, email: newUser.rows[0].email }, JWT_SECRET, { expiresIn: '1h' });

        res.status(201).json({ token, user: newUser.rows[0] });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login successful
 *       400:
 *         description: Invalid credentials
 *       500:
 *         description: Server error
 */
app.post('/api/auth/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user exists
        const userResult = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        if (userResult.rows.length === 0) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const user = userResult.rows[0];

        // Check password
        const validPassword = await bcrypt.compare(password, user.password_hash);
        if (!validPassword) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Generate token
        const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });

        res.json({ token, user: { id: user.id, username: user.username, email: user.email } });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get all users (Protected)
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of users
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server error
 */
app.get('/api/users', authenticateToken, async (req, res) => {
    try {
        const result = await pool.query('SELECT id, username, email, created_at FROM users ORDER BY id ASC');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

/**
 * @swagger
 * /api/properties:
 *   get:
 *     summary: Returns the list of all properties
 *     tags: [Properties]
 *     responses:
 *       200:
 *         description: The list of the properties
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Property'
 *             example:
 *               - id: 1
 *                 title: Modern Apartment
 *                 price: "$120,000"
 */
app.get('/api/properties', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM properties ORDER BY id ASC');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Swagger UI available at http://localhost:${PORT}/api-docs`);
});
