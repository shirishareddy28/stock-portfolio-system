Stock Portfolio Management System - Backend
This is the backend of a Stock Portfolio Management System built using Node.js, Express.js, and MongoDB. The application allows users to manage their stock portfolios, including adding, viewing, updating, and deleting stocks.

Table of Contents
Prerequisites
Installation
Environment Variables
Running the Application
API Routes
Technologies Used
License
Prerequisites
Before you begin, ensure that you have the following installed:

Node.js (LTS version recommended)
MongoDB Atlas account (for database access)
Postman or cURL (for testing API endpoints)
Installation
Clone the repository:

git clone https://github.com/your-username/stock-portfolio-backend.git
Navigate to the project directory:

cd stock-portfolio-backend
Install dependencies:

npm install
Environment Variables
Create a .env file in the root directory and add the following variables:

MONGO_URI="mongodb+srv://<username>:<password>@cluster0.whkmqcq.mongodb.net/portfolioDB?retryWrites=true&w=majority"
PORT=5000
Replace:

<username> with your MongoDB Atlas username.
<password> with your MongoDB Atlas password.
portfolioDB with the name of the MongoDB database.
Running the Application
To start the server in development mode, run:

npx nodemon server.js
The application will be running on http://localhost:5000.

API Routes
1. POST /api/stocks
Description: Adds a new stock to the portfolio.

Request Body:

{
  "symbol": "AAPL",
  "quantity": 10,
  "purchasePrice": 150
}
Response:

{
  "message": "Stock added successfully",
  "stock": {
    "symbol": "AAPL",
    "quantity": 10,
    "purchasePrice": 150,
    "id": "60d43e299edb7a5fc6fdb7c8"
  }
}
2. GET /api/stocks
Description: Fetches all stocks in the portfolio.

Response:

[
  {
    "symbol": "AAPL",
    "quantity": 10,
    "purchasePrice": 150,
    "id": "60d43e299edb7a5fc6fdb7c8"
  },
  {
    "symbol": "GOOGL",
    "quantity": 5,
    "purchasePrice": 2000,
    "id": "60d43e299edb7a5fc6fdb7c9"
  }
]
3. GET /api/stocks/:id
Description: Fetches details of a specific stock by ID.

Response:

{
  "symbol": "AAPL",
  "quantity": 10,
  "purchasePrice": 150,
  "id": "60d43e299edb7a5fc6fdb7c8"
}
4. PUT /api/stocks/:id
Description: Updates stock details.

Request Body:

{
  "symbol": "AAPL",
  "quantity": 15,
  "purchasePrice": 160
}
Response:

{
  "message": "Stock updated successfully",
  "stock": {
    "symbol": "AAPL",
    "quantity": 15,
    "purchasePrice": 160,
    "id": "60d43e299edb7a5fc6fdb7c8"
  }
}
5. DELETE /api/stocks/:id
Description: Deletes a specific stock from the portfolio.

Response:

{
  "message": "Stock deleted successfully"
}
Technologies Used
Node.js: JavaScript runtime for the backend.
Express.js: Web framework for Node.js.
MongoDB: NoSQL database to store stock data.
Mongoose: ODM for MongoDB to manage database interactions.
dotenv: To manage environment variables securely.
Nodemon: To automatically restart the server during development.
License
This project is licensed under the MIT License.

You can adjust this README.md to fit your specific project requirements, especially the API routes and MongoDB setup.
