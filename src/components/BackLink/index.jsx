import { Icon } from "@iconify-icon/react"
import { Link } from "react-router-dom"

import classes from "./backlink.module.css"

const BackLink = () => {
  return (
    <Link className={classes.backlink} to={"/"}>
      <Icon icon="bi:arrow-left" />
      <span>Back</span>
    </Link>
  )
}
export default BackLink
