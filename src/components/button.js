import React from "react"
import { Link } from "gatsby"

import { rhythm } from "../../site/typography"
import { css } from "@emotion/core"

const styles = css`
  display: inline-block;
  color: #707070;
  border-bottom: 3px solid #841717;
  transition: 0.5s all ease;
  cursor: pointer;
  padding: ${rhythm(0.2)} ${rhythm(1.5)};

  &:hover {
    text-decoration: none;
    color: #000;
  }

  &:disabled {
    background: #7f7f7f;
    border-color: #7f7f7f;

    &:hover {
      color: #fff;
      text-decoration: none;
      cursor: not-allowed;
    }
  }
`

const Button = ({
  children,
  to,
  activeClassName,
  partiallyActive,
  ...other
}) => {
  if (!to)
    return (
      <button css={styles} {...other}>
        {children}
      </button>
    )

  // begins with forward slash then treat as internal
  const internal = /^\/(?!\/)/.test(to)

  if (internal) {
    return (
      <Link
        to={to}
        css={styles}
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        {...other}
      >
        {children}
      </Link>
    )
  }
  return (
    <a css={styles} href={to} {...other}>
      {children}
    </a>
  )
}

export default Button
