import React, { useContext } from "react";
import { Context } from "../context";

const Footer = () => {
  const { state } = useContext(Context);

  return (
    <footer className="footer">
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
    </footer>
  );
};

export default Footer;
