const socket = io();

function sendMessage() {
    const username = document.getElementById("username").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!username || !message) {
        alert("Please enter both username and message.");
        return;
    }

    socket.emit("chat message", { username, message });
    document.getElementById("message").value = ""; // Clear message input
}

socket.on("chat message", (data) => {
    const li = document.createElement("li");
    li.textContent = `${data.username}: ${data.message}`;
    document.getElementById("messages").appendChild(li);
    li.scrollIntoView(); // Auto scroll to new message
});

socket.on("error", (error) => {
    alert("Error: " + error);
});