const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

const createTable = async () => {
    try {
        await pool.query(`
            CREATE TABLE IF NOT EXISTS properties (
                id SERIAL PRIMARY KEY,
                title VARCHAR(255) NOT NULL,
                description TEXT,
                price VARCHAR(50),
                location VARCHAR(255),
                image VARCHAR(255),
                beds VARCHAR(50),
                baths VARCHAR(50),
                type VARCHAR(50),
                features TEXT[]
            );
        `);
        console.log("Table 'properties' created successfully.");
    } catch (err) {
        console.error("Error creating table:", err);
    }
};

const seedData = async () => {
    const images = ["/building1.png", "/building2.png", "/building3.png"];
    const properties = [
        { title: "Seaside Serenity Villa", description: "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhoo...", price: "$550,000", beds: "4-Bedroom", baths: "3-Bathroom", type: "Villa" },
        { title: "Metropolitan Haven", description: "A chic and fully-furnished 2-bedroom apartment with panoramic city views...", price: "$550,000", beds: "2-Bedroom", baths: "2-Bathroom", type: "Apartment" },
        { title: "Rustic Retreat Cottage", description: "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community...", price: "$550,000", beds: "3-Bedroom", baths: "3-Bathroom", type: "Cottage" },
        { title: "Urban Loft", description: "Modern loft in the heart of the city.", price: "$350,000", beds: "1-Bedroom", baths: "1-Bathroom", type: "Apartment" },
        { title: "Countryside Estate", description: "Spacious estate with large grounds.", price: "$1,200,000", beds: "5-Bedroom", baths: "4-Bathroom", type: "Estate" },
        { title: "Beachfront Condo", description: "Direct access to the beach.", price: "$450,000", beds: "2-Bedroom", baths: "2-Bathroom", type: "Condo" },
        { title: "Mountain Cabin", description: "Cozy cabin in the mountains.", price: "$250,000", beds: "2-Bedroom", baths: "1-Bathroom", type: "Cabin" },
        { title: "Suburban Family Home", description: "Perfect for a growing family.", price: "$600,000", beds: "4-Bedroom", baths: "2.5-Bathroom", type: "House" },
        { title: "Downtown Studio", description: "Efficient living space downtown.", price: "$200,000", beds: "Studio", baths: "1-Bathroom", type: "Studio" },
        { title: "Luxury Penthouse", description: "Top floor luxury with skyline views.", price: "$2,000,000", beds: "3-Bedroom", baths: "3-Bathroom", type: "Penthouse" }
    ];

    try {
        // Clear existing data
        await pool.query('TRUNCATE TABLE properties RESTART IDENTITY');

        for (let i = 0; i < properties.length; i++) {
            const p = properties[i];
            const image = images[i % 3]; // Cycle through the 3 images
            await pool.query(`
                INSERT INTO properties (title, description, price, beds, baths, type, image, location, features)
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
            `, [p.title, p.description, p.price, p.beds, p.baths, p.type, image, "Unknown Location", ["Feature 1", "Feature 2"]]);
        }
        console.log("Database seeded successfully with 10 properties.");
    } catch (err) {
        console.error("Error seeding data:", err);
    } finally {
        pool.end();
    }
};

const init = async () => {
    await createTable();
    await seedData();
};

init();
