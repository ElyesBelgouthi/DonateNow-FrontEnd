import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./App.css";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import CollaboratorsPage from "./pages/Collaborators";
import BoycottPage from "./pages/Boycott";
import ProductsPage from "./pages/Donation/Products";
import SignUpPage, { signUpAction } from "./pages/Signup";
import DonationPage from "./pages/Donation/Donation";
import MoneyDonationPage from "./pages/Donation/MoneyDonation";
import DonationTypePage from "./pages/Donation/DonationType";
import DonationCartPage from "./pages/Donation/DonationCart";
import PaymentPage from "./pages/Donation/Payment";
import ConnectionRootLayout from "./pages/ConnectionRoot";
import LoginPage, { loginAction } from "./pages/Login";
import { API_BASE_URL } from "./Context";
import {
  checkAuthLoaderForConnection,
  getAuthToken,
  logout,
} from "./util/auth";

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <ConnectionRootLayout />,
    loader: checkAuthLoaderForConnection,
    children: [
      {
        path: "signup",
        element: <SignUpPage />,
        action: signUpAction,
      },
      {
        path: "login",
        element: <LoginPage />,
        action: loginAction,
      },
    ],
  },
  {
    path: "/",
    element: <RootLayout />,
    id: "root",
    loader: () => {
      return getAuthToken();
    },
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
        loader: async () => {
          const response = await fetch(API_BASE_URL + "Boycott");
          if (!response.ok) {
          } else {
            const resData = await response.json();
            return resData;
          }
        },
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
            loader: async () => {
              const response = await fetch(API_BASE_URL + "Fundraising");
              if (!response.ok) {
              } else {
                const resData = await response.json();
                return resData;
              }
            },
          },
          {
            path: "products",
            element: <ProductsPage />,
            loader: async () => {
              const response = await fetch(API_BASE_URL + "Product");
              if (!response.ok) {
              } else {
                const resData = await response.json();
                return resData;
              }
            },
          },
        ],
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
  {
    path: "/logout",
    action: logout,
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
