import React from "react"
import { Link } from "gatsby"

import { rhythm } from "../../theme/typography"

import "./button.scss"

const styles = {
  padding: `${rhythm(0.25)} ${rhythm(2.5)}`,
}

const Button = ({
  children,
  to,
  activeClassName,
  partiallyActive,
  ...other
}) => {
  if (!to)
    return (
      <button style={{ ...styles }} className="btn" {...other}>
        {children}
      </button>
    )

  // begins with forward slash then treated as internal
  const internal = /^\/(?!\/)/.test(to)

  if (internal) {
    return (
      <Link
        to={to}
        style={{ ...styles }}
        className="btn"
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        {...other}
      >
        {children}
      </Link>
    )
  }
  return (
    <a style={{ ...styles }} className="btn" href={to} {...other}>
      {children}
    </a>
  )
}

export default Button
