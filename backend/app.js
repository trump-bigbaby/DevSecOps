require('dotenv').config();

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({ backend: "backend1", status: "ok" });
});

app.get('/api', (req, res) => {
    res.json({ message: "API is working!" });
});

app.get('/health', (req, res) => {
    res.status(200).json({ status: "healthy" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
