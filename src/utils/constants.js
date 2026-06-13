export const BASE_URL =
  location.hostname === 'localhost'
    ? 'http://localhost:5000/api/v1/user'
    : '/api/v1/user';

export const SOCKET_URL =
  location.hostname === 'localhost' ? 'http://localhost:5000/' : '/api/';
