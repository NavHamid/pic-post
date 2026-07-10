# 🚀 Complete Backend MERN Project

A full-stack **MERN (MongoDB, Express.js, React, Node.js)** application with separate backend and frontend projects for improved scalability and maintainability.

---

# 🛠 Tech Stack

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

## Frontend

* React
* Vite
* Axios

---

# 📁 Project Structure

```text
Complete-Backend-MERN/
│
├── Backend/
│   ├── package.json
│   ├── server.js
│   └── src/
│       ├── app.js
│       ├── db/
│       │   └── db.js
│       ├── models/
│       │   └── post.model.js
│       └── services/
│           └── storage.service.js
│
└── Frontend/
    ├── package.json
    ├── vite.config.js
    └── src/
        ├── main.jsx
        ├── App.jsx
        └── pages/
            ├── CreatePost.jsx
            └── Feed.jsx
```

---

# ✨ Features

* Create posts
* View all posts
* Upload and store images
* RESTful API with Express.js
* MongoDB integration using Mongoose
* React frontend powered by Vite
* Axios for API communication
* Environment variable support
* Clean separation between frontend and backend

---

# 📋 Prerequisites

Before running the project, make sure you have:

* Node.js (v18 or later)
* npm (v9 or later)
* MongoDB Atlas or a local MongoDB instance

---

# ▶️ Running the Project

Open **two separate terminals**.

## Terminal 1 — Backend

```bash
cd Backend
npm install
npx nodemon server.js
```

The backend server will start on:

```text
http://localhost:5000
```

---

## Terminal 2 — Frontend

```bash
cd Frontend
npm install
npm run dev
```

The React application will be available at:

```text
http://localhost:5173
```

---

# 🔐 Environment Variables

Create a `.env` file inside the **Backend** directory.

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

If your frontend requires environment variables, create another `.env` file inside the **Frontend** directory.

Example:

```env
VITE_API_URL=http://localhost:5000
```

---

# 🔄 Application Workflow

```text
User
   │
   ▼
React Frontend
   │
Axios API Requests
   │
   ▼
Express Backend
   │
   ▼
MongoDB Database
   │
   ▼
API Response
   │
   ▼
React UI Updates
```

---

# 📡 API Endpoints

| Method | Endpoint | Description       |
| ------ | -------- | ----------------- |
| GET    | `/posts` | Get all posts     |
| POST   | `/posts` | Create a new post |

---

# 📜 Available Scripts

## Backend

```bash
npm install
npx nodemon server.js
```

## Frontend

```bash
npm install
npm run dev
```

---

# 📌 Future Improvements

* JWT Authentication
* Protected Routes
* Edit Posts
* Delete Posts
* Search and Filtering
* Pagination
* Cloud Image Storage
* Unit and Integration Testing

📚 Note

Built this project while learning and practicing the MERN stack to improve my full-stack development skills.