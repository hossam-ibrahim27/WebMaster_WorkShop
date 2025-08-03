
import './App.css';
import "@fontsource/lemonada";
import "@fontsource/lemonada/400.css";
import "@fontsource/cairo";
import "@fontsource/cairo/400.css";
import "@fontsource/amiri";
import "@fontsource/amiri/400.css";
import "@fontsource/amiri/400-italic.css";
import "@fontsource/noto-sans-arabic";
import "@fontsource/noto-sans-arabic/400.css";

import { RouterProvider } from 'react-router-dom'; // ✅ الصح هنا
import router from './routes';
import './App.css'

import { Toaster } from 'react-hot-toast';




function App() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />

      <RouterProvider router={router} />
    

    </>
  );
}

export default App;

