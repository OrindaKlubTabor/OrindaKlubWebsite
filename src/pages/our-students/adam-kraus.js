import React from "react"
import Layout from "../../components/layout"
import Container from "../../components/container"
import ProfilePic from "../../images/students/adam-kraus.png"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

export default () => (
  <Layout>
    <Helmet>
        <title>Adam Kraus - Orinda Klub Tábor</title>
    </Helmet>
    <Container>
      <Link className="link-important" to="/our-students/">
        &#8592; zpět na všechny studenty
      </Link>
      <div className="profile">
        <img src={ProfilePic} alt="Adam Kraus" />
        <h1>Adam Kraus</h1>
        <small>Medailonek 2016/17</small>
        <h2>Questionnaire</h2>
        <h3>What was your host family’s name? Any host brothers or sisters?</h3>
        <p>
          The Faulkners. I had one in-house host-brother and one that was
          studying in a different state, Arizona.
        </p>
        <h3>
          What classes did you take? Did you participate in any sport throughout
          your stay?
        </h3>
        <p>
          I took two band classes, which was really fun, because I got to play
          the trumpet every single day for a decent amount of time. Then I took
          Latin and Mandarin, which was slightly more challenging, but truly
          giving. I also took photography, once again going over the basics of
          taking pictures and applying that around the school and country while
          doing so. On top of that, I took the two mandatory subjects, English
          and American History, those two were easily the two hardest ones,
          because I was expected to match with my American classmates. I was
          also quite active while participating in the cross country running and
          soccer, and in both of these, I made it in the junior representation
          squad.
        </p>
        <h3>What did you like the most? What places did you see?</h3>
        <p>
          It's really hard to pick the most beautiful place, but I just have to
          go with the Los Angeles, Venice beach sunset. That was one-in-the-life
          moment. Even the locals were saying that they never saw such a
          beautiful sunset.
        </p>
        <h3>Was there anything you disliked?</h3>
        <p>
          Not really. The whole had its ups and downs, but I guess I am even
          more grateful for the downs, since it taught me so much. ​
        </p>
        <h3>
          Any advice for the upcoming student? Would you recommend something?
        </h3>
        <p>
          Don't lean on school. Experience as much of everything as you can.
          Taste all the food you can and visit every place you can.
        </p>
        <h3>Do you have any funny story you would like to share?</h3>
        <p>
          Oh, there is so many though. I will go with the classic because of
          which all my friends keep making fun of me. I was flying from Berlin,
          so I had to get there somehow. Eventually, I took the bus. I got on
          the bus in Prague, and when I was getting of, I was standing in front
          of the luggage space, waiting for it to open, while suddenly, the bus
          started to move. My first thought was that it's just moving to a
          different place in the station, but then it started to accelerate and
          everything just clicked when it left the station. So yeah! That's the
          beginning of my journey to the US just with a backpack. PS: I never
          got the luggage back.
        </p>
      </div>
    </Container>
  </Layout>
)
