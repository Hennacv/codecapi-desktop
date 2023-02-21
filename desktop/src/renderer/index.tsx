import { GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import { createRoot } from 'react-dom/client';
import App from './App';
import { auth } from './firebase';

const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(<App />);

window.electron.ipcRenderer.on('send-token', (token: any) => {
  const credential = GoogleAuthProvider.credential(token);
  signInWithCredential(auth, credential);
});
