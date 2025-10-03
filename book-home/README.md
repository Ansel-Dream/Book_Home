📋 Project Overview
This is a comprehensive platform that integrates property rental and ride-sharing services into a single application. It allows users to book accommodations, share rides, and manage their travel needs through a unified interface.

🎯 Key Features :

Property Booking: Search and book rooms, flats, or houses

Ride Sharing: Post or book rides between cities

User Authentication: Secure registration and login system

Role-Based Access: Different dashboards for hosts and guests

Advanced Search & Filtering: Find properties and rides based on various criteria


🗂️ Project Structure : 


├── public/                 # Static assets
│   ├── favicon.ico
├── src/                    # Source code
│   ├── assets/            # Static resources
│   │   ├── images/        # Image files
│   │   │   ├── icons/     # UI icons
│   │   │   ├── logos/     # Brand logos
│   ├── components/        # Reusable UI components
│   │   ├── common/        # Shared components
│   │   │   ├── Header/
│   │   │   │   ├── Header.jsx
│   │   │   ├── Footer/
│   │   │   │   ├── Footer.jsx
│   │   │   ├── Navigation/
│   │   │   │   ├── Navigation.jsx
│   │   │   ├── SearchBar/
│   │   │   │   ├── SearchBar.jsx
│   │   │   ├── Filter/
│   │   │   │   ├── Filter.jsx
│   │   │   ├── Modal/
│   │   │   │   ├── Modal.jsx
│   │   │   └── Loading/
│   │   │       ├── Loading.jsx
│   │   ├── auth/          # Authentication components
│   │   │   ├── LoginForm/
│   │   │   │   ├── LoginForm.jsx
│   │   │   ├── RegisterForm/
│   │   │   │   ├── RegisterForm.jsx
│   │   │   └── AuthWrapper/
│   │   │       ├── AuthWrapper.jsx
│   │   ├── property/      # Property-related components
│   │   │   ├── PropertyCard/
│   │   │   │   ├── PropertyCard.jsx
│   │   │   ├── PropertyList/
│   │   │   │   ├── PropertyList.jsx
│   │   │   ├── PropertyDetail/
│   │   │   │   ├── PropertyDetail.jsx
│   │   │   ├── PropertyForm/
│   │   │   │   ├── PropertyForm.jsx
│   │   │   └── BookingForm/
│   │   │       ├── BookingForm.jsx
│   │   ├── ride/          # Ride-sharing components
│   │   │   ├── RideCard/
│   │   │   │   ├── RideCard.jsx
│   │   │   ├── RideList/
│   │   │   │   ├── RideList.jsx
│   │   │   ├── RideDetail/
│   │   │   │   ├── RideDetail.jsx
│   │   │   ├── RideForm/
│   │   │   │   ├── RideForm.jsx
│   │   │   └── RideBooking/
│   │   │       ├── RideBooking.jsx
│   │   └── dashboard/     # Dashboard components
│   │       ├── GuestDashboard/
│   │       │   ├── GuestDashboard.jsx
│   │       ├── HostDashboard/
│   │       │   ├── HostDashboard.jsx
│   │       ├── BookingHistory/
│   │       │   ├── BookingHistory.jsx
│   │       └── ManageListings/
│   │           ├── ManageListings.jsx
│   ├── pages/             # Page components
│   │   ├── Home/
│   │   │   ├── Home.jsx
│   │   ├── Properties/
│   │   │   ├── Properties.jsx
│   │   ├── Rides/
│   │   │   ├── Rides.jsx
│   │   ├── Login/
│   │   │   ├── Login.jsx
│   │   ├── Register/
│   │   │   ├── Register.jsx
│   │   ├── Dashboard/
│   │   │   ├── Dashboard.jsx
│   │   ├── Profile/
│   │   │   ├── Profile.jsx
│   │   └── NotFound/
│   │       ├── NotFound.jsx
│   ├── hooks/             # Custom React hooks
│   │   ├── useAuth.js
│   │   ├── useProperties.js
│   │   ├── useRides.js
│   │   ├── useBookings.js
│   │   └── useLocalStorage.js
│   ├── store/             # Redux store configuration
│   │   ├── slices/        # Redux slices
│   │   │   ├── authSlice.js
│   │   │   ├── propertySlice.js
│   │   │   ├── rideSlice.js
│   │   │   ├── bookingSlice.js
│   │   │   └── uiSlice.js
│   │   ├── store.js       # Store configuration
│   │   └── index.js       # Store exports
│   ├── utils/             # Utility functions
│   │   ├── constants/     # Application constants
│   │   │   ├── routes.js
│   │   │   ├── roles.js
│   │   │   └── api.js
│   │   ├── helpers/       # Helper functions
│   │   │   ├── auth.js
│   │   │   ├── validation.js
│   │   │   ├── formatters.js
│   │   │   └── filters.js
│   │   └── api/           # API utility functions
│   │       ├── authAPI.js
│   │       ├── propertyAPI.js
│   │       ├── rideAPI.js
│   │       └── bookingAPI.js
│   ├── contexts/          # React contexts
│   │   ├── AuthContext.js
│   │   └── AppContext.js
│   ├── router/            # Routing configuration
│   │   ├── AppRouter.jsx
│   │   ├── ProtectedRoute.jsx
│   │   └── PublicRoute.jsx
│   ├── App.jsx            # Main App component
│   ├── App.css            # Main App styles
│   ├── index.jsx           # Application entry point
│   └── index.css          # Global styles
├── docs/                  # Documentation
│   ├── api/               # API documentation
│   ├── deployment/        # Deployment guides
│   └── user-guides/       # User manuals
├── tests/                 # Test files
│   ├── unit/              # Unit tests
│   ├── integration/       # Integration tests
│   └── e2e/               # End-to-end tests
├── scripts/               # Build and utility scripts
├── config/                # Configuration files
│   ├── tailwind.config.js
│   └── webpack.config.js
├── .env.                 # Environment variables template
├── .gitignore            # Git ignore rules
├── package.json          # NPM dependencies and scripts
├── package-lock.json     # NPM lock file
├── README.md             # Project documentation
└── LICENSE               # Project license


