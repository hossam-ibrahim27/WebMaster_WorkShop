import './App.css'
import "@fontsource/lemonada"; // Defaults to weight 400
import "@fontsource/lemonada/400.css"; // Specify weight
import "@fontsource/cairo"; // Defaults to weight 400
import "@fontsource/cairo/400.css";
// import "@fontsource/cairo/400-italic.css"
import "@fontsource/amiri"; // Defaults to weight 400
import "@fontsource/amiri/400.css"; // Specify weight
import "@fontsource/amiri/400-italic.css"
import "@fontsource/noto-sans-arabic"; // Defaults to weight 400
import "@fontsource/noto-sans-arabic/400.css"; // Specify weight
// import "@fontsource/noto-sans-arabic/400-italic.css";
import { RouterProvider } from 'react-router/dom'
import router from './routes/index.jsx'

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
