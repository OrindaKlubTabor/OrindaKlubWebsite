import React from "react"
import Layout from "../../components/layout"
import Container from "../../components/container"
import ProfilePic from "../../images/students/veronika-stepkova.png"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

export default () => (
  <Layout>
    <Helmet>
      <title>Veronika Štěpková - Orinda Klub Tábor</title>
    </Helmet>
    <Container>
      <Link className="link-important" to="/our-students/">
        &#8592; zpět na všechny studenty
      </Link>
      <div className="profile">
        <img src={ProfilePic} alt="Veronika Štěpková" />
        <h1>Veronika Štěpková</h1>
        <small>Medailonek 2005/06</small>
        <br></br>
        <h2>Questionnaire</h2>
        <h3>What was your host family’s name? Any host brothers or sisters?</h3>
        <p>
          My host family were the Seversons and they were amazing! They could
          not have done more to make me feel comfortable and till today we are
          in touch! I was living with my host father, host mother and host
          sister and other siblings were already older and moved out with their
          spouses. What classes did you take? Did you participate in any sport
          throughout your stay?
        </p>
        <p>
          I am a runner and really enjoyed the crosscountry running team. At
          school, I signed in for English Composition, Economics, Arts and
          Spanish. What did you like the most? What places did you see?
        </p>
        <p>
          I really liked San Francisco most, closest but best! Great atmosphere
          and the university has a very special vibe. We also went to LA with a
          wider family and it was fun with all the children around. I am very
          grateful that we could travel around the South, namely Texas, Arizona,
          Mississippi and Louisiana after the Hurricane Katrina stroke the area
          and help a bit people from that area.
        </p>
        <h3>Was there anything you disliked?</h3>
        <p>Not much :)</p>
        <h3>
          Any advice for the upcoming student? Would you recommend something?
        </h3>
        <p>
          Just be open to new experience, try as much as possible, learn as much
          as possible and simply enjoy :)
        </p>
        <h3>Do you have any funny story you would like to share?</h3>
        <p>
          There were many funny stories but the most significant for me is not
          funny but simply really nice. We kept in touch with my best friends
          from the USA - a Polish girl Marta and a great musician Sarah Lewis
          and we met ten years after that in Paris. I am now hoping to see Marta
          again, this time with her new baby :)
        </p>
      </div>
    </Container>
  </Layout>
)
