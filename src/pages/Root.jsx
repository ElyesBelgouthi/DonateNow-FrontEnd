import { Outlet } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";
import MainFooter from "../components/MainFooter";

const RootLayout = () => {
  return (
    <main className="root--layout">
      <MainNavigation />
      <Outlet />
      <MainFooter />
    </main>
  );
};

export default RootLayout;
