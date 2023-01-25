import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: 'capiverse.firebaseapp.com',
  projectId: 'capiverse',
  storageBucket: 'capiverse.appspot.com',
  messagingSenderId: '327300849100',
  appId: '1:327300849100:web:d3f57ed8ea0083a9f61169',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
export default app;
