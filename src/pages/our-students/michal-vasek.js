import React from "react"
import Layout from "../../components/layout"
import Container from "../../components/container"
import ProfilePic from "../../images/students/michal-vasek.png"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

const MichalVasekPage = () => (
  <Layout>
    <Helmet>
      <title>Michal Vašek - Orinda Klub Tábor</title>
    </Helmet>
    <Container>
      <Link className="link-important" to="/our-students/">
        &#8592; zpět na všechny studenty
      </Link>
      <div className="profile">
        <img src={ProfilePic} alt="Michal Vašek" />
        <h1>Michal Vašek</h1>
        <small>Medailonek 2006/07</small>
        <h2>Questionnaire</h2>
        <h3>What was your host family’s name? Any host brothers or sisters?</h3>
        <p>
          In Orinda I spent wonderful times with the Fernbachers. My host
          parents were Kathy and John. They have two daughters, Kelley and
          Sarah, and one son, Jack. My host brother and I went to Miramonte
          together every morning. John travels to Europe from time to time so we
          see each other quite often. Kelley and Sarah are both married now and
          Jack has engaged recently. I am looking forward to see them all again
          soon.
        </p>
        <h3>
          What classes did you take? Did you participate in any sport throughout
          your stay?
        </h3>
        <p>
          My subjects were English 4, Economics, Psychology, Environmental
          Science and finally Chorus for the fun part. I did not participate in
          any sports, however, I joined various clubs voluntarily, for example
          Diversity Club. With chorus class we organized for example Christmas
          concert with special program. Although every day in school same
          subjects follow from morning to the afternoon, one never gets bored.
        </p>
        <h3>What did you like the most? What places did you see?</h3>
        <p>
          California is one of the most beautiful places I have ever seen. It
          offers a bit from everything: from green forests and mountains to
          deserts full of cactuses. Weather is also more than pleasant with
          reasonable temperatures all year round. For lovers of urban life,
          there are pulsating cities like San Francisco and Los Angeles. Surfing
          is also part of Southern Californian culture. For those who love
          nature, Yosemite National Park is not far from Orinda. And there is
          much more...
        </p>
        <h3>Was there anything you disliked?</h3>
        <p>
          For most of the students this experience is the first time away from
          their families and first experience with living with different family.
          Some might find it challenging to get used to different lifestyle or
          culture, but generally, people in Orinda, are very kind. Maybe one
          thing I found very strange was that people are not used to walking.
          Many streets in Orinda do not even have pavements! But honestly,
          driving such a nice cars is a good compromise.
        </p>
        <h3>
          Any advice for the upcoming student? Would you recommend something?
        </h3>
        <p>
          I would recommend to start living as American from the first day as
          you arrive. Take advantage of your experience as much as you can.
          People from Orinda are more than happy to make your dreams come true.
        </p>
        <h3>Do you have any funny story you would like to share?</h3>
        <p>
          Right after my arrival I was shocked by the size of everything. The
          bucket of butter, bottles of ketchup, gallons of milk, enormous
          trucks, massive 8 lane roads etc. And I am surprisingly the first
          student who lost some weight while studying in USA!
        </p>
      </div>
    </Container>
  </Layout>
)

export default MichalVasekPage
