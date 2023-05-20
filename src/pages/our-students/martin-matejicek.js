import React from "react"
import Layout from "../../components/layout"
import Container from "../../components/container"
import ProfilePic from "../../images/students/martin-matejicek.png"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

export default () => (
  <Layout>
    <Helmet>
      <title>Martin Matějíček - Orinda Klub Tábor</title>
    </Helmet>
    <Container>
      <Link className="link-important" to="/our-students/">
        &#8592; zpět na všechny studenty
      </Link>
      <div className="profile">
        <img src={ProfilePic} alt="Martin Matějíček" />
        <h1>Martin Matějíček</h1>
        <small>Medailonek 2010/11</small>
        <h2>Questionnaire</h2>
        <h3>What was your host family’s name? Any host brothers or sisters?</h3>
        <p>
          Well it was wonderful Pinkerd family - Stacey and Christina (my
          "step-parents") and Noelle with Alysha (my "step-sisters"). I cannot
          forget other members as Foster and Monty (lovely, brave doggies) and
          Misty, Jazzy and Sammy - three playful cats. Well I gotta say, I was
          never bored :) This amazing family took a good care of me and I am
          really greatful. They are all well harmonized and they accepted me as
          I were their own.
        </p>
        <h3>
          What classes did you take? Did you participate in any sport throughout
          your stay?
        </h3>
        <p>
          I took English, Government (with Mr. Hunter, Mr. Hunter was good, but
          that class, eh, not the best choice I have made), Spanish, which was
          fun, 3D Art, where I learned quite a lot, Drama (hillarious class,
          found most of my friends right there) and Sports medicine (the
          teacher, John, is the man!) As for sports - I played soccer, highly
          recommend! Good group of people! All very supportive.
        </p>
        <h3>What did you like the most? What places did you see?</h3>
        <p>
          Well I loved the whole Cali, I saw a lot of stuff - Embarcadero was
          cool, pier 39 as well. I have seen the Monterey bay and the famous
          Aquarium in there. My family took me to Virginia, so that was
          something else and cool.
        </p>
        <h3>
          Any advice for the upcoming student? Would you recommend something?
        </h3>
        <p>
          No fear, no panic, good mood, be friendly and you will do just fine!
        </p>
        <h3>Do you have any funny story you would like to share?</h3>
        <p>
          Well I am not sure if it is was funny but I loved it - At first I
          should mention that I am a big fan of Forrest Gump. I was walking with
          my family in SF and suddenly I noticed Tom Hanks sitting on a bench in
          front of Bubba Gump Shrimp restaurant in his white suit with a box of
          chocolate. I looked closer and it was not Tom Hanks but a dude who
          looked exactly like him! So I sat next to him and we talked, I swear
          he was like Forrest Gump! - after that we went to the Bubba Gump
          Shrimp restaurant for a dinner. I was really excited.
        </p>
      </div>
    </Container>
  </Layout>
)
