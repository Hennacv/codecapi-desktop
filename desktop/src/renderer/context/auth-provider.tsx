import { User as FirebaseUser } from 'firebase/auth';
import { ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from 'renderer/firebase';
import { useGetUser } from 'renderer/hooks/use-get-user';
import { AuthContext } from 'renderer/root';
import { User } from '../utils/types';

import api from 'renderer/utils/api';
import Login from 'renderer/components/auth/login';

interface Props {
  children: ReactNode;
}

export interface AuthContextData {
  firebaseUser: FirebaseUser;
  user: User;
  signIn: () => void;
  signOut: () => void;
}

export const defaultAuthContext = {
  firebaseUser: null,
  user: null,
  signIn: () => {},
  signOut: () => {},
};

function AuthProvider(props: Props) {
  const [firebaseUser, setFirebaseUser] = useState(auth.currentUser);

  const { data: user = null } = useGetUser(firebaseUser?.uid);
  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setFirebaseUser(user);
      if (user) {
        navigate('/questions');
      }
    });
  }, [navigate]);

  const value = {
    firebaseUser,
    user,
    signIn,
    signOut,
  };
  if (!user || !firebaseUser)
    return (
      <AuthContext.Provider value={value}>
        <Login />
      </AuthContext.Provider>
    );

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
}

export default AuthProvider;

async function signIn() {
  const res = await api.get('/auth');
  const { url } = res.data;
  window.open(url, '_blank');
}

async function signOut() {
  await auth.signOut();
}
