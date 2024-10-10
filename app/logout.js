// app/logout/page.js
import { useEffect } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';

const deleteCookie = (name) => {
  document.cookie = `${name}=; Max-Age=0; path=/;`;
};

export default function Logout() {
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      // Delete any additional cookies you want to remove
      deleteCookie('appSession'); // Replace with the actual cookie name
      // Redirect to the logout API
      window.location.href = '/api/auth/logout';
    }
  }, [user]);

  return <div>Logging out...</div>;
}
