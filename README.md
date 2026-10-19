# Org User Directory

A clean, admin-style directory for managing people in an organization. Built as a real, usable app rather than a demo: search, filter, roles, and an audit trail, with a FastAPI backend, Next.js frontend, PostgreSQL database, and Docker Compose.

## Purpose

A lightweight internal admin app for viewing and managing staff, contractors, and team members. It is intended to be a practical starting point for an org directory, with clean patterns for backend/frontend integration, database modeling, and admin UI.

## Tech Stack

- **Backend**: FastAPI, SQLAlchemy, PostgreSQL
- **Frontend**: Next.js, React, TypeScript, Tailwind CSS
- **Database**: PostgreSQL
- **Infrastructure**: Docker & Docker Compose

## Current Features

- Create and list users
- RESTful API with FastAPI
- Auto-generated API docs at `/docs`
- Modern React frontend with Tailwind CSS
- Fully containerized with Docker Compose
- CORS enabled for frontend-backend communication

## v2 Roadmap

- Admin authentication and role-based access control
- User status: active, inactive, invited
- Departments and job titles
- Search, sort, and filter the directory
- Pagination for large directories
- CSV import and export
- Audit log of admin changes
- Profile avatars / initials

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
   - View all users in the directory
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
