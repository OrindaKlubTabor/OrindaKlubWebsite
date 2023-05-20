import React from "react"
import Layout from "../../components/layout"
import Container from "../../components/container"
import ProfilePic from "../../images/students/marek-vybiral.png"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

export default () => (
  <Layout>
    <Helmet>
      <title>Marek Vybíral - Orinda Klub Tábor</title>
    </Helmet>
    <Container>
      <Link className="link-important" to="/our-students/">
        &#8592; zpět na všechny studenty
      </Link>
      <div className="profile">
        <img src={ProfilePic} alt="Marek Vybíral" />
        <h1>Marek Vybíral</h1>
        <small>Medailonek 2017/18</small>
        <br></br>
        <a
          className="link-important"
          href="https://pulrokvorinde.wordpress.com/"
        >
          Odkaz na Markův blog →
        </a>
        <h2>Questionnaire</h2>
        <h3>What was your host family’s name? Any host brothers or sisters?</h3>
        <p>Hoxie, 3 host brothers Ted, Ben and Phil</p>
        <h3>
          What classes did you take? Did you participate in any sport throughout
          your stay?
        </h3>
        <p>
          I took English, Gov And Econ, Spanish, French, Psychology And Sports
          Med, I took part in cross country as well
        </p>
        <h3>What did you like the most? What places did you see?</h3>
        <p>
          I can’t say I liked something the most but my highlights would be SF,
          Seattle, LA, NY, Boston, Christmas in Rhode Island or Thanksgiving in
          Tahoe
        </p>
        <h3>Was there anything you did not like?</h3>
        <p>
          I can’t really think of anything, only maybe the fact it is just for 6
          months
        </p>
        <h3>
          Any advice for the upcoming student? Would you recommend something?
        </h3>
        <p>
          Do as much u can, take part in anything that comes up, travel as much
          as possible and do not be afraid to talk to people
        </p>
        <h3>Do you have any funny story you would like to share?</h3>
        <p>That would be for an essay...</p>
      </div>
    </Container>
  </Layout>
)
