const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MySQL Connection
require('dotenv').config();

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

// Create contacts table
db.query(`
  CREATE TABLE IF NOT EXISTS contacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )
`, (err) => {
    if (err) console.error('Error creating table:', err);
});

// API endpoint to handle form submission
app.post('/api/contact', (req, res) => {
    const { name, email, phone, message } = req.body;

    const query = 'INSERT INTO contacts (name, email, phone, message) VALUES (?, ?, ?, ?)';
    db.query(query, [name, email, phone, message], (err, result) => {
        if (err) {
            console.error('Error saving contact:', err);
            res.status(500).json({ error: 'Failed to save contact information' });
            return;
        }
        res.status(201).json({ message: 'Contact information saved successfully' });
    });
});

const PORT = 3306;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});