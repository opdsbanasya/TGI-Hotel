const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json()); // To parse JSON bodies

const DBConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
};

const db = mysql.createConnection(DBConfig);

// Connect to MySQL database
db.connect((err) => {
    if (err) {
        console.error("Database connection failed: " + err.stack);
        return;
    }
    console.log("Connected to the database.");
});

// Route to handle form submission
app.post("/contact", (req, res) => {
    const { name, email, phone, message } = req.body;

    const sql = "INSERT INTO contacts (name, email, phone, message) VALUES (?, ?, ?, ?)";
    const values = [name, email, phone, message];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error("Error inserting data: ", err);
            return res.status(500).json({ error: "Database error" });
        }
        res.status(200).json({ message: "Contact saved successfully!" });
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
