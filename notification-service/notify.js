const { connect, StringCodec } = require("nats");

async function run() {
    
    const NATS_URL = process.env.NATS_URL || "nats://localhost:4222";
    const nc = await connect({ servers: NATS_URL });
    console.log("Notification Service connected to NATS...");

    const sc = StringCodec();

    const sub = nc.subscribe("user_created");

    for await (const m of sub) {
        console.log(`\n[NOTIFICATION RECEIVED]: ${sc.decode(m.data)}`);
        console.log("Sending email/notification to user...\n");
    }
}

run();