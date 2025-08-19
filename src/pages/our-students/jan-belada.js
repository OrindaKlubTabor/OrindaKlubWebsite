import React from "react"
import Layout from "../../components/layout"
import Container from "../../components/container"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Helmet } from "react-helmet"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const JanBeladaPage = () => {
  const data = useStaticQuery(graphql`
    query JanQ {
      file(relativePath: { eq: "students/jan-belada.png" }) {
        childImageSharp {
          gatsbyImageData(width: 200, quality: 90)
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
          <GatsbyImage image={getImage(data.file)} alt="Jan Belada" />
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
            Jan je aktuálně v Orindě. Jeho dobrodružství můžete sledovat na
            Instagramu, kam přidává své dojmy z Kalifornie.
          </p>
        </div>
      </Container>
    </Layout>
  )
}

export default JanBeladaPage
