# Service Booking Platform 🧾

A full-stack **service booking platform** built entirely with **TypeScript**, featuring a **Next.js** client and admin dashboard, an **Express.js** backend, and **MongoDB** database.  
It provides secure authentication with **JWT** + **bcrypt**, efficient state management with **Zustand**, and an optimized developer experience with modular architecture and CI-ready configurations.

---

## 🚀 Tech Stack

**Frontend (Client & Admin):**
- [Next.js (TypeScript)](https://nextjs.org/)
- [Zustand](https://zustand-demo.pmnd.rs/) for state management
- [TailwindCSS](https://tailwindcss.com/) for styling and responsiveness

**Backend:**
- [Express.js (TypeScript)](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/)
- [bcrypt](https://www.npmjs.com/package/bcrypt) for password hashing
- [jsonwebtoken (JWT)](https://www.npmjs.com/package/jsonwebtoken) for authentication
- [Zod](https://zod.dev/) / [Yup](https://github.com/jquense/yup) for request validation
- Rate limiting and error-handling middleware for improved security

---

## 🔐 Key Features

- **Full Authentication System**
  - Secure registration & login using **bcrypt** + **JWT**
  - Token refresh flow for seamless sessions
  - Role-based access control for admin and users
  
- **Zustand-Based State Management**
  - Centralized global store for user sessions and bookings
  - Persistent state and optimistic UI updates
  
- **Admin Dashboard**
  - Manage bookings, pricing, and availability
  - CRUD operations for services, offers, and discounts
  - Visual calendar overview
  
- **Customer Platform**
  - Book services, manage upcoming sessions, cancel or reschedule
  - Real-time updates with API and global state sync

- **Scalable Backend Architecture**
  - Feature-based modular structure (`/routes`, `/controllers`, `/models`)
  - Input validation, error handling, and clean service separation

---

## ⚙️ Installation & Setup

### Prerequisites
Make sure you have the following installed:
- **Node.js** >= 18
- **npm** or **yarn**
- **MongoDB**


