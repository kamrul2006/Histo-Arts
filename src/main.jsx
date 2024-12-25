import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, } from "react-router-dom";
// import AuthProvider from './Providers/AuthProvider.jsx';
import router from './router.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <AuthProvider> */}
      <RouterProvider router={router} />
    {/* </AuthProvider> */}
  </StrictMode>,
)
