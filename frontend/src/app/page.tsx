'use client';

import { useState } from 'react';
import UserForm from '@/components/UserForm';
import UserList from '@/components/UserList';

export default function Home() {
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleUserCreated = () => {
    setRefreshTrigger(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Fullstack User Management
          </h1>
          <p className="text-gray-600">
            FastAPI + Next.js + PostgreSQL with Docker
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <UserForm onUserCreated={handleUserCreated} />
          <UserList refreshTrigger={refreshTrigger} />
        </div>
        
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Backend API: <span className="font-mono">http://localhost:8000</span></p>
          <p>Frontend: <span className="font-mono">http://localhost:3000</span></p>
          <p>Database: PostgreSQL on port 5432</p>
        </div>
      </div>
    </div>
  );
}
