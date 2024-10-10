import { handleAuth, handleLogout } from '@auth0/nextjs-auth0';

export default handleAuth({
  async logout(req, res) {
    // Clear appSession cookie
    res.setHeader('Set-Cookie', 'appSession=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=None; Secure');
    
    await handleLogout(req, res, {
      returnTo: process.env.AUTH0_BASE_URL
    });
  }
});
