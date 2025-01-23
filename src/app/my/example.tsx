'use client';

import React, { useState } from 'react';
import { saveAccessToken } from '@/lib/authentication';
import { Button, Input } from '@mui/material';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Simulate login request
      const response = await fetch('/api/signin', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.accessToken) {
        // Save token in cookies
        await saveAccessToken(data.accessToken);

        // Also save in localStorage for client-side checks
        localStorage.setItem('access_token', data.accessToken);

        // Redirect or update state
        window.location.href = '/dashboard';
      }
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <form onSubmit={handleLogin} className="space-y-4">
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <Button type="submit">Login</Button>
    </form>
  );
}
