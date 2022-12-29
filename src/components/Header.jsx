import React, { useContext } from "react";
import { Context } from "../context";

const Header = () => {
  const { state } = useContext(Context);

  return (
    <header className="header">
      <div className="container">
      
        <h1>
          myTools
        </h1>
      </div>
    </header>
  );
};

export default Header;
