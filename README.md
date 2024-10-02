# Adventure Trip Planning Website

This repository contains the code for an adventure trip planning website built using the MERN stack (MongoDB, Express, React, and Node.js). The website allows users to plan and organize their adventure trips by providing information about various destinations, activities, and accommodations.

## Features

- User registration and authentication system
- Browse and search for destinations, activities, and accommodations
- Create and manage trip itineraries
- View detailed information about destinations, activities, and accommodations
- User reviews and ratings for destinations, activities, and accommodations
- User profile management

## Essential Pages

The Adventure Hub: Welcome users with a visually stunning landing page that captures the
essence of adventure, showcasing the thrilling possibilities and unique features of the platform.

Trip Planner: Create an intuitive and interactive itinerary page where users can effortlessly drag
and drop various components to design their customised adventure trip, ensuring ease of use
and optimal timeline management.

Thrills & Spills Checkout: Design a secure and user-friendly payment page that allows users to
confirm their vacation details, providing a seamless booking experience and ensuring their
adventure journey is just a few clicks away.

## Installation

To run the adventure trip planning website locally, follow these steps:

1. Clone the repository:

```
git clone https://github.com/your-username/adventure-trip-planning-website.git
```

2. Navigate to the project directory:

```
cd adventure-trip-planning-website
```

3. Install the dependencies for both the server and client:

```
cd server
npm install

cd ../client
npm install
```

4. Configure the environment variables:

   - Create a `.env` file in the `server` directory.
   - Add the following variables and replace the values with your own:

   ```
   PORT=3000
   DATABASE_URL=mongodb://localhost:27017/adventure_trip
   SECRET_KEY=your_secret_key
   ```

5. Start the development server:

   - Open a terminal in the `server` directory and run:

   ```
   npm start
   ```

   - Open another terminal in the `client` directory and run:

   ```
   npm start
   ```

6. Access the website in your browser at `http://localhost:3000`.

## Dependencies

The adventure trip planning website relies on the following dependencies:

### Server

- Express.js
- Mongoose

### Client

- React
- React Router


## Contributing

If you'd like to contribute to this project, please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with descriptive commit messages.
4. Push your changes to your forked repository.
5. Submit a pull request to the original repository.

Please ensure that your code follows the project's coding style and includes appropriate documentation.
