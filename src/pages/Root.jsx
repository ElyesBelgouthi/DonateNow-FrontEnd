import { Outlet } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";
import MainFooter from "../components/MainFooter";

const RootLayout = () => {
  return (
    <main className="root--layout">
      <MainNavigation />
      <div className="main--root">
        <Outlet />
      </div>
      <MainFooter />
    </main>
  );
};

export default RootLayout;
