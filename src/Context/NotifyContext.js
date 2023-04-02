import { createContext } from 'react';
import { userAPI } from '../api/user.api';

export const NotifyContext = createContext({
  notifyList: [],
  handleSetList: () => {}
});