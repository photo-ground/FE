import { isUserAuthenticated } from './authentication';

// utils/authUtils.ts
export default async function checkAuth() {
  try {
    const authResult = await isUserAuthenticated();
    return authResult;
  } catch (error) {
    console.error('Authentication check failed', error);
    return false;
  }
}
