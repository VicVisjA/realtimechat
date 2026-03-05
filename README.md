# realtimechat
# 💬 Real-Time Chat Application

A **real-time chat application** built using **Node.js, Express, Socket.io, and Microsoft SQL Server**.
This project demonstrates how modern web applications handle **live communication, server-side processing, and persistent data storage**.

Designed as a **portfolio project to demonstrate full-stack engineering skills**, including WebSockets, backend architecture, and relational database integration.

---

# 🚀 Features

* ⚡ **Real-time messaging** using WebSockets
* 💾 **Persistent chat history** stored in SQL Server
* 🌐 **Multiple user support**
* 🧠 **Event-driven architecture**
* 🔗 **Client-server communication using Socket.io**

---

# 🧱 Tech Stack

### Frontend

* HTML
* JavaScript
* Socket.io Client

### Backend

* Node.js
* Express.js
* Socket.io

### Database

* Microsoft SQL Server

# ⚙️ How It Works

### 1️⃣ User Connects

When a user opens the application, the browser establishes a **Socket.io connection** with the server.

```javascript
const socket = io();
```

This creates a **persistent WebSocket channel** between the client and server.

---

### 2️⃣ Sending Messages

When a user submits a message:

```javascript
socket.emit("chat message", { username, message });
```

The client emits a **chat message event** to the server.

---

### 3️⃣ Server Processes the Message

The backend listens for incoming messages:

```javascript
socket.on("chat message", async (data) => { ... });
```

The server:

1. Receives the message
2. Inserts the message into SQL Server
3. Broadcasts it to all connected clients

---

### 4️⃣ Database Storage

Messages are stored in the database using SQL queries:

```sql
INSERT INTO Messages (username, message)
VALUES (@username, @message)
```

This ensures chat history is **persisted**.

---

### 5️⃣ Broadcasting Messages

After saving the message, the server sends it to every connected client:

```javascript
io.emit("chat message", data);
```

This creates the **real-time chat experience**.

---

### 6️⃣ Rendering Messages

The browser dynamically updates the chat interface:

```javascript
const li = document.createElement("li");
li.textContent = data.username + ": " + data.message;
messages.appendChild(li);
```

Messages appear instantly without refreshing the page.

---

# 🔄 Application Data Flow

```
User Message
     │
     ▼
Browser (Socket.io Client)
     │
     ▼
Node.js Server
     │
     ▼
SQL Server Database
     │
     ▼
Broadcast to all clients
     │
     ▼
Live Chat UI Update
```

---

# 🧪 Running the Project

### Install dependencies

```
npm install
```

### Start the server

```
node server/server.js
```

### Open the application

```
http://localhost:3000
```

Open multiple browser tabs to test **real-time messaging**.

---

# 📊 Database Schema

```
Messages
----------------------------
id          INT (Primary Key)
username    VARCHAR(50)
message     TEXT
created_at  DATETIME
```

---

# 🔮 Future Improvements

Possible enhancements for production-ready chat systems:

* 🔐 User authentication (JWT)
* 💬 Chat rooms
* 🟢 Online user indicators
* ⌨️ Typing indicators
* 📜 Message history loading
* 📎 File and image sharing
* 🎨 UI improvements with React or Tailwind

---

# 📌 Why This Project Matters

This project demonstrates several important software engineering concepts:

* Real-time communication with WebSockets
* Event-driven backend architecture
* Persistent data storage with relational databases
* Client-server communication patterns
* Scalable chat application design

It serves as a **solid example of building a full-stack real-time system from scratch**.

---

# 👨‍💻 Author

Full Stack Developer focused on building scalable web applications, real-time systems, and modern backend architectures.

