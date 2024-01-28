import { Link } from "react-router-dom"

import classes from "./backlink.module.css"

const BackLink = () => {
  return (
    <Link className={classes.backlink} to={"/"}>
      &lt;&lt; Back
    </Link>
  )
}
export default BackLink
