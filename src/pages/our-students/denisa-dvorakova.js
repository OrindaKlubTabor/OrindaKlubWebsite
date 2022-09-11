import React from "react"
import Layout from "../../components/layout"
import Container from "../../components/container"
import ProfilePic from "../../images/students/denisa-dvorakova.png"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

export default () => (
  <Layout>
    <Helmet>
      <title>Denisa Dvořáková - Orinda Klub Tábor</title>
    </Helmet>
    <Container>
      <Link className="link-important" to="/our-students/">
        &#8592; zpět na všechny studenty
      </Link>
      <div className="profile">
        <img src={ProfilePic} alt="Denisa Dvořáková" />
        <h1>Denisa Dvořáková</h1>
        <small>Medailonek 2021/22</small>
        <br></br>
        <a
          className="link-important"
          href="https://www.instagram.com/denisa.d_orinda2021"
        >
          Odkaz na Denisy Instagram →
        </a>
        <p>
          Dobrodružství Denisy můžete sledovat na Instagramu, kam přidávala své
          dojmy a zážitky z Kalifornie.
        </p>
      </div>
    </Container>
  </Layout>
)
