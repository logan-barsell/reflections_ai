import { apiClient } from './api';

async function logIn(email: string, password: string) {
  try {
    const response = await apiClient.post('/auth/login', {
      email,
      password,
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Login failed');
  }
}

async function signUp(
  email: string,
  password: string,
  firstName: string,
  lastName: string
) {
  try {
    const response = await apiClient.post('/auth/signup', {
      email,
      password,
      firstName,
      lastName,
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Sign Up failed');
  }
}

async function logOut() {
  try {
    await apiClient.post('/auth/logout');
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Logout failed');
  }
}

async function getAuthenticatedUser() {
  try {
    const response = await apiClient.get('/auth/me');
    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || 'User authentication failed'
    );
  }
}

export { logIn, signUp, logOut, getAuthenticatedUser };
