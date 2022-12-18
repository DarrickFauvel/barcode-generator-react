import React, { useContext } from "react";
import { Context } from "../context";

const Footer = () => {
  const { state } = useContext(Context);

  return (
    <footer className="footer">
      <div className="container">
        <hr />
        <p>Created by {state.author}.</p>
        <ul className="footer__list">
          <li>
            <a className="footer__link" href={state.urlWebsite} target="_blank">
              darrickfauvel.com
            </a>
          </li>
          <li>
            <a className="footer__link" href={state.urlLinkedIn} target="_blank">
              LinkedIn
            </a>
          </li>
          <li>
            <a className="footer__link" href={state.urlGitHub} target="_blank">
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
