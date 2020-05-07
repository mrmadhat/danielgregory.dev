import { Link } from "gatsby"
import { Location } from "@reach/router"
import PropTypes from "prop-types"
import React from "react"
import { rhythm } from "../theme/typography"
import unfilterLogo from "../images/unfilter-logo.svg"

const HeaderCol = ({ children }) => (
  <div className="col-auto d-flex align-items-center">{children}</div>
)

const Header = ({ siteTitle }) => {
  const isHome = window.location.pathname === "/"

  return (
    <header>
      <div
        className="container"
        style={{
          marginTop: rhythm(1.5),
          marginBottom: rhythm(1),
        }}
      >
        <div className="row justify-content-between">
          <HeaderCol>
            <Link to="/">
              <img
                src={unfilterLogo}
                alt="Unfilter Logo"
                style={{ marginBottom: 0 }}
              />
            </Link>
          </HeaderCol>
          <Location>
            {({ location }) => (
              <>
                {location.pathname === "/" && (
                  <HeaderCol>
                    <Link
                      to="/join-waiting-list"
                      style={{
                        fontSize: "18px",
                        fontStyle: "italic",
                        color: "#7F7F7F",
                      }}
                    >
                      Login
                    </Link>
                  </HeaderCol>
                )}
              </>
            )}
          </Location>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
