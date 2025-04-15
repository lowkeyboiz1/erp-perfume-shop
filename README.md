# Perfume Shop ERP System

## Overview

This is an Enterprise Resource Planning (ERP) system designed specifically for managing a perfume shop business. It provides a comprehensive set of tools for managing products, orders, customers, and sales analytics.

## Features

- **Dashboard:** Overview of key metrics and recent activities
- **Product Management:** Inventory tracking, product details, and stock management
- **Order Processing:** Sales order tracking from creation to fulfillment
- **Customer Management:** Customer database with purchase history and contact information
- **User Authentication:** Secure login system with role-based access control

## Tech Stack

- **Frontend:** Next.js, React, Tailwind CSS
- **Backend:** Next.js API Routes
- **Database:** SQLite with Prisma ORM
- **Authentication:** NextAuth.js
- **UI Components:** Custom components built with Tailwind CSS
- **Charts and Analytics:** Recharts

## Getting Started

### Prerequisites

- Node.js (18.x or higher)
- pnpm package manager

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/erp-perfume-shop-2025.git
   cd erp-perfume-shop-2025
   ```

2. Install dependencies:

   ```
   pnpm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory with the following variables:

   ```
   DATABASE_URL="file:./dev.db"
   ```

4. Set up the database:

   ```
   npx prisma db push
   ```

5. Start the development server:

   ```
   pnpm dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser to access the application.

## Project Structure

```
src/
├── app/                  # Next.js app router
│   ├── (auth)/           # Authentication pages
│   ├── (dashboard)/      # Dashboard and ERP features
│   └── api/              # API routes
├── components/           # Reusable UI components
│   ├── ui/               # Base UI components
│   └── ...               # Feature-specific components
├── lib/                  # Utility functions and shared code
└── prisma/               # Database schema and migrations
```

## Usage

1. Login using the default credentials:

   - Email: admin@example.com
   - Password: password

2. Navigate through the sidebar to access different modules:
   - Dashboard: Overview of shop performance
   - Products: Manage inventory and product details
   - Orders: Process customer orders
   - Customers: Manage customer information
   - Settings: Configure system settings

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Designed and developed as a project for managing perfume shop operations efficiently
- UI inspired by modern design principles for great user experience
# erp-perfume-shop
