# Fullstack User Management App

A complete fullstack application built with FastAPI, Next.js, and PostgreSQL, all containerized with Docker Compose.

## Tech Stack

- **Backend**: FastAPI (Python)
- **Frontend**: Next.js (React/TypeScript)
- **Database**: PostgreSQL
- **Infrastructure**: Docker & Docker Compose

## Features

- ✅ User creation and management
- ✅ RESTful API with FastAPI
- ✅ Modern React frontend with Tailwind CSS
- ✅ PostgreSQL database with SQLAlchemy ORM
- ✅ Fully containerized with Docker
- ✅ CORS enabled for frontend-backend communication

## Quick Start

1. **Start the application**:
   ```bash
   docker-compose up --build
   ```

2. **Access the application**:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8000
   - API Documentation: http://localhost:8000/docs

3. **Test the application**:
   - Create new users via the frontend form
   - View all users in the user list
   - API endpoints are automatically documented at `/docs`

## API Endpoints

- `GET /` - Welcome message
- `GET /health` - Health check
- `GET /users` - List all users
- `POST /users` - Create a new user
- `GET /users/{user_id}` - Get user by ID

## Database Schema

### Users Table
- `id` (Primary Key)
- `name` (String)
- `email` (String, Unique)
- `created_at` (Timestamp)
- `updated_at` (Timestamp)

## Development

### Backend Development
```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

### Frontend Development
```bash
cd frontend
npm install
npm run dev
```

### Database Management
The PostgreSQL database runs in a Docker container with persistent storage. Data is preserved between container restarts.

## Environment Variables

- `DATABASE_URL`: PostgreSQL connection string
- `NEXT_PUBLIC_API_URL`: Backend API URL for frontend

## Project Structure

```
testing-1/
├── backend/
│   ├── app/
│   │   ├── main.py          # FastAPI application
│   │   ├── database.py      # Database configuration
│   │   ├── schemas.py       # Pydantic models
│   │   ├── models/
│   │   │   └── user.py      # SQLAlchemy models
│   │   ├── routes/
│   │   │   └── users.py     # User API routes
│   │   └── services/
│   │       └── user_service.py # Business logic
│   ├── Dockerfile
│   └── requirements.txt
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   └── page.tsx     # Main page
│   │   ├── components/
│   │   │   ├── UserForm.tsx # User creation form
│   │   │   └── UserList.tsx # User display list
│   │   └── lib/
│   │       └── api.ts       # API client
│   └── Dockerfile
├── docker-compose.yml
├── .env
└── README.md
```