🛠️ Technology Stack

Frontend
React.js - JavaScript library for building user interfaces

Redux Toolkit - State management library

React Router DOM - Routing library for React applications

Tailwind CSS - Utility-first CSS framework

Development Tools

VS Code - Code editor

Git - Version control system

Postman - API testing tool

🚀 Getting Started
Prerequisites
Node.js (version 14 or higher)

npm or yarn package manager

Installation
Clone the repository

bash
git clone https://github.com/your-username/BOOK-HOME.git
cd book-home
Install dependencies

bash
npm install
Set up environment variables

bash
cp .env.example .env
# Edit .env with your configuration
Start the development server


📁 Key Directory Explanations
/src/components
Contains all reusable React components organized by feature:

common: Shared components used across the application

auth: Authentication-related components

property: Property listing and booking components

ride: Ride-sharing components

dashboard: User dashboard components

/src/pages

Top-level page components that represent different routes in the application.

/src/store
Redux store configuration and slices for state management:

authSlice: Manages authentication state

propertySlice: Manages property-related state

rideSlice: Manages ride-sharing state

bookingSlice: Manages booking state

uiSlice: Manages UI state (loading, errors, etc.)

/src/utils
Utility functions and constants:

constants: Application-wide constants

helpers: Reusable helper functions

api: API calling utilities

/src/hooks
Custom React hooks for reusable logic across components.

🔐 Authentication & Roles

The system supports two main user roles:

Guest
Search and book properties

Book rides

View booking history

Manage favorites

Host
List properties for rent

Post rides for sharing

Manage booking requests

Handle payments and withdrawals

🗃️ Data Models
User
User ID, name, email, password, role, timestamps

Property
Property ID, host reference, title, description, location, price, images, amenities, availability

Ride
Ride ID, host reference, from/to cities, date, time, available seats, price per seat

Booking
Booking ID, user reference, property/ride reference, dates, status, payment status

Payment
Payment ID, booking reference, amount, method, status, transaction date

🎨 Styling Approach
Tailwind CSS for utility-first styling

CSS Modules for component-scoped styles

Responsive design for mobile and desktop

📱 Features Implementation
Core Features
User Authentication - Secure login/register with role management

Property Management - CRUD operations for property listings

Ride Sharing - Post and book rides between cities

Search & Filter - Advanced filtering for properties and rides

Booking System - Complete booking flow with status management

Future Enhancements
Payment gateway integration

Real-time notifications

Review and rating system

Map integration for locations

Multi-language support

🧪 Testing
bash
# Run unit tests
npm test

# Run integration tests
npm run test:integration

# Run e2e tests
npm run test:e2e
📦 Build & Deployment
bash
# Create production build
npm run build

# Serve production build locally
npm run serve
🤝 Contributing