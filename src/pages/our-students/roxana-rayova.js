import React from "react"
import Layout from "../../components/layout"
import Container from "../../components/container"
import ProfilePic from "../../images/students/roxana-rayova.png"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

const RoxanaRayovaPage = () => (
  <Layout>
    <Helmet>
      <title>Roxana Rayová - Orinda Klub Tábor</title>
    </Helmet>
    <Container>
      <Link className="link-important" to="/our-students/">
        &#8592; zpět na všechny studenty
      </Link>
      <div className="profile">
        <img src={ProfilePic} alt="Roxana Rayová" />
        <h1>Roxana Rayová</h1>
        <small>Medailonek 2013/2014</small>
        <br></br>
        <a className="link-important" href="https://americandream.estranky.cz/">
          Odkaz na Roxany blog →
        </a>
        <h2>Questionnaire</h2>
        <h3>What was your host family’s name? Any host brothers or sisters?</h3>
        <p>
          I was staying with the Ramirez. You definitely noticed that the
          surname sounds Mexican and you are right! Carlos, my host-daddy was
          born in Mexico but thanks to his talent and loads of hard work, he
          became a family doctor in the U. S. where he met Carla and later on,
          he married her. Carla is a very active and creative person. She was
          the one who was trying to engage me in all sorts of activities. And I
          also had a host-sister, Lauren, who is two years younger than me. She
          is very smart, sporty and sociable and overall "COOL". By the way, she
          speaks Cantonese and learns Mandarin! (Chinese languages.)
        </p>
        <h3>
          What classes did you take? Did you participate in any sport throughout
          your stay?
        </h3>
        <p>
          I took the school easy. I wanted to meet and get to know new people
          which is much easier to do during the art-class than during an AP
          Physics. :D And so I had a wonderful semester full of all the creative
          classes I could take: 3D Art, Drama, Chorus, PE and then French and
          English. I also participated in soccer, but honestly, it was quite
          tough, as I was a complete amateur while the rest of the girls on the
          team had been playing for years. However, I had the coolest coach
          ever. :)
        </p>
        <h3>What did you like the most? What places did you see?</h3>
        <p>
          I fell in love with San Francisco with its endless ethnical and
          cultural diversity and tolerance. What I totally enjoyed was the the
          San Francisco Bay cruise around Alcatraz and under the Golden Gate
          bridge. But California definitely isn't all about the big cities. I
          was lucky to visit the Lake Tahoe on the CAL/NV border and enjoy the
          splendid view of the lake from the mountains. However, probably the
          most exciting week spent on the American continent was the Christmas
          holiday. My host family took me to Mérida, Mexico, where I got to meet
          the host-daddy's parents and relatives and together we visited Mayan
          temples, pictoresque towns of Yucatan and we generaly had a great
          time.
        </p>
        <h3>Was there anything you disliked?</h3>
        <p>
          I felt lack of independence bacause of the insufficient public
          transport. The other thing that was very hard for me to adapt to was
          the school system. I am used to have a stable group of people around
          me, but as the american system works on the base of electives, I
          barely met my classmates more than once a day which makes it pretty
          hard to start a friendship.
        </p>
        <h3>
          Any advice for the upcoming student? Would you recommend something?
        </h3>
        <p>
          The experience is non-transferable. However, in terms of school
          subjects, I would recommend Drama as the best way to meet people. But
          otherwise, you will have to find out yourself. Don't hesitate to ask
          for help and try as many new things as you can! I am sure you won't
          regret.
        </p>
        <h3>Do you have any funny story you would like to share?</h3>
        <p>
          There is a very thin line between "funny" and "awkward." *NO COMMENT*
        </p>
      </div>
    </Container>
  </Layout>
)

export default RoxanaRayovaPage
