import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Root from "@/pages/root";
import HomePage from "@/pages/home/home-page";
import PostsPage from "@/pages/posts/posts-page";
import LoginPage from "@/pages/login/login-page";
import RegisterPage from "@/pages/register/register-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "posts",
        children: [
          {
            index: true,
            element: <PostsPage />,
          },
        ],
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
