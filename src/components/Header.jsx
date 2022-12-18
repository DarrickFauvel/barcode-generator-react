import React, { useContext } from "react";
import { Context } from "../context";

const Header = () => {
  const { state } = useContext(Context);

  return (
    <header className="header">
      <h1>
        myBarc<span className="material-symbols-outlined">adjust</span>de
        Generator
      </h1>
    </header>
  );
};

export default Header;
