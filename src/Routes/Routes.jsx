import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Shared/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import DisplayError from "../Pages/Shared/DisplayError/DisplayError";
import NewsDetails from "../Pages/NewsDetails";
import PrivateRoute from "./PrivateRoute";
import CategoryBasedNews from "../Pages/CategoryBasedNews";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <DisplayError></DisplayError>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch(`http://localhost:5000/news`),
      },
      {
        path: "/category/:id",
        element: <CategoryBasedNews></CategoryBasedNews>,
        loader: ({ params }) =>
          fetch(
            `http://localhost:5000/category/${params.id}`
          ),
      },
      {
        path: "/news/:id",
        element: (
          <PrivateRoute>
            <NewsDetails></NewsDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `http://localhost:5000/news/${params.id}`
          ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default routes;
