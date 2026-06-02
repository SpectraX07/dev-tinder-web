export const BASE_URL =
  location.hostname === 'localhost'
    ? 'http://localhost:5000/api/v1/user'
    : '/api';
