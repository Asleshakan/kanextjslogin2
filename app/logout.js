// app/logout.js
import { useEffect } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/router';

export default function Logout() {
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      // Redirect to the logout API
      window.location.href = '/api/auth/logout'; // Change this to the correct API path
    } else {
      // If not logged in, redirect to home or login page
      router.push('/');
    }
  }, [user, router]);

  return <div>Logging out...</div>; // Show a message while logging out
}
