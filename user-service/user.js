const express = require("express");
const { connect, StringCodec } = require("nats");

const app = express();
app.use(express.json());

let nc;
const sc = StringCodec();


async function initNats() {
    const NATS_URL = process.env.NATS_URL || "nats://localhost:4222";
    try {
        nc = await connect({ servers: NATS_URL });
        console.log(`User Service connected to NATS at ${NATS_URL}`);
    } catch (err) {
        console.error("NATS Connection Error. Retrying in 3 seconds...", err);
        setTimeout(initNats, 3000);
    }
}
initNats();

app.post("/users", async (req, res) => {
    try {
        const { user_id, name, email } = req.body;

       
        if (!user_id || !name || !email) {
            return res.status(400).json({
                error: "Validation Error",
                message: "Missing required fields: user_id, name, and email are required."
            });
        }

        const message = `User Created - ID: ${user_id}, Name: ${name}, Email: ${email}`;

        if (nc) {
            await nc.publish("user_created", sc.encode(message));
        }

        return res.json({
            status: "Success",
            message: "User created and event published to NATS!"
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

app.listen(8001, () => console.log("User Service running on port 8001"));