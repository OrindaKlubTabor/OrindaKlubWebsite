import React from "react"
import Layout from "../../components/layout"
import Container from "../../components/container"
import ProfilePic from "../../images/students/michaela-kopecka.png"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

export default () => (
  <Layout>
    <Helmet>
        <title>Michaela Kopecká - Orinda Klub Tábor</title>
    </Helmet>
    <Container>
      <Link className="link-important" to="/our-students/">
        &#8592; zpět na všechny studenty
      </Link>
      <div className="profile">
        <img src={ProfilePic} alt="Michaela Kopecká" />
        <h1>Michaela Kopecká</h1>
        <small>Medailonek 2009/10</small>
        <h2>Questionnaire</h2>
        <h3>What was your host family’s name? Any host brothers or sisters?</h3>
        <p>
          I stayed with the Thompsons. My hostmother's name was Maryett and my
          hostfather was Bob. They had 3 children, all in collage - Mike, Allie
          and Art (and his wife Amanda!). A big part of the family were also 2
          amazing dogs. I could not ask for a more kind, carring, loving and
          funny family!
        </p>
        <h3>
          What classes did you take? Did you participate in any sport throughout
          your stay?
        </h3>
        <p>
          I took Cooking, Art, Photography, Sports medicine and English. All of
          the classes were really fun and not that hard. My favourite was Sports
          medicine. I played tennis after school every day. I was even on the
          varsity team. The girls on the team were really nice and I loved to
          spend my time with them while practising and on tournaments!
        </p>
        <h3>What did you like the most? What places did you see?</h3>
        <p>
          There and sooo many places I liked! My amazing host family took me to
          LA (Disneyland), Arizona, Washington D.C., Texas and all around
          California! Of course a have been to SF a couple times, it is my
          favourite city...
        </p>
        <h3>Was there anything you disliked?</h3>
        <p>
          It is hard to find something that I disliked. The only thing that I
          could think of was the long distance between everything so I had to
          ask my host family for a ride every time I needed something. But my
          host family was really nice so it was no problem.
        </p>
        <h3>
          Any advice for the upcoming student? Would you recommend something?
        </h3>
        <p>
          Be open, that is the main thing! Do sports, you will find many friends
          there. And take easy and fun classes so you don't have to learn after
          school that much :)
        </p>
        <h3>Do you have any funny story you would like to share?</h3>
        <p>
          There are so many funny stories that a can't share just one with you.
          :)
        </p>
      </div>
    </Container>
  </Layout>
)
