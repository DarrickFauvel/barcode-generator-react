import getAuthorName from "../../helpers/getAuthorName"
import getSocialUrl from "../../helpers/getSocialUrl"

import classes from "./footer.module.css"

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={`container ${classes["footer-container"]}`}>
        <p className={classes.author}>Created by {getAuthorName()}</p>
        <a
          className={classes.footer__link}
          href={getSocialUrl("Website")}
          target="_blank">
          darrickdevelops.com
        </a>
      </div>
    </footer>
  )
}

export default Footer
