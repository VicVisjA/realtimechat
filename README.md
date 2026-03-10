# Real Time Chat App

A simple real-time chat application built with Node.js, Express, Socket.IO, and SQLite.

## Features

- Real-time messaging
- Cozy UI design
- Database storage for messages using SQLite

## Setup

1. Install dependencies:

   ```
   npm install
   ```

2. The database is automatically created as `chat.db` in the server directory when you run the app.

3. Start the server:

   ```
   npm start
   ```

4. Open `http://localhost:3000` in your browser.

## Database

Messages are stored in a SQLite database (`server/chat.db`). The table `messages` includes:

- id (auto-increment)
- username
- message
- timestamp

No additional setup required - the database and table are created automatically.

3. Start the server:

   ```
   npm start
   ```

4. Open `http://localhost:3000` in your browser.

## Notes

- If DB is not set up, messages will still be broadcasted in real-time but not saved.
- Update the DB config in `server/db.js` with actual credentials.
