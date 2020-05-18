import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"
import SEO from "../components/seo"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

import Layout from "components/layout"

import Markdown from "react-markdown"
import { rhythm } from "../../site/typography"
import config from "../../site/config"
import get from "lodash/get"
import { Container, Row, Col } from "components/grid"

const articleStyle = css`
  padding-top: ${rhythm(1)};
`

const MTime = styled.time`
  text-align: right;
  display: block;
  fontsize: 12px;
  margin-bottom: 10px;
`

export default function PostPage(props) {
  return <Post {...props} />
}

function Post({ data: { site, mdx } }) {
  const {
    editLink,
    historyLink,
    title,
    date,
    slug,
    description,
    banner,
    bannerCredit,
  } = mdx.fields

  const articleUrl = `${config.siteUrl}${slug}`

  return (
    <Layout site={site} frontmatter={mdx.fields}>
      <SEO
        frontmatter={mdx.fields}
        metaImage={get(mdx, "fields.banner.childImageSharp.fluid.src")}
        isArticle
      />
      <article css={articleStyle}>
        <Container>
          <Row>
            <Col>
              <h1
                css={css`
                  margin-bottom: 20px;
                  margin-top: 0;
                `}
              >
                {title}
              </h1>
              {banner && (
                <div
                  css={css`
                    text-align: center;

                    p {
                      margin-bottom: 0;
                    }
                  `}
                >
                  <Img
                    fluid={banner.childImageSharp.fluid}
                    alt={site.siteMetadata.keywords.join(", ")}
                  />
                  {bannerCredit ? <Markdown>{bannerCredit}</Markdown> : null}
                </div>
              )}
              <br />
              {description ? <Markdown>{description}</Markdown> : null}
              <MDXRenderer>{mdx.body}</MDXRenderer>
            </Col>
          </Row>
        </Container>
      </article>
      <Container>
        <Row>
          <Col>
            <a href={historyLink}>
              <MTime title="Last Updated Date">{date}</MTime>
            </a>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <p css={{ textAlign: "right" }}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                // using mobile.twitter.com because if people haven't upgraded
                // to the new experience, the regular URL wont work for them
                href={`https://mobile.twitter.com/search?q=${encodeURIComponent(
                  articleUrl
                )}`}
              >
                Discuss on Twitter
              </a>
              <span css={{ marginLeft: 10, marginRight: 10 }}>{` • `}</span>
              <a target="_blank" rel="noopener noreferrer" href={editLink}>
                Edit post on GitHub
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export const bannerImage = graphql`
  fragment bannerImage260 on File {
    childImageSharp {
      fluid(maxWidth: 260, traceSVG: { color: "#573ede" }, quality: 50) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
  fragment bannerImage640 on File {
    childImageSharp {
      fluid(maxWidth: 640, traceSVG: { color: "#573ede" }) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
  fragment bannerImage720 on File {
    childImageSharp {
      fluid(maxWidth: 720, traceSVG: { color: "#573ede" }, quality: 75) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
`

export const pageQuery = graphql`
  query($id: String!) {
    site {
      siteMetadata {
        keywords
      }
    }
    mdx(fields: { id: { eq: $id } }) {
      fields {
        editLink
        historyLink
        title
        date
        noFooter
        description
        plainTextDescription
        banner {
          ...bannerImage720
        }
        bannerCredit
        slug
        keywords
      }
      body
    }
  }
`
