import SignIn from "../pages/SignIn/SignIn.jsx";
import FormReset from "../pages/FormReset/FormReset.jsx";
import Register from "../pages/Register/Register.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Router = () => {
  const BASE_URL = process.env.GH_PAGES_BASE_URL ?? '/';

  const router = createBrowserRouter([
    {
      path: `${BASE_URL}`,
      element: <SignIn />,
    },

    {
      path: `${BASE_URL}register`,
      element: <Register />,
    },

    {
      path: `${BASE_URL}signin`,
      element: <SignIn />,
    },

    {
      path: `${BASE_URL}reset`,
      element: <FormReset />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
