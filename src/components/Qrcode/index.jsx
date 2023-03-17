import qrcode from "../../images/redtool-qrcode.svg"
import classes from "./qrcode.module.css"

const Qrcode = () => (
  <>
    <span className={classes.title}>Share this app</span>
    <div className={classes.wrapper}>
      <img src={qrcode} alt="" />
      <span className={classes.url}>redtool.darrickdevelops.com</span>
    </div>
  </>
)

export default Qrcode
