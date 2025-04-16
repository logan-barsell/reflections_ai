import { apiClient } from './api';

export interface AuthOptions {
  email: string;
  password: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
}

const USER = {
  id: '12345',
  email: 'loganjbars@gmail.com',
  name: 'Logan Barsell',
};

async function logIn({ email, password }: AuthOptions): Promise<User> {
  try {
    // const response = await apiClient.post('/auth/login', {
    //   email,
    //   password,
    // });
    // return response.data;
    return USER;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Login failed');
  }
}

async function signUp({ email, password }: AuthOptions) {
  try {
    // const response = await apiClient.post('/auth/signup', {
    //   email,
    //   password,
    // });
    // return response.data;
    return USER;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Sign Up failed');
  }
}

async function logOut() {
  try {
    // await apiClient.post('/auth/logout');
    return;
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
