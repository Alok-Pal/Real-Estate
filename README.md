# Real-Estate

![Node.js](https://img.shields.io/badge/Node.js-16.x-green)
![React](https://img.shields.io/badge/React-18.x-blue)
![Prisma](https://img.shields.io/badge/Prisma-2.x-brightgreen)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-blue)

## Project Overview

This repository contains both the **frontend** and **backend** components of the project. Users can easily clone this repository and follow the instructions below to get started. The application allows users to explore, manage, and interact with property listings, all while utilizing MongoDB Atlas for database management.

### Features

- **Listing Exploration**:  
  - Browse listings added by others.
  - Search functionality based on location and property title (e.g., Apartment, Studio).
  - Filters for selecting a price range.

- **Interaction Options**:  
  - View and Wishlist options for each listing.

- **View Listing Details**:  
  - Access detailed property information.
  - Enquiry form for users to reach out for more details.

- **Listing Management**:  
  - Editing and Deleting functionalities available only to the creator of the listing (authorized users).

- **Wishlist Management**:  
  - Add items to your wishlist from the homepage.
  - Wishlist menu to view and remove items.

- **Contact Form**:  
  - A contact form available for user communication.

### Backend Setup

- **MongoDB Atlas**:  
  - The project uses MongoDB Atlas, so no local database setup is required.
  - A connection string is provided in the environment variables.

- **Prisma ORM**:  
  - Prisma is used for database interaction, and the `DATABASE_URL` must be set correctly in the `.env` file to establish the connection to MongoDB.
  - Run `npx prisma generate` to generate Prisma client after setting up your environment variables.

### Installation Instructions

Follow these steps to set up the project:

1. Clone the repository:
    ```bash
    git clone https://github.com/Alok-Pal/Real-Estate.git
    cd realestate-back
    cd realestate-project
    ```

2. Install dependencies for both the frontend and backend:
    ```bash
    npm install
    ```

3. Set up environment variables:
    - Add the necessary environment variables in your `.env` file.
    - Ensure the `DATABASE_URL` in the Prisma configuration matches your MongoDB Atlas connection string.

4. Generate Prisma client:
    ```bash
    npx prisma generate
    ```

5. Start the application:
    ```bash
    npm run dev
    ```

### Technologies Used

- **Frontend**: React, Next.js
- **Backend**: Node.js, Express
- **Database**: MongoDB Atlas
- **ORM**: Prisma
- **Authentication**: JWT (JSON Web Tokens)

### Contributing

We welcome contributions to the project! Please follow the steps below to contribute:

1. Fork the repository.
2. Clone your fork locally:
    ```bash
    git clone https://github.com/Alok-Pal/Real-Estate.git
    cd realestate-back
    cd realestate-project
    ```
3. Create a new branch for your feature or bugfix:
    ```bash
    git checkout -b feature/your-feature-name
    ```
4. Commit your changes:
    ```bash
    git commit -m "Description of your changes"
    ```
5. Push to your fork:
    ```bash
    git push origin feature/your-feature-name
    ```
6. Open a pull request to the main repository.

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
