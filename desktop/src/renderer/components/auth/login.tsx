import { useContext } from 'react';
import { AuthContext } from 'renderer/root';

const Login = () => {
  const { signIn } = useContext(AuthContext);

  return (
    <div className="columns is-centered">
      <div className="column">
        <p className="mb-4">
          Dit is de portal van [code]capi. Klik op de knop hieronder om in te
          loggen met je Google account.
        </p>
        <button className="button" onClick={() => signIn()}>
          Inloggen
        </button>
      </div>
    </div>
  );
}

export default Login;
