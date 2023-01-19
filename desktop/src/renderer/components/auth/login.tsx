import { useContext } from 'react';
import { AuthContext } from 'renderer/root';

export default function Login() {
  const { signIn } = useContext(AuthContext);

  return (
    <div className="columns is-centered">
      <div className="column">
        <p className="mb-4">
          Dit is de portal van [codecapi]. Klik op de knop hieronder om in te
          loggen met je Google account.
        </p>
        <button className="button" onClick={() => signIn()}>
          Inloggen
        </button>
      </div>
    </div>
  );
}
