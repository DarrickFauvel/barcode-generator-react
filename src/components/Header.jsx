import React, { useContext } from "react";
import { Context } from "../context";

const Header = () => {
  const { state } = useContext(Context);

  return (
    <header className="header">
      <div className="container">
        <h1>
          myBarc<span className="material-symbols-outlined">adjust</span>de
        </h1>
      </div>
    </header>
  );
};

export default Header;
