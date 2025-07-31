# Lurevia Store

A modern, responsive leather shoe e-commerce website built using **React**, **Vite**, **Tailwind CSS**, and **Sonner** — designed for showcasing premium products with a sleek UI and essential e-commerce features.  
_Note: This is a **frontend-only** demo project — no backend or database functionality is included._

## Live Demo

> [link](https://lurevia-store.vercel.app/)

## Tech Stack

- **Frontend:** React 18 (with Vite)  
- **Styling:** Tailwind CSS  
- **UI Components:** Custom React components, Sonner for toast notifications  
- **Routing:** React Router DOM  
- **State Management:** React Context API (for cart and simple authentication)  
- **Others:** TypeScript, ESLint, Prettier  

## Features

- Home, About, Products, Product Details, Contact, Cart, Checkout, Login, and Signup pages  
- Frontend-only Cart system with add, update, remove, and clear functionality  
- Product data handled locally via a static products data file (`src/data/products.ts`)  
- Responsive, mobile-first design with a clean and modern UI  
- Simple frontend-only authentication simulation with sign in, sign up, and anonymous login  
- Toast notifications for user feedback using Sonner  
- Mobile navigation menu with toggling and active link highlighting  
- Component-driven architecture for reusability and maintainability  

## Getting Started

### Prerequisites

Make sure you have **Node.js (v18+)** and **npm** or **yarn** installed.

### Installation
```
git clone https://github.com/UditSax3na/LureviaStore.git
cd LureviaStore
npm install # or yarn install
```
### Run the Dev Server
```
npm run dev # or yarn dev
```

>The app will be available at `http://localhost:5173`

## Build for Production

```
npm run build
```

To preview the production build:
```
npm run preview
```

## Project Structure
```
/src
├─ /components → UI & layout components (Navbar, ProductCard, SignOutButton, etc.)
├─ /context → React Contexts (CartContext, AuthContext if implemented)
├─ /data → Static products data file (products.ts)
/pages → Route pages (Home, ProductsPage, ProductDetailsPage, Cart, Checkout, Login, Signup, etc.)
/styles → Global Tailwind CSS and custom styles
/main.tsx → App entry point with routing setup
```

## Author

**Udit Saxena**  
GitHub: [@UditSax3na](https://github.com/UditSax3na)