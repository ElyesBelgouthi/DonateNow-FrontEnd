import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./App.css";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import CollaboratorsPage from "./pages/Collaborators";
import BoycottPage from "./pages/Boycott";
import ProductsPage from "./pages/Donation/Products";
import SignUpPage from "./pages/Signup";
import PaymentPage from "./pages/Donation/Payement";
import DonationPage from "./pages/Donation/Donation";
import MoneyDonationPage from "./pages/Donation/MoneyDonation";
import DonationTypePage from "./pages/Donation/DonationType";
import MoneyDonationModal from "./components/MoneyDonationModal";
import { useState } from "react";

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
        ],
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
