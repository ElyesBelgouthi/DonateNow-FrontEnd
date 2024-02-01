import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./App.css";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import CollaboratorsPage from "./pages/Collaborators";
import BoycottPage from "./pages/Boycott";
import ProductsPage from "./pages/Products";
import SignUpPage from "./pages/Signup";
import CartPage from "./pages/Payement";
import PaymentPage from "./pages/Payement";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "collaborators",
        element: <CollaboratorsPage />,
      },
      {
        path: "boycott",
        element: <BoycottPage />,
      },
      {
        path: "products",
        element: <ProductsPage />,
      },
      {
        path: "signup",
        element: <SignUpPage />,
      },
      {
        path: "payment",
        element: <PaymentPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
