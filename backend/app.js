const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({ backend: "backend1", status: "ok" });
});

app.listen(3000, () => console.log("Backend running on port 3000"));

app.get('/health', (req, res) => {
    res.status(200).json({ status: "healthy" });
});
