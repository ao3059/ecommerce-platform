# ecommerce-platform

 Overview

This is a full-stack e-commerce platform built with a Node.js backend (API) and a React frontend (WebApp). The project is integrated with **GitHub Actions** for Continuous Integration (CI) and Continuous Deployment (CD), and it is deployed to **AWS Elastic Beanstalk**.

The application allows users to browse products, manage their accounts, place orders, and more. The backend handles authentication, product listings, and order processing.



Project Structure

```plaintext
ecommerce-platform/
├── api/                    # Backend API (Node.js/Express)
│   ├── controllers/         # API controllers
│   ├── models/              # Database models
│   ├── routes/              # API routes
│   ├── tests/               # Unit tests for the backend
│   ├── config/              # Configuration files
│   └── server.js            # Main API server
├── webapp/                  # Frontend (React)
│   ├── src/                 # React components, hooks, etc.
│   ├── public/              # Static assets
│   └── package.json         # Frontend dependencies and scripts
├── .github/workflows/       # GitHub Actions workflows for CI/CD
│   └── elasticbeanstalk-deploy.yml # Workflow for Elastic Beanstalk deployment
└── README.md                # Project documentation (this file)


Features
Product Listings: Users can browse through product categories and view product details.
User Authentication: Supports user registration, login, and account management.
Shopping Cart & Checkout: Users can add products to the cart, place orders, and make payments.
Order Management: Users can view past orders and their statuses.
Admin Panel: For managing products, orders, and users.
Tech Stack
Frontend: React (with hooks)
Backend: Node.js with Express.js
Database: MySQL (via Amazon RDS)
Deployment: AWS Elastic Beanstalk (Dockerized)
CI/CD: GitHub Actions
Prerequisites
Before you begin, ensure you have the following installed on your local machine:

Node.js (version 14 or higher)
Docker
Git
An AWS account with access to Elastic Beanstalk and RDS
Optional:

AWS CLI (if you want to manage AWS resources from your local machine)
Local Development Setup
Follow these steps to set up the project on your local machine:

1. Clone the Repository
git clone https://github.com/your-username/ecommerce-platform.git
cd ecommerce-platform
2. Backend Setup (API)
Install Backend Dependencies
Navigate to the api/ directory and install dependencies:

cd api
npm install
Environment Variables
Create a .env file in the api/ directory with the following content :

plaintext
Copy code
DB_HOST=your-rds-endpoint
DB_USER=your-username
DB_PASSWORD=your-password
DB_NAME=ecommerce
JWT_SECRET=your-secret-key
Run the Backend Locally
Start the backend server:


npm start
By default, the API will be available at http://localhost:5000.

3. Frontend Setup (WebApp)
Install Frontend Dependencies
Navigate to the webapp/ directory and install dependencies:


cd ../webapp
npm install
Run the Frontend Locally
Start the frontend development server:


npm start
By default, the frontend will be available at http://localhost:3000.

Running Tests
Backend Tests
To run unit tests for the backend API:

cd api
npm test
Frontend Tests
To run unit tests for the frontend:

cd webapp
npm test
Deployment
1. Continuous Deployment with GitHub Actions
This project uses GitHub Actions for continuous deployment to AWS Elastic Beanstalk. Every push to the main branch will trigger a workflow that:

Builds the frontend and backend.
Deploys the Dockerised application to Elastic Beanstalk.
The workflow file is located in .github/workflows/elasticbeanstalk-deploy.yml.

GitHub Actions Secrets
Make sure the following secrets are configured in your GitHub repository:

AWS_ACCESS_KEY_ID: Your AWS access key.
AWS_SECRET_ACCESS_KEY: Your AWS secret key.
2. Manual Deployment
If needed, you can deploy the application manually using the Elastic Beanstalk CLI or AWS Console.

Dockerized Deployment
The application uses Docker to package both the backend and frontend into containers. The Dockerfile for each part of the application is located in their respective directories.

To build and run the Docker containers locally, use:


In the root of the project
docker-compose up --build
AWS Resources
The following AWS services are used:

Elastic Beanstalk: For hosting the application.
Amazon RDS: MySQL database.
S3: (Optional) For static assets or file storage.
CloudWatch: For monitoring logs and setting up alarms.
Performance & Security
Caching: Add caching using Redis or Memcached (via AWS ElastiCache) to improve performance.
Security: Environment variables and secrets are managed using AWS Secrets Manager or SSM Parameter Store.
Troubleshooting
Elastic Beanstalk Logs: If there are issues in production, you can check logs directly from the AWS Elastic Beanstalk console.
Database Connection Issues: Ensure that your security groups allow traffic between the EC2 instance and the RDS instance.
Environment Variables: Double-check that all required environment variables are properly configured in Elastic Beanstalk.
Future Enhancements
Add more detailed product filters.
Implement search functionality.
Introduce payment gateway integration.
Add user reviews and ratings for products.
Deploy the frontend to Amazon S3 + CloudFront for better scalability.

