import React from "react"
import Layout from "../../components/layout"
import Container from "../../components/container"
import ProfilePic from "../../images/students/denisa-dvorakova.png"
import { Link } from "gatsby"

export default () => (
  <Layout>
    <Container>
      <Link className="link-important" to="/our-students/">
        &#8592; zpět na všechny studenty
      </Link>
      <div className="profile">
        <img src={ProfilePic} alt="Denisa Dvořáková" />
        <h1>Denisa Dvořáková</h1>
        <small>Medailonek 2021/22</small>
        <br></br>
        <a className="link-important" href="https://www.instagram.com/denisa.d_orinda2021">
          Odkaz na Denisy Instagram →
        </a>
        <p>Denisa je momentálně v Orindě a vrací se v lednu 2022. Její dobrodružství můžete sledovat na Instagramu, kam přidává své dojmy z Kalifornie.</p>
      </div>
    </Container>
  </Layout>
)
