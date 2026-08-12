const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());


const USER_SERVICE_URL = process.env.USER_SERVICE_URL || "http://localhost:8001";

app.post("/api/v1/users", async (req, res) => {
    try {

        const response = await axios.post(`${USER_SERVICE_URL}/users`, req.body);
        return res.json(response.data);
    } catch (error) {
        return res.status(500).json({ error: "User Service Error" });
    }
});

app.listen(8000, () => console.log("API Gateway running on port 8000"));