## Installation

Make sure Node.js and Docker are installed on the system.

Install the required dependencies for each service:

```bash
cd notification-service
npm install
```

```bash
cd ../user-service
npm install
```

```bash
cd ../api-gateway
npm install
```

## How to Run the Services

### Option 1: Running Locally Without Docker

Run each service in a separate terminal.

#### Step 1: Start NATS Server

Open a terminal in the project root directory and run:

```powershell
.\nats-server.exe
```

#### Step 2: Start Notification Service

Open a new terminal and run:

```bash
cd notification-service
node index.js
```

#### Step 3: Start User Service

Open a new terminal and run:

```bash
cd user-service
node index.js
```

#### Step 4: Start API Gateway

Open another terminal and run:

```bash
cd api-gateway
node index.js
```

The API Gateway is available on port `8000` and the User Service is
available on port `8001`.

### Option 2: Running with Docker Compose

Make sure Docker Desktop is running.

From the project root directory, run:

```bash
docker-compose up --build
```

To stop the services:

```bash
docker-compose down
```