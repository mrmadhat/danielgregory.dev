import React from "react"

import { useStaticQuery, graphql, Link } from "gatsby"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col } from "../components/grid"
import { rhythm } from "../../site/typography"

import site from "../../site/config"

const headerLinkStyle = css`
  color: ${site.theme.color.primary};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: ${site.theme.color.accent};
  }
`

function ArticlesScreen() {
  const { articles } = useStaticQuery(
    graphql`
      query {
        articles: allMdx(
          sort: { fields: frontmatter___date, order: DESC }
          filter: {
            frontmatter: { published: { ne: false } }
            fileAbsolutePath: { regex: "//content/articles//" }
          }
        ) {
          edges {
            node {
              fields {
                id
                slug
                productionUrl
                title
                categories
                keywords
                description: plainTextDescription
                banner {
                  ...bannerImage260
                }
              }
              excerpt(pruneLength: 190)
            }
          }
        }
      }
    `
  )

  return (
    <Layout>
      <SEO title="Articles about website development" />
      <Container>
        <Row>
          <Col
            css={css`
              max-width: 800px;
            `}
          >
            <h1>Articles</h1>
            {articles.edges.map(article => {
              const { title, description, slug } = article.node.fields

              return (
                <article
                  css={css`
                    margin: ${rhythm(2)} ${rhythm(0)};
                  `}
                >
                  <Link to={slug} css={headerLinkStyle}>
                    <h2>{title}</h2>
                  </Link>
                  <p>{description}</p>
                  <Link to={slug}>Read more</Link>
                </article>
              )
            })}
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default ArticlesScreen
