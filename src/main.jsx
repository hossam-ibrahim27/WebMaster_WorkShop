<<<<<<< HEAD
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
=======
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
>>>>>>> 4f678160a1bb3a9098b6f3d1dc6d56ffde08a4df
import "@fontsource/lemonada/400.css";
import "@fontsource/cairo/400.css";
import "@fontsource/amiri/400.css";
import "@fontsource/amiri/400-italic.css";
import "@fontsource/noto-sans-arabic/400.css";

<<<<<<< HEAD
// 👉 استيراد الـ AuthProvider
import { AuthProvider } from "./context/AuthContext";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>
);
=======


createRoot(document.getElementById('root')).render(<App />)
>>>>>>> 4f678160a1bb3a9098b6f3d1dc6d56ffde08a4df
