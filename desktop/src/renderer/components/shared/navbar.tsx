import { useContext } from 'react';
import { AuthContext } from 'renderer/root';
import Logo from './logo';

function Navbar() {
  const { user, signOut } = useContext(AuthContext);

  return (
    <nav className="">
      <Logo />

      {user && (
        <div>
          <p className="">Ingelogd als {user.email}</p>
          <button onClick={signOut} type="button">
            Uitloggen
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
