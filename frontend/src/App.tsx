import '@reach/combobox/styles.css';

import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'sonner';

import { SharedProvider } from './hooks/useSharedData';
import { router } from './routes';
import GlobalStyles from './styles/global';

export default function App() {
  return (
    <SharedProvider>
      <GlobalStyles />
      <Toaster richColors />
      <RouterProvider router={router} />
    </SharedProvider>
  );
}
