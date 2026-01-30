const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

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
    },
    apis: ['./server.js'],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

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
 */

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
