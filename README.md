 https://plp-mern-stack-development.github.io/react-js-jsx-and-css-mastering-front-end-development-eddywarima/

A modern, responsive React application built with Vite that demonstrates comprehensive React development skills including component architecture, state management, API integration, and responsive design.

🚀 Features
Core Functionality
📝 Task Management: Create, read, update, and delete tasks

🔍 Task Filtering: View all, active, or completed tasks

🌐 API Integration: Fetch and display data from JSONPlaceholder API

📄 Search & Pagination: Search through API data with infinite scrolling

🌙 Dark/Light Theme: Toggle between themes with persistent storage

Technical Features
📱 Responsive Design: Mobile-first approach works on all devices

💾 Local Storage: Tasks persist between browser sessions

⏳ Loading States: Elegant loading and error handling

🎣 Custom Hooks: Reusable useLocalStorage hook

🔮 Context API: Theme management across the application

🎬 Animations: Smooth transitions and hover effects

🛠️ Tech Stack
Frontend Framework: React 18

Build Tool: Vite

Styling: Tailwind CSS

Routing: React Router DOM

State Management: React Hooks (useState, useEffect, useContext)

API: JSONPlaceholder REST API

Icons: Emoji-based icons

Storage: Browser Local Storage

📦 Installation
Prerequisites
Node.js (v18 or higher recommended)

npm or yarn package manager

Setup Instructions
Clone the repository

bash
git clone <repository-url>
cd task-manager-app
Install dependencies

bash
npm install
Start the development server

bash
npm run dev
Open your browser
Navigate to http://localhost:5173

Build for Production
bash
npm run build
npm run preview
🏗️ Project Structure
text
src/
├── components/
│   ├── ui/
│   │   ├── Button.jsx      # Reusable button component
│   │   ├── Card.jsx        # Card layout component
│   │   └── index.js        # Component exports
│   ├── Navbar.jsx          # Navigation component
│   ├── Footer.jsx          # Footer component
│   └── Layout.jsx          # Main layout wrapper
├── pages/
│   ├── Home.jsx            # Landing page
│   ├── Tasks.jsx           # Task management page
│   ├── ApiData.jsx         # API data display page
│   └── index.js            # Page exports
├── hooks/
│   ├── useLocalStorage.js  # Custom localStorage hook
│   └── index.js            # Hook exports
├── context/
│   └── ThemeContext.js     # Theme management context
├── utils/
│   └── constants.js        # Application constants
├── App.jsx                 # Main app component
└── main.jsx                # Application entry point
🎯 Component Architecture
Reusable UI Components
Button Component
Variants: primary, secondary, danger

Sizes: small, medium, large

Features: disabled states, custom classes

Usage:

jsx
<Button variant="primary" size="medium" onClick={handleClick}>
  Click Me
</Button>
Card Component
Padding Options: small, medium, large

Hover Effects: Optional scale and shadow animations

Dark Mode Support: Automatic theme adaptation

Usage:

jsx
<Card padding="medium" hover={true}>
  Content goes here
</Card>
Layout Components
Navbar: Responsive navigation with theme toggle

Footer: Organized links and copyright information

Layout: Wrapper component for consistent structure

🔧 State Management
React Hooks Implementation
useState
Task management (add, toggle, delete)

Filter states (all, active, completed)

API data and loading states

Search functionality

useEffect
Load saved tasks from localStorage

Fetch API data with pagination

Theme initialization

useContext
Theme management across entire app

Persistent theme preference storage

Custom Hooks
useLocalStorage
javascript
const [tasks, setTasks] = useLocalStorage('tasks', []);
Persists state to localStorage automatically with error handling.

🌐 API Integration
JSONPlaceholder Integration
Endpoint: https://jsonplaceholder.typicode.com/posts

Features:

Pagination with infinite scrolling

Search functionality across title and body

Loading states with user feedback

Error handling with retry mechanism

API Data Display
Grid layout with responsive cards

Real-time search functionality

Load more functionality for infinite scroll

Elegant empty and error states

🎨 Styling & Design
Tailwind CSS Features
Responsive Design: Mobile-first breakpoints

Dark Mode: dark: variant classes with class-based strategy

Utility Classes: Comprehensive spacing, typography, colors

Custom Animations: Fade-in and slide-up transitions

Theme System
Light/Dark Mode Toggle: Persistent across sessions

Smooth Transitions: CSS transitions for theme changes

Consistent Design: Cohesive color scheme across components

📱 Pages & Routing
Home Page (/)
Feature showcase with modern hero section

Application statistics and metrics

Call-to-action buttons for navigation

Responsive grid layout

Task Manager (/tasks)
Task Creation: Simple form with validation

Task List: Interactive list with completion toggle

Filter System: All, Active, Completed filters

Statistics: Real-time task counts

Bulk Actions: Clear completed tasks

API Data (/api-data)
Posts Display: Grid layout with cards

Search Functionality: Real-time filtering

Pagination: Infinite scrolling with load more

Error Handling: Network error recovery

🚀 Available Scripts
bash
npm run dev          # Start development server (http://localhost:5173)
npm run build        # Build for production
npm run preview      # Preview production build locally
npm run lint         # Run ESLint for code quality
🧪 Testing the Application
After starting the development server, test the following features:

1. Task Management
✅ Add new tasks using the input form

✅ Mark tasks as completed using checkboxes

✅ Delete individual tasks

✅ Filter tasks using All/Active/Completed buttons

✅ Clear all completed tasks at once

✅ Verify tasks persist after page refresh

2. Theme System
🌙 Toggle between light and dark modes

🔄 Refresh page to verify theme persistence

📱 Check theme consistency across all pages

3. API Integration
🌐 Browse fetched posts from JSONPlaceholder

🔍 Use search to filter posts by title or content

📜 Test infinite scrolling with "Load More"

⏳ Observe loading states during API calls

❌ Simulate network errors to test error handling

4. Responsive Design
📱 Test on mobile devices or browser dev tools

💻 Verify layout on tablet and desktop screens

🧭 Check mobile navigation functionality

🚀 Deployment
Vercel (Recommended)
Push your code to GitHub

Connect your repository to Vercel

Deploy with zero configuration

Netlify
bash
npm run build
# Drag and drop the dist folder to Netlify
Other Platforms
The application can be deployed to any static hosting service:

GitHub Pages

Firebase Hosting

AWS S3 + CloudFront

Heroku (with static buildpack)

🔮 Future Enhancements
Potential improvements and additional features:

User authentication and authorization

Backend integration with real database

Task categories, tags, and priorities

Due dates, reminders, and calendar integration

Drag and drop task ordering

Data import/export functionality

Unit and integration testing with Jest

PWA capabilities and offline support

Internationalization (i18n)

Advanced filtering and sorting options

🤝 Contributing
We welcome contributions! Please follow these steps:

Fork the repository

Create a feature branch (git checkout -b feature/amazing-feature)

Commit your changes (git commit -m 'Add some amazing feature')

Push to the branch (git push origin feature/amazing-feature)

Open a Pull Request

Development Guidelines
Follow React best practices and hooks rules

Use meaningful component and variable names

Ensure responsive design for all components

Test across different browsers and devices

Update documentation for new features

📝 License
This project is licensed under the MIT License - see the LICENSE file for details.

👨‍💻 Author
Built as a demonstration of modern React development practices.

🙏 Acknowledgments
Vite for the fast build tool

Tailwind CSS for the utility-first CSS framework

JSONPlaceholder for the fake API

React Router for client-side routing

React for the amazing framework

