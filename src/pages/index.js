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
      Not everything on your mind is public. But, that doesn’t mean it be part
      of your timeline…
    </p>
    <p>
      Unfilter is your online diary, you can choose to share a piece of you or
      not, the decision is yours.
    </p>
    <Button to="/join-waiting-list/">Join today</Button>
  </Layout>
)

export default IndexPage
