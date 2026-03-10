const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const path = require("path");
const db = require("./db");

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, "../client")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/index.html"));
});

const server = http.createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
    console.log("User connected");

    socket.on("chat message", (data) => {
        const { username, message } = data;

        if (!username || !message) {
            socket.emit("error", "Username and message are required");
            return;
        }

        // Insert into SQLite database
        db.run('INSERT INTO messages (username, message) VALUES (?, ?)', [username, message], function(err) {
            if (err) {
                console.error("Error saving message:", err);
                socket.emit("error", "Failed to save message");
            } else {
                io.emit("chat message", data);
            }
        });
    });

    socket.on("disconnect", () => {
        console.log("User disconnected");
    });
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});