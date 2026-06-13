import io from 'socket.io-client';
import { SOCKET_URL } from './constants';

export const createSocketConnection = () => {
  if (location.hostname === 'localhost') {
    return io(SOCKET_URL);
  } else {
    return io('/', { path: '/api/socket.io' });
  }
};
