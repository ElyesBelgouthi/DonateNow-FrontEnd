import { Outlet } from "react-router-dom";

import MainFooter from "../components/MainFooter";

const ConnectionRootLayout = () => {
  return (
    <main className="connection--root--layout">
      <div className="connection--main--root">
        <Outlet />
        <MainFooter />
      </div>
    </main>
  );
};

export default ConnectionRootLayout;
