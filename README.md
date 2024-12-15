# Node.js and SQLite3 Authentication System

This is a simple authentication system built using Node.js and SQLite3. It allows users to register, login, and upload profile pictures.

## Features
- User registration with password hashing.
- User login with password verification.
- Profile picture upload and view.

## Requirements
- Node.js
- npm

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/nodejs-sqlite3-auth.git
   cd nodejs-sqlite3-auth
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   node index.js
   ```

4. Access the application at `http://localhost:3000`.

## Directory Structure
- `models/`: Contains database models.
- `routes/`: Contains route handlers for registration, login, and upload.
- `public/`: Contains static files like HTML forms.
- `uploads/`: Stores uploaded profile pictures.

## Contributing
Feel free to contribute by opening a pull request or submitting an issue.