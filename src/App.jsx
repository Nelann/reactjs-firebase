import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Root from "./pages/root";
import HomePage from "./pages/home/home-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
