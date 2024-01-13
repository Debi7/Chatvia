import SignIn from "../pages/SignIn/SignIn.jsx";
import FormReset from "../pages/FormReset/FormReset.jsx";
import Register from "../pages/Register/Register.jsx";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SignIn />
    },

    {
      path: "/register",
      element: <Register />
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

  return <RouterProvider router={router} />
}

export default Router;