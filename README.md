
# My First API Project

This project is an API that handles GET, PATCH, DELETE, and POST requests. It is built using Node.js, with MongoDB Atlas as the database. The project demonstrates a simple connection to MongoDB, error handling, and CRUD operations.

## Project Description

This API was created to demonstrate CRUD (Create, Read, Update, Delete) functionality using Node.js and MongoDB. The project has two main files:

- `db.js`: Handles the connection to MongoDB Atlas using `async/await` and error handling through `try/catch` and `throw`.
- `app.js`: Manages the API routes and the HTTP request methods (GET, PATCH, DELETE, POST).

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add your MongoDB connection string and any other necessary configuration.

   Example:

   ```
  CONNECTION_STRING=mongodb+srv://<username>:<password>@cluster0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
   ```

4. Start the server:

   ```bash
   node app.js
   ```

## API Endpoints

| Method | Endpoint     | Description              |
|--------|--------------|--------------------------|
| GET    | `/api/data`  | Retrieve data from the database |
| POST   | `/api/data`  | Add new data to the database  |
| PATCH  | `/api/data/:id` | Update data by ID          |
| DELETE | `/api/data/:id` | Delete data by ID          |

## Error Handling

The database connection and API operations are handled using `async/await` with error handling using `try/catch` blocks. Any connection errors or operational errors are thrown and logged appropriately.


