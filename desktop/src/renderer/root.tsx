import { createContext } from 'react';
import { Outlet } from 'react-router-dom';
import AuthProvider, {
  AuthContextData,
} from './context/auth-provider';
import { contentContainer, mainContainer } from './root-styles.css';
import { Slide, ToastContainer } from 'react-toastify';

import Loader from './components/shared/loader';
import Sidebar from './components/sidebar/sidebar/sidebar';
import ServerSideEventHandler from './server-events/server-sent-event-handler';
import 'react-toastify/dist/ReactToastify.css';

export const AuthContext = createContext<AuthContextData | undefined>(
  undefined
);

function Root() {
  return (
    <AuthProvider>
      <ServerSideEventHandler />
      <div className={mainContainer}>
        <Sidebar />
        <div className={contentContainer} id="main">
          <Loader />
          <div>
            <Outlet />
          </div>
        </div>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          pauseOnFocusLoss={false}
          transition={Slide}
          limit={5}
        />
      </div>
    </AuthProvider>
  );
}

export default Root;
