import React from "react"
import Layout from "../../components/layout"
import Container from "../../components/container"
import ProfilePic from "../../images/students/marie-ruzickova.png"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

const MarieRuzickovaPage = () => (
  <Layout>
    <Helmet>
      <title>Marie Růžičková - Orinda Klub Tábor</title>
    </Helmet>
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
        <p>
          I was staying with the Insalaco’s. My host mum Michelene was a lawyer
          in SF and I had two host siblings. For the first time I got to
          experience being the oldest one as both of them were younger. Cole was
          one grade below me at Miramonte and Lila was 14 years old.
        </p>
        <h3>
          What classes did you take? Did you participate in any sport throughout
          your stay?
        </h3>
        <p>
          I changed my schedule during the first month of the semester so I took
          a numerous classes. Of course the obligatory ones -English and US
          History. Then I took Art, Drama, French, Public Speaking and Yoga. At
          the beginning I went to a couple of lessons in Global studies and
          Computer science. I’m not a sporty person so I didn’t participate in
          any sports at school however I took lessons in local dance studio.
        </p>
        <h3>What did you like the most? What places did you see?</h3>
        <p>
          With my family I visited beautiful American nature - Lake Tahoe,
          Yosemite Valley, Oregon and a few places in the Bay Area. I love
          mountains and nature, but I probably enjoyed the cities more as I got
          to see their diversity. I visited San Francisco many times, then
          Berkeley and on my way home I spend a few days in Washington DC,
          Boston and New York. I probably liked SF the most, because I had
          enough time to get to know the city and visit all the different
          neighborhoods.
        </p>
        <h3>Was there anything you did not like?</h3>
        <p>
          Sometimes it was hard for me to understand the American values that
          are different from the European ones (or at least mine).
        </p>
        <h3>
          Any advice for the upcoming student? Would you recommend something?
        </h3>
        <p>
          We have this idea that Europe and America share the “western culture”.
          Even though we have something in common it’s more different than you
          would think. And two practical tips - ride a bike if it’s possible
          (Orinda is hilly, but it gives you freedom and you don’t have to rely
          on local public transport) and take Drama (you get to know many people
          and learn to use English language in performing).
        </p>
        <h3>Do you have any funny story you would like to share?</h3>
        <p>
          I started our home alarm a couple times because I like to sleep with
          an open window and it lead straight to the entrance terrace. I was
          quite terrified when it happened for the first time :)
        </p>
      </div>
    </Container>
  </Layout>
)

export default MarieRuzickovaPage
