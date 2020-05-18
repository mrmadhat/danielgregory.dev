import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

import SEO from "../components/seo"
import Layout from "components/layout"

import { Container, Row, Col } from "../components/grid"

import Img from "../components/image"

import site from "../../site/config"
import { rhythm } from "../../site/typography"

const PreTitle = styled.span`
  display: block;
  font-size: 74%;
  color: ${site.theme.color.secondary};
`

function MarkdownPage({ children, pageContext: { frontmatter } }) {
  const image = useStaticQuery(graphql`
    query {
      fileName: file(relativePath: { eq: "danny-hack-the-north.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <SEO frontmatter={frontmatter} />
      <Layout pageTitle={frontmatter.title} frontmatter={frontmatter}>
        <Container>
          <Row
            css={css`
              min-height: 500px;
              align-content: center;
            `}
          >
            <Col
              css={css`
                @media (min-width: 769px) {
                  width: 60%;
                }
              `}
            >
              <h1>
                <PreTitle>Hi, I'm Daniel Gregory.</PreTitle> A website developer
                from Bolton, UK.
              </h1>
            </Col>
            <Col
              css={css`
                width: 100%;
                margin: ${rhythm(1)} 0;
                @media (min-width: 769px) {
                  width: 40%;
                  margin: 0;
                }
              `}
            >
              <Img
                fluid={image.fileName.childImageSharp.fluid}
                alt="Daniel Gregory At Hack The North"
              />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>{children}</Col>
          </Row>
        </Container>
      </Layout>
    </>
  )
}

export default MarkdownPage
