// pages/api/auth/logout.js
import { handleLogout } from '@auth0/nextjs-auth0';

export default async function logout(req, res) {
  // Call handleLogout to clear session cookies
  await handleLogout(req, res, {
    returnTo: process.env.AUTH0_POST_LOGOUT_REDIRECT_URI || '/', // Redirect after logout
  });
}
