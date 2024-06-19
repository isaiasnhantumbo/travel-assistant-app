import { createBrowserRouter } from 'react-router-dom';

import { AppLayout } from './pages/_layout/app';
import { Home } from './pages/app/Home';
import { SignIn } from './pages/auth/SignIn';
import { SignUp } from './pages/auth/SignUp';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    // errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
  {
    path: '/sign-in',
    element: <SignIn />,
  },
  {
    path: '/sign-up',
    element: <SignUp />,
  },

  // {
  //   path: '*',
  //   element: <NotFound />,
  // },
]);
