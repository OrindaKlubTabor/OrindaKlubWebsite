import React from "react"
import Layout from "../../components/layout"
import Container from "../../components/container"
import ProfilePic from "../../images/students/michael-cizek.png"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

export default () => (
  <Layout>
    <Helmet>
      <title>Michael Čížek - Orinda Klub Tábor</title>
    </Helmet>
    <Container>
      <Link className="link-important" to="/our-students/">
        &#8592; zpět na všechny studenty
      </Link>
      <div className="profile">
        <img src={ProfilePic} alt="Michael Čížek" />
        <h1>Michael Čížek</h1>
        <small>Medailonek 2012/2013</small>
        <h2>Questionnaire</h2>
        <h3>What was your host family’s name? Any host brothers or sisters?</h3>
        <p>
          My host family’s name was The Vishers, the people that I love the most
          on the whole planet! Both of my host parents are attorneys; Deborah,
          my host mom at that time, would stay home, to take care of the kids.
          She would always do millions of things extra. Chandler, my host
          father, works in San Francisco where his office is located. Finally,
          my two host brothers- Jarrett and Kyle, and one host sis- Linnea. They
          are the best siblings a man could ask for.
        </p>
        <h3>
          What classes did you take? Did you participate in any sport throughout
          your stay?
        </h3>
        <p>
          I was a senior, so I might have taken some classes that were not so
          typical for our students. I took English for Seniors, Crafts, 3D Art,
          Economics, Sports Medicine and PE Weight Training. My favorite class
          was English, for sure. I had a great teacher who taught me how to read
          “between the lines” and basically how to love literature. However, the
          class that enriched me the most was Econ. Mr. Hunter, my teacher, was
          extremely tough on me, but I am endlessly grateful to him, because he
          saved my econ studies at college. Mrs. Hovey-LaCour, my Photography
          teacher, gave me not only the prospective of how to photograph
          objects, but she also taught me to see art and beauty all around me
          and she always brought light to my dark school days. As I have said
          before, my host brothers play soccer, therefore, it was my pleasure to
          join them on the Miramonte soccer team.
        </p>
        <h3>What did you like the most? What places did you see?</h3>
        <p>
          Honestly, this sounds like the hardest question ever. I visited so
          many places! San Francisco is a magical city and I tried to go there
          as often as possible, even though it meant going on my own sometimes.
          But here, I have to thank my awesome buddy and guide Victoria. She
          took me on several trips, either on bikes or just hiking, they were
          all just unforgettable. During Thanksgiving week, my family and I
          visited Yosemite National Park. From there, we headed to Las Vegas,
          known as the city of thousand lights. My absolutely favorite place in
          California is Santa Barbara, where the rest of our family lives.
          Palms, beaches, amazing sunsets…what else could you ask for? I got a
          chance to ride horses like a real cowboy when we gathered the cattle
          at the V6 ranch. Last but not least, I spent some time skiing in Lake
          Tahoe resorts too. But to tell you the truth, what I loved the most,
          was to simply spend time talking with my family and enjoying being
          part of them. To me, this was priceless.
        </p>
        <h3>
          Any advice for the upcoming student? Would you recommend something?
        </h3>
        <p>
          To answer this question I am going to use my favorite quote by Steven
          Chbosky. You can interpret this how you want or you can easily ask me
          what I mean by this. “Even if we don't have the power to choose where
          we come from, we can still choose where we go from there.”
        </p>
        <h3>Do you have any funny story you would like to share?</h3>
        <p>
          Haha, there were so many. OK, I will pick this one. So at the
          beginning of my stay, my family and I somehow talked about the various
          holidays that people celebrate in the US. Of course, they mentioned
          Halloween, too. At that point, Kyle promised taking me trick or
          treating. So when the day D came, Deborah kept persuading us that this
          was really not a good idea, according to our age, but a promise is a
          promise! We put on our fancy costumes, (please see the picture), and
          hit the road. :D So there’s us, standing in front of these expensive
          houses, surrounded by all these little kids. -Me hoping for a true
          American experience, and Kyle probably feeling really awkward. We
          joined a group of little pink princesses and knocked on the door. A
          man opened the door… “Trick or treat!!!” He enthusiastically gave
          millions of sweets to all the girls. Suddenly, he raised his head and
          looked at us. “And you guys want what?” with a really angry voice. Me
          dressed as Cookie Monster responding with a really weak voice:
          “ehmmmm… aaaaa….trick or treat?” Man: Aren’t you a bit old for this?
          So I explained him, that I was from where I was, and that I had always
          longed for doing this. He said OK, gave me a lollypop and slammed the
          door. I felt so embarrassed.
        </p>
      </div>
    </Container>
  </Layout>
)
