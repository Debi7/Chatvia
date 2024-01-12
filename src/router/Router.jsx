import SignIn from "../pages/SignIn/SignIn.jsx";
import FormReset from "../pages/FormReset/FormReset.jsx";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SignIn />
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


  <RouterProvider router={router} />

}

export default Router;