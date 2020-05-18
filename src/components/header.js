import React from "react"
import { Link as GatsbyLink } from "gatsby"

import { rhythm } from "../../site/typography"
import { css } from "@emotion/core"

import site from "../../site/config"
import { Container, Row, Col } from "./grid"
import Logo from "./logo"

const containerCss = css`
  margin-top: ${rhythm(1.5)};
  margin-bottom: ${rhythm(1)};
`

const NavCol = ({ children }) => (
  <Col
    css={css`
      flex-direction: row;
      align-items: center;
    `}
  >
    {children}
  </Col>
)

const Link = props => (
  <GatsbyLink
    css={css`
      margin-right: 30px;
      color: ${site.theme.color.secondary};
      font-weight: 300;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    `}
    {...props}
  />
)

const activeLinkStyle = { color: site.theme.color.accent }

const Header = () => {
  return (
    <header>
      <Container css={containerCss}>
        <Row>
          <Col>
            <Link
              to="/"
              css={css`
                color: ${site.theme.color.secondary};
              `}
            >
              <Logo />
            </Link>
          </Col>
          <NavCol>
            <Link to="/" activeStyle={activeLinkStyle}>
              About
            </Link>
            <Link to="/articles" activeStyle={activeLinkStyle}>
              Writing
            </Link>
          </NavCol>
        </Row>
      </Container>
    </header>
  )
}

export default Header
