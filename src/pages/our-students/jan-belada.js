import React from "react"
import Layout from "../../components/layout"
import Container from "../../components/container"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Helmet } from "react-helmet"
import Img from "gatsby-image"

export default () => {
  const data = useStaticQuery(graphql`
    query JanQ {
      file(relativePath: { eq: "students/jan-belada.png" }) {
        childImageSharp {
          fixed(width: 200, quality: 90) {
            originalName
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Helmet>
        <title>Jan Belada - Orinda Klub Tábor</title>
      </Helmet>
      <Container>
        <Link className="link-important" to="/our-students/">
          &#8592; zpět na všechny studenty
        </Link>
        <div className="profile">
          <Img fixed={data.file.childImageSharp.fixed} alt="Jan Belada" />
          <h1>Jan Belada</h1>
          <small>Medailonek 2024/25</small>
          <br></br>
          <a
            className="link-important"
            href="https://www.instagram.com/honza.b_orinda2024/"
          >
            Odkaz na Instagram →
          </a>
          <br></br>
          <p>
            Jan je aktuálně v Orindě. Jeho
            dobrodružství můžete sledovat na Instagramu, kam
            přidává své dojmy z Kalifornie.
          </p>
        </div>
      </Container>
    </Layout>
  )
}
