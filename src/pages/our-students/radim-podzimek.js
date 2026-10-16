import React from "react"
import Layout from "../../components/layout"
import Container from "../../components/container"
import InitialsAvatar from "../../components/initials-avatar"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Helmet } from "react-helmet"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const RadimPodzimekPage = () => {
  const data = useStaticQuery(graphql`
    query RadimQ {
      file(relativePath: { eq: "students/radim-podzimek.png" }) {
        childImageSharp {
          gatsbyImageData(width: 200, quality: 90, placeholder: BLURRED)
        }
      }
    }
  `)
  const profilePicture = getImage(data.file)
  return (
    <Layout>
      <Helmet>
        <title>Radim Podzimek - Orinda Klub Tábor</title>
      </Helmet>
      <Container>
        <Link className="link-important" to="/our-students/">
          &#8592; zpět na všechny studenty
        </Link>
        <div className="profile">
          {profilePicture ? (
            <GatsbyImage image={profilePicture} alt="Radim Podzimek" />
          ) : (
            <InitialsAvatar
              name="Radim Podzimek"
              size={200}
              style={{
                margin: "0 auto",
                background: "#002868",
                color: "white",
              }}
            />
          )}
          <h1>Radim Podzimek</h1>
          <small>Medailonek 2026/27</small>
          <br></br>
          <a
            className="link-important"
            href="https://www.instagram.com/radas.p_orinda_2026/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Odkaz na Instagram →
          </a>
          <br></br>
          <p>
            Radim je aktuálně v Orindě. Jeho dobrodružství můžete sledovat na
            Instagramu, kam přidává své dojmy z Kalifornie.
          </p>
        </div>
      </Container>
    </Layout>
  )
}

export default RadimPodzimekPage
