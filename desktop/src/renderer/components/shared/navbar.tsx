import { useContext } from 'react';
import { AuthContext } from 'renderer/root';
import Logo from './logo';

function Navbar() {
  const { user, signOut } = useContext(AuthContext);

  return (
    <nav className="navbar has-background-light navbar-shadow px-4 is-flex is-justify-content-space-between is-align-items-center">
      <Logo />

      {user && (
        <div className="navbar-item">
          <p className="mr-4">Ingelogd als {user.email}</p>
          <button className="button" onClick={signOut}>
            Uitloggen
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
