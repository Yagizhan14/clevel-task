import * as React from "react";
import { Heading } from "../Heading";

interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = () => {
  return (
    <header className="header">
      <Heading color="black" align="left" level={1}>
        TRANSACTIONS
      </Heading>
    </header>
  );
};

export default Header;
