/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import site from "../../site/config"

import Header from "./header"

import { rhythm } from "../../site/typography"
import styled from "@emotion/styled"

import { Container, Row, Col } from "./grid"
import NewsletterSignup from "./newsletterSignup"

const Main = styled.main`
  min-height: 370px;
`

const Footer = styled.footer`
  margin-top: ${rhythm(2)};
  padding-top: ${rhythm(1)};
  border-top: 2px solid ${site.theme.color.secondary};
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Main>{children}</Main>
      <Container>
        <Footer>
          <Row>
            <Col>
              <NewsletterSignup />
            </Col>
          </Row>
          <Row>
            <Col>© {new Date().getFullYear()}</Col>
          </Row>
        </Footer>
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
