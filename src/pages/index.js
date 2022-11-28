import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Banner from "../components/banner/banner"
import Services from "../components/services/services"
import Testimony from "../components/Testimony/testimony"
import Feature from "../components/feature/feature"
import Location from "../components/location/location"

const IndexPage = () => (
  <Layout>
    <Banner />
    <Services />
    <Feature />
    <Testimony />
    <Location />
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
