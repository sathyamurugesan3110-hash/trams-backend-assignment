## API Documentation

### Create User

Creates a new user through the API Gateway and forwards the request
to the User Service.

**URL**

```text
http://localhost:8000/api/v1/users
```

**Method**

```text
POST
```

**Headers**

```text
Content-Type: application/json
```

**Request Body**

```json
{
  "user_id": "101",
  "name": "Sathya",
  "email": "sathya@example.com"
}
```

### Successful Response

**Status: 200 OK**

```json
{
  "status": "Success",
  "message": "User created and event published to NATS!"
}
```

### Validation Error Response

**Status: 400 Bad Request**

```json
{
  "error": "Validation Error",
  "message": "Missing required fields: user_id, name, and email are required."
}
```

### Service Error Response

**Status: 500 Internal Server Error**

```json
{
  "error": "User Service Error"
}
```

