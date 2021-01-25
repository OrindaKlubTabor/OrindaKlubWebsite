import React from "react"
import Layout from "../../components/layout"
import Container from "../../components/container"
import ProfilePic from "../../images/students/marie-ruzickova.png"
import { Link } from "gatsby"

export default () => (
  <Layout>
    <Container>
      <Link className="link-important" to="/our-students/">
        &#8592; zpět na všechny studenty
      </Link>
      <div className="profile">
        <img src={ProfilePic} alt="Marie Růžičková" />
        <h1>Marie Růžičková</h1>
        <small>Medailonek 2018/19</small>
        <br></br>
        <a
          className="link-important"
          href="https://marie-v-kalifornii.webnode.cz/"
        >
          Odkaz na Mariin blog →
        </a>
        <h2>Questionnaire</h2>
        <h3>What was your host family’s name? Any host brothers or sisters?</h3>
        <p></p>
        <h3>
          What classes did you take? Did you participate in any sport throughout
          your stay?
        </h3>
        <p></p>
        <h3>What did you like the most? What places did you see?</h3>
        <p></p>
        <h3>
          Any advice for the upcoming student? Would you recommend something?
        </h3>
        <p></p>
        <h3>Do you have any funny story you would like to share?</h3>
        <p></p>
      </div>
    </Container>
  </Layout>
)
