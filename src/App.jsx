import { RouterProvider, createBrowserRouter } from "react-router-dom";

import ProtectedRoute from "@/components/protected-route";

import Root from "@/pages/root";
import HomePage from "@/pages/home/home-page";
import LoginPage from "@/pages/login/login-page";
import RegisterPage from "@/pages/register/register-page";
import TodosPage from "@/pages/todos/todos-page";

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
        path: "todos",
        children: [
          {
            index: true,
            element: (
              <ProtectedRoute>
                <TodosPage />
              </ProtectedRoute>
            ),
          },
        ],
      },
      {
        children: [
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
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
