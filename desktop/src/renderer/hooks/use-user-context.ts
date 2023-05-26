import { useContext } from 'react';
import { AuthContext } from 'renderer/root';

export const useUserContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useUserContext must be used within the AuthProvider');
  }
  return context;
};
