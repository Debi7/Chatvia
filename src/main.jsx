import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import SignIn from "./pages/SignIn/SignIn.jsx";
import FormReset from "./pages/FormReset/FormReset.jsx";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import './style/index.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },

  {
    path: "/signin",
    element: <SignIn />
  },

  {
    path: "/reset",
    element: <FormReset />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App>
      <RouterProvider router={router} />
    </App>
  </React.StrictMode>,
)