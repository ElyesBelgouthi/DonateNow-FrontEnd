import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./App.css";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import CollaboratorsPage from "./pages/Collaborators";
import BoycottPage from "./pages/Boycott";
import ProductsPage from "./pages/Donation/Products";
import SignUpPage from "./pages/Signup";
import DonationPage from "./pages/Donation/Donation";
import MoneyDonationPage from "./pages/Donation/MoneyDonation";
import DonationTypePage from "./pages/Donation/DonationType";
import DonationCartPage from "./pages/Donation/DonationCart";
import PaymentPage from "./pages/Donation/Payment";
import ConnectionRootLayout from "./pages/ConnectionRoot";
import LoginPage from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <ConnectionRootLayout />,
    children: [
      {
        path: "signup",
        element: <SignUpPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
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
        path: "donation",
        element: <DonationPage />,
        children: [
          {
            path: "",
            element: <DonationTypePage />,
          },
          {
            path: "money",
            element: <MoneyDonationPage />,
          },
          {
            path: "products",
            element: <ProductsPage />,
          },
          {
            path: "cart",
            element: <DonationCartPage />,
          },
          {
            path: "payment",
            element: <PaymentPage />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
