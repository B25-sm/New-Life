# NewLife - MERN Stack Application

A full-stack MERN (MongoDB, Express.js, React/Next.js, Node.js) application with authentication and user management.

## 🚀 Tech Stack

- **Frontend**: Next.js 14 (App Router), React, TypeScript, Tailwind CSS
- **Backend**: Express.js, Node.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **Password Security**: bcryptjs

## 📁 Project Structure

```
NewLife/
├── client/                 # Next.js frontend
│   ├── app/               # App router pages
│   │   ├── auth/         # Authentication pages
│   │   ├── dashboard/    # Dashboard page
│   │   └── layout.tsx    # Root layout
│   ├── lib/              # API utilities
│   └── package.json
├── server/               # Express backend
│   ├── config/          # Configuration files
│   ├── controllers/     # Route controllers
│   ├── middleware/      # Auth middleware
│   ├── models/          # MongoDB models
│   ├── routes/          # API routes
│   ├── server.js        # Entry point
│   └── package.json
└── package.json         # Root package.json
```

## 🎨 Color Palette

- **Primary**: #0A0F2C (Midnight Blue)
- **Accent**: #FFD100 (Warm Gold)
- **Support**: #E5E5E5 (Soft Light Gray)

## 🛠️ Setup Instructions

### Prerequisites

- Node.js (v18 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

### Installation

1. **Install all dependencies:**
   ```bash
   npm run install-all
   ```

   Or install separately:
   ```bash
   npm install
   cd client && npm install
   cd ../server && npm install
   ```

2. **Configure Environment Variables:**

   Create `server/.env`:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/newlife
   JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
   NODE_ENV=development
   ```

   Create `client/.env.local`:
   ```
   NEXT_PUBLIC_API_URL=http://localhost:5000/api
   ```

3. **Start MongoDB:**
   - If using local MongoDB, make sure it's running on port 27017
   - Or use MongoDB Atlas connection string in `MONGODB_URI`

4. **Run the application:**

   **Development (both frontend and backend):**
   ```bash
   npm run dev
   ```

   **Or run separately:**

   Terminal 1 (Backend):
   ```bash
   npm run server
   ```

   Terminal 2 (Frontend):
   ```bash
   npm run client
   ```

## 📝 Available Scripts

### Root Level
- `npm run dev` - Run both frontend and backend concurrently
- `npm run install-all` - Install dependencies for all packages
- `npm run client` - Start Next.js frontend
- `npm run server` - Start Express backend
- `npm run build` - Build Next.js for production
- `npm start` - Start production server

### Client (Next.js)
- `npm run dev` - Start development server (port 3000)
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### Server (Express)
- `npm run dev` - Start development server with watch mode (port 5000)
- `npm start` - Start production server

## 🔐 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (protected)

### Users (Protected)
- `GET /api/users` - Get all users (admin only)
- `GET /api/users/:id` - Get user by ID
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user (admin only)

### Health Check
- `GET /api/health` - Server health check

## 🌐 Pages

- `/` - Landing page
- `/auth/login` - Login page
- `/auth/register` - Registration page
- `/dashboard` - User dashboard (protected)

## 🔒 Authentication Flow

1. User registers/logs in
2. Server returns JWT token
3. Token is stored in localStorage
4. Token is sent in Authorization header for protected routes
5. Server validates token and returns user data

## 📦 Dependencies

### Frontend
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Axios

### Backend
- Express.js
- MongoDB (Mongoose)
- JWT
- bcryptjs
- CORS
- dotenv

## 🚧 Development Notes

- Backend runs on `http://localhost:5000`
- Frontend runs on `http://localhost:3000`
- API base URL: `http://localhost:5000/api`
- JWT tokens expire in 30 days
- Passwords are hashed with bcrypt (salt rounds: 10)

## 📄 License

ISC

