import React from "react"
import Layout from "../../components/layout"
import Container from "../../components/container"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Helmet } from "react-helmet"
import Img from "gatsby-image"

export default () => {
  const data = useStaticQuery(graphql`
    query ErikQ {
      file(relativePath: { eq: "students/erik-stoklasa.png" }) {
        childImageSharp {
          fixed(width: 200, quality: 90) {
            originalName
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Helmet>
        <title>Erik Stoklasa - Orinda Klub Tábor</title>
      </Helmet>
      <Container>
        <Link className="link-important" to="/our-students/">
          &#8592; zpět na všechny studenty
        </Link>
        <div className="profile">
          <Img fixed={data.file.childImageSharp.fixed} alt="Erik Stoklasa" />
          <h1>Erik Stoklasa</h1>
          <small>Medailonek 2019/20</small>
          <br></br>
          <a className="link-important" href="https://blog.erikstoklasa.cz">
            Odkaz na Erikův blog →
          </a>
          <h2>Questionnaire</h2>
          <h3>
            What was your host family’s name? Any host brothers or sisters?
          </h3>
          <p>
            McBrides were super friendly and truly tried so that I felt as being
            a part of their family. Maya and Dan, parents, have three sons,
            Aidan (20), Liam (one year older than me) and Kieran (12). Aidan was
            at a university in Colorado most of the year, so I was temporarily
            substituting him in the house.
          </p>
          <h3>
            What classes did you take? Did you participate in any sport
            throughout your stay?
          </h3>
          <p>
            I took 7 classes, Mandarin, Physics, English, Photography, Computer
            Science, US History and Public Speaking. During August and September
            I was also running for the Miramonte Cross Country Team,
            unfortunately my knee injury prevented me from continuing, but it
            was an amazing team and I have met some very nice people there.
          </p>
          <h3>What did you like the most? What places did you see?</h3>
          <p>
            California is gorgeous, especially the warm weather and the cozy
            places in San Francisco. From all the places I have visited during
            my stay (Los Angeles, New York, Tahoe, and Yosemite) I have enjoyed
            it the most in San Francisco, the combination of nature, the
            waterfront, business, not that many tourists and hills was very
            compelling. But cities like LA or New York are also beautiful they
            just need more time to explore.
          </p>
          <h3>Was there anything you disliked?</h3>
          <p>
            People are driving cars way too much and do not have reliable public
            transport. Also, the freezing AC in the summer was terrible.
          </p>
          <h3>
            Any advice for the upcoming student? Would you recommend something?
          </h3>
          <p>
            Time flies by quickly, I recommend spending some time in San
            Francisco. Also, people in Orinda have great connections and are
            very nice, so do not be afraid to ask anyone for anything, just
            behave like an American. Try to do things you normally would not do
            and be open, many great experiences come just from that. You do not
            have to bring that many things, if you forget something, you can buy
            it here.
          </p>
          <h3>Do you have any funny story you would like to share?</h3>
          <p>
            I have not met many Czechs during my stay in California, but what is
            the chance of meeting a friend from your middle school in San
            Francisco? That is exactly what happened, we have accidentally met
            in the downtown of San Francisco and then had an iconic meal
            together - a hot dog!
          </p>
        </div>
      </Container>
    </Layout>
  )
}
