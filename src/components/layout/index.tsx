import * as React from "react";
import { Box } from "../Box";
import Header from "./Header";
import SideMenu from "./SideMenu";

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <Box display="flex">
        <SideMenu
          items={[
            {
              key: "dashboard",
              text: "Dashboard",
              href: "/",
              selected: false,
              icon: "Home",
            },
            {
              key: "transactions",
              text: "Transactions",
              href: "/transactions",
              selected: true,
              icon: "Sliders",
            },
            {
              key: "accounts",
              text: "Accounts",
              href: "/accounts",
              selected: false,
              icon: "User",
            },
            {
              key: "settings",
              text: "Settings",
              href: "/Settings",
              selected: false,
              icon: "Settings",
            },
          ]}
        />
        <main>
          <Box padding="1rem">{children}</Box>
        </main>
      </Box>
    </React.Fragment>
  );
};

export default Layout;
