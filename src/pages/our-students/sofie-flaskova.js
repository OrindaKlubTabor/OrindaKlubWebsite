import React from "react"
import Layout from "../../components/layout"
import Container from "../../components/container"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Helmet } from "react-helmet"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const SofieFlaskovaPage = () => {
  const data = useStaticQuery(graphql`
    query SofieQ {
      file(relativePath: { eq: "students/sofie-flaskova.png" }) {
        childImageSharp {
          gatsbyImageData(width: 200, quality: 90)
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
          <GatsbyImage image={getImage(data.file)} alt="Sofie Flašková" />
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
          {/* <a
            className="link-important"
            href="https://www.youtube.com/channel/UCxXUMHrP8OBpI-FSj27GAqw"
          >
            Odkaz na YouTube kanál →
          </a> */}
          <p>
            Sofie se vrátila z Orindy v lednu 2023. Její dobrodružství můžete
            sledovat na Instagramu, kam přidávala své dojmy z Kalifornie.
          </p>
        </div>
      </Container>
    </Layout>
  )
}

export default SofieFlaskovaPage
