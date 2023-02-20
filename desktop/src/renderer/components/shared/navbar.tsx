import { useContext } from 'react';
import { AuthContext } from 'renderer/root';
import Logo from './logo';

function Navbar() {
  const { user, signOut } = useContext(AuthContext);

  return (
    <nav className="h-20 w-full shadow-nav fixed bg-neutral-100 px-4 flex justify-between items-center z-10">
      <Logo />

      {user && (
        <div>
          <p className="mr-4">Ingelogd als {user.email}</p>
          <button onClick={signOut}>
            Uitloggen
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
