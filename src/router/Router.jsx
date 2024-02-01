import SignIn from "../pages/SignIn/SignIn.jsx";
import FormReset from "../pages/FormReset/FormReset.jsx";
import Register from "../pages/Register/Register.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { URLS } from "../constants/urls.js"

const Router = () => {

  const router = createBrowserRouter([
    {
      path: URLS.root,
      element: <SignIn />,
    },

    {
      path: URLS.register,
      element: <Register />,
    },

    {
      path: URLS.signin,
      element: <SignIn />,
    },

    {
      path: URLS.reset,
      element: <FormReset />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
