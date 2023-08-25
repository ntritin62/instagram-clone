import FirebaseContext from '../context/firebase';
import UserContext from '../context/user';
import { useContext } from 'react';
import * as ROUTES from '../constants/routes';
import { Link } from 'react-router-dom';

export default function Header() {
  const { firebase } = useContext(FirebaseContext);
  const { user } = useContext(UserContext);

  return (
    <header className="h-16 bg-white border-b border-gray-primary mb-8">
      <div className="container mx-auto max-w-screen-lg h-full">
        <div className="flex justify-between h-full">
          <div className="text-gray-700 text-center flex items-center cursor-pointer">
            <h1 className="flex justify-center w-full">
              <Link to={ROUTES.DASHBOARD}>
                <img src="/images/logo.png" alt="" className="mt-2 w-6/12" />
              </Link>
            </h1>
          </div>
          <div className="text-gray-700 text-center flex items-center ">
            {user ? (
              <>
                <Link to={ROUTES.DASHBOARD} aria-label="Dashboard">
                  <svg
                    className="w-8 mr-6 text-black-light cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    width="26.792"
                    height="24.968"
                    viewBox="0 0 26.792 24.968"
                  >
                    <path
                      id="Instagram-Home-Icon-n3fd2"
                      d="M26.6.885a1.7,1.7,0,0,0-1.216.5L14.1,12.72a3.088,3.088,0,0,0-.9,2.178V24a1.848,1.848,0,0,0,1.847,1.85h7.268A1.844,1.844,0,0,0,24.161,24v-5.49a2.437,2.437,0,1,1,4.875,0V24a1.844,1.844,0,0,0,1.842,1.85h7.271A1.844,1.844,0,0,0,39.993,24V14.9a3.075,3.075,0,0,0-.9-2.178L27.812,1.388A1.69,1.69,0,0,0,26.6.885"
                      transform="translate(-13.201 -0.885)"
                    />
                  </svg>
                </Link>
                <button
                  type="button"
                  title="Sign Out"
                  onClick={() => firebase.auth().signOut()}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                      firebase.auth().signOut();
                    }
                  }}
                >
                  <svg
                    className="w-8 mr-6 text-black-light cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                </button>
                <div className="flex items-center cursor-pointer">
                  <Link to={`/p/${user.displayName}`}>
                    <img
                      src={`/images/avatars/${user.displayName}.jpg`}
                      alt=""
                      className="rounded-full h-8 w-8 flex object-cover object-top"
                    />
                  </Link>
                </div>
              </>
            ) : (
              <>
                <Link to={ROUTES.LOGIN}>
                  <button
                    type="button"
                    className="bg-blue-light font-bold text-sm rounded text-white w-20 h-8"
                  >
                    Log In
                  </button>
                </Link>
                <Link to={ROUTES.SIGNUP}>
                  <button
                    type="button"
                    className="font-bold text-sm rounded text-blue-light w-20 h-8"
                  >
                    Sign Up
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
