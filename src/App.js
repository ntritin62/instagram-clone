import React, { lazy, Suspense, useMemo } from 'react';
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from 'react-router-dom';
import * as ROUTES from './constants/routes';
import useAuthListener from './hooks/use-auth-listener';
import UserContext from './context/user';

const Login = lazy(() => import('./pages/login'));
const SignUp = lazy(() => import('./pages/signup'));
const Dashboard = lazy(() => import('./pages/dashboard'));
const Profile = lazy(() => import('./pages/profile'));
const NotFound = lazy(() => import('./pages/not-found'));

function App() {
  const { user } = useAuthListener();

  const router = useMemo(
    () =>
      createBrowserRouter([
        {
          path: `${ROUTES.DASHBOARD}`,
          errorElement: <NotFound />,
          children: [
            {
              index: true,
              element: (
                <Suspense fallback={<p>Loading...</p>}>
                  <Dashboard />
                </Suspense>
              ),
              loader: () => {
                if (!user) {
                  return redirect(ROUTES.LOGIN);
                }
                return null;
              },
            },
            {
              path: `${ROUTES.LOGIN}`,
              element: (
                <Suspense fallback={<p>Loading...</p>}>
                  <Login />
                </Suspense>
              ),
              loader: () => {
                if (user) {
                  return redirect(ROUTES.DASHBOARD);
                }
                return null;
              },
            },
            {
              path: `${ROUTES.SIGNUP}`,
              element: (
                <Suspense fallback={<p>Loading...</p>}>
                  <SignUp />
                </Suspense>
              ),
              loader: () => {
                if (user) {
                  return redirect(ROUTES.DASHBOARD);
                }
                return null;
              },
            },
            {
              path: `${ROUTES.PROFILE}`,
              element: (
                <Suspense fallback={<p>Loading...</p>}>
                  <Profile />
                </Suspense>
              ),
            },
          ],
        },
      ]),
    [user]
  );

  return (
    <UserContext.Provider value={{ user }}>
      <RouterProvider router={router} />
    </UserContext.Provider>
  );
}

export default App;
