import React from "react"
import Layout from "../../components/layout"
import Container from "../../components/container"
import ProfilePic from "../../images/students/karel-barlogh.png"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

export default () => (
  <Layout>
    <Helmet>
      <title>Karel Balogh - Orinda Klub Tábor</title>
    </Helmet>
    <Container>
      <Link className="link-important" to="/our-students/">
        &#8592; zpět na všechny studenty
      </Link>
      <div className="profile">
        <img src={ProfilePic} alt="Karel Balogh" />
        <h1>Karel Balogh</h1>
        <small>Medailonek 2015/2016</small>
        <br></br>
        <a className="link-important" href="http://www.karluvblog.cz/">
          Odkaz na Karlův blog →
        </a>
        <h2>Questionnaire</h2>
        <h3>What was your host family’s name? Any host brothers or sisters?</h3>
        <p>
          I'm really grateful I could stay with the Knoxes. Joe and Markia, my
          host parents, wanted to always make sure I was happy, which I
          appreciated a lot. I also had two host brothers, Christian and Will.
          Christian studied at that time at a college in Cincinnati.
          Unfortunately, I got to meet him only a few times during my stay. I
          spent most of the time with Will. I appreciate everything they've done
          for me. Honestly, I could not ask for a better host family than them.
        </p>
        <h3>
          What classes did you take? Did you participate in any sport throughout
          your stay?
        </h3>
        <p>
          I took English 4, US History, Law and Society, Sports Medicine,
          Journalism and Spanish. Even though I had usually five homework every
          single day, I liked my schedule. During the first half of my stay I
          didn't participate in any sport at school, which I kind of regret
          today. However, during the winter season I joined the Varsity Soccer
          team, which was very fun. I loved being on the team, getting know the
          guys and practicing every day after school.
        </p>
        <h3>What did you like the most? What places did you see?</h3>
        <p>
          As I said in the previous question, I liked the connection between
          school and sports. Most of the students didn't mind spending a whole
          day at school, isn't it cool? But I guess this wasn't the question. I
          liked the freedom and all the traveling I did. I'm really grateful I
          got to see so many places all around the U.S. My host family showed me
          a big part of California, they even took me on the East Coast to New
          York. Thanks to the people, who made my half a year possible, I got to
          see a little part of Los Angeles and one of the best cities in
          California, San Diego. Then I made two trips just by myself, one to
          Las Vegas and the other one to Washington D.C.
        </p>
        <h3>
          Any advice for the upcoming student? Would you recommend something?
        </h3>
        <p>
          Be friendly, open-minded and do sports after school, otherwise it
          might be very hard to find any friends. Be yourself, try as many
          things as possible. Even though it doesn't sound cool, it might be the
          best experience of your stay. So don't waste opportunities and be
          grateful for each one of them.
        </p>
        <h3>Do you have any funny story you would like to share?</h3>
        <p>
          All the funny stories are on my blog. I'd say the best story from my
          stay is that we've kept in touch with my host family. Our relationship
          continues, we visit each other and I really feel as a member of their
          family.
        </p>
      </div>
    </Container>
  </Layout>
)
