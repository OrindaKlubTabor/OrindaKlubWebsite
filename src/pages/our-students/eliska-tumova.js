import React from "react"
import Layout from "../../components/layout"
import Container from "../../components/container"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Helmet } from "react-helmet"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const EliskaTumovaPage = () => {
  const data = useStaticQuery(graphql`
    query EliskaQ {
      file(relativePath: { eq: "students/eliska-tumova.png" }) {
        childImageSharp {
          gatsbyImageData(width: 200, quality: 90, placeholder: BLURRED)
        }
      }
    }
  `)
  return (
    <Layout>
      <Helmet>
        <title>Eliška Tůmová - Orinda Klub Tábor</title>
      </Helmet>
      <Container>
        <Link className="link-important" to="/our-students/">
          &#8592; zpět na všechny studenty
        </Link>
        <div className="profile">
          <GatsbyImage image={getImage(data.file)} alt="Eliška Tůmová" />
          <h1>Eliška Tůmová</h1>
          <small>Medailonek 2023/24</small>
          <br></br>
          <a
            className="link-important"
            href="https://www.instagram.com/eliskatumovaa/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Odkaz na Instagram →
          </a>
          <br></br>
          <p>
            Eliška se vrátila z Orindy v lednu 2024. Její dobrodružství můžete
            sledovat na Instagramu, kam přidávala své dojmy z Kalifornie.
          </p>
        </div>
      </Container>
    </Layout>
  )
}

export default EliskaTumovaPage
