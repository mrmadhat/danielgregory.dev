import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/Button"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome to Unfilter</h1>
    <p>
      Not everything on your mind is public. But, that doesn’t mean it shouldn't
      be part of your timeline…
    </p>
    <p>
      Unfilter is your online diary, you can choose to share a piece of you or
      not, the decision is yours. By default entries added to Unfilter are
      private but you can also share posts publicly, if you want.
    </p>
    <Button to="/join-waiting-list/">Join today</Button>
  </Layout>
)

export default IndexPage
