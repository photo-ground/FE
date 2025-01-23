'use client';

import React, { useEffect, useState } from 'react';
import { redirect } from 'next/navigation';
import { isUserAuthenticated } from '@/lib/authentication';

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function checkAuth() {
      try {
        // Call the server-side function to check authentication
        const authResult = await isUserAuthenticated();

        setIsAuthenticated(authResult);
        setIsLoading(false);
      } catch (error) {
        console.error('Authentication check failed', error);
        setIsAuthenticated(false);
        setIsLoading(false);
      }
    }

    checkAuth();
  }, []);

  // Show loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Redirect if not authenticated
  if (!isAuthenticated) {
    redirect('/signin');
  }

  return <div>{children}</div>;
}
