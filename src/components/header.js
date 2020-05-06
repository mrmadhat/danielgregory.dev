import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { rhythm } from "../theme/typography"
import unfilterLogo from "../images/unfilter-logo.svg"
import { Container, Row, Col } from "react-bootstrap"

const HeaderCol = ({ children }) => (
  <Col xs="auto" className="d-flex align-items-center">
    {children}
  </Col>
)

const Header = ({ siteTitle }) => (
  <header>
    <Container
      style={{
        maxWidth: "1000px",
        marginTop: rhythm(1.5),
        marginBottom: rhythm(1),
      }}
    >
      <Row className="justify-content-between">
        <HeaderCol>
          <Link to="/">
            <img
              src={unfilterLogo}
              alt="Unfilter Logo"
              style={{ marginBottom: 0 }}
            />
          </Link>
        </HeaderCol>
        <HeaderCol>
          <Link
            to="/not-ready"
            style={{ fontSize: "18px", fontStyle: "italic", color: "#7F7F7F" }}
          >
            Login
          </Link>
        </HeaderCol>
      </Row>
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
