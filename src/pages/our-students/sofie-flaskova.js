import React from "react"
import Layout from "../../components/layout"
import Container from "../../components/container"
import ProfilePic from "../../images/students/sofie-flaskova.png"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Helmet } from "react-helmet"
import Img from "gatsby-image"

export default () => {
  const data = useStaticQuery(graphql`
    query SofieQ {
      file(relativePath: { eq: "students/sofie-flaskova.png" }) {
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
        <title>Sofie Flašková - Orinda Klub Tábor</title>
      </Helmet>
      <Container>
        <Link className="link-important" to="/our-students/">
          &#8592; zpět na všechny studenty
        </Link>
        <div className="profile">
          <Img fixed={data.file.childImageSharp.fixed} alt="Sofie Flašková" />
          <h1>Sofie Flašková</h1>
          <small>Medailonek 2022/23</small>
          <br></br>
          <a
            className="link-important"
            href="https://www.instagram.com/sofieflaskovaa/"
          >
            Odkaz na Instagram →
          </a>
          <br></br>
          <a
            className="link-important"
            href="https://www.youtube.com/channel/UCxXUMHrP8OBpI-FSj27GAqw"
          >
            Odkaz na YouTube kanál →
          </a>
          <p>
            Sofie je momentálně v Orindě a vrací se v lednu 2023. Její
            dobrodružství můžete sledovat na Instagramu nebo na YouTube, kam
            přidává své dojmy z Kalifornie.
          </p>
        </div>
      </Container>
    </Layout>
  )
}
