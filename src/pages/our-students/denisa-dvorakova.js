import React from "react"
import Layout from "../../components/layout"
import Container from "../../components/container"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Helmet } from "react-helmet"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const DenisaDvorakovaPage = () => {
  const data = useStaticQuery(graphql`
    query DenisaQ {
      file(relativePath: { eq: "students/denisa-dvorakova.png" }) {
        childImageSharp {
          gatsbyImageData(width: 200, quality: 90, placeholder: BLURRED)
        }
      }
    }
  `)
  return (
    <Layout>
      <Helmet>
        <title>Denisa Dvořáková - Orinda Klub Tábor</title>
      </Helmet>
      <Container>
        <Link className="link-important" to="/our-students/">
          &#8592; zpět na všechny studenty
        </Link>
        <div className="profile">
          <GatsbyImage image={getImage(data.file)} alt="Denisa Dvořáková" />
          <h1>Denisa Dvořáková</h1>
          <small>Medailonek 2021/22</small>
          <br></br>
          <a
            className="link-important"
            href="https://www.instagram.com/denisa.d_orinda2021"
            target="_blank"
            rel="noopener noreferrer"
          >
            Odkaz na Denisy Instagram →
          </a>
          <p>
            Dobrodružství Denisy můžete sledovat na Instagramu, kam přidávala
            své dojmy a zážitky z Kalifornie.
          </p>
          <h2>Questionnaire</h2>
          <h3>When did you stay in the US?</h3>
          <p>
            I stayed in the US from August 2021 till January 2022. My stay was
            one year postponed since Covid situation didn’t allow me to travel
            to the US in summer 2020.
          </p>
          <h3>
            What was your host family’s name? Any host brothers or sisters?
          </h3>
          <p>
            During my stay in Orinda, I was a part of the Mosher family. My
            host-mum Jennifer was such an amazing person and we had so much in
            common! She works in college and career center at Miramonte. My
            host-father Jackson is an investor and works with construction
            companies. My host-siblings were Scarlett (19) and Jon-Marc (17).
            With Scarlett I spent only first three weeks of my stay before she
            left for college to Pennsylvania and last three weeks of my stay
            after she came home for Christmas break. Jon-Marc was going to
            Miramonte with me, and he was driving me to school every morning. I
            loved living with my them, and they made me feel like I actually
            belonged to their family for the time of my stay. I was so lucky to
            have them as my host-family, they were really special.
          </p>
          <h3>
            What classes did you take? Did you participate in any sport
            throughout your stay?
          </h3>
          <p>
            "My classes were: Human Anatomy & Physiology – We were learning
            about the systems in human body, learning to identify certain
            samples with microscope, and one very unexpected part of this class
            for me was dissection of Teacup pig (in the second week after
            beginning of school) and cat (every class for month and a half
            before going on Christmas break). It was difficult at the beginning
            for me to remember all the new vocab but eventually, it was a fun
            class (besides the dissection part – that was gross). The teacher
            was quite strict but funny at the same time. I think he had very
            effective ways of teaching. U.S. History – For this class I had the
            coolest and the nicest teacher I’ve ever met. He cared about his
            students so much and was focused on a lot of parts of history that
            were left out in the curriculum for the general history classes. I
            learned so much new information in this class. P.E. Team Sports – It
            was really chill class. If you’d expect to get some good workout
            during these classes, you’d be very wrong. I thought that a lot of
            athletic people would take this class but it’s the opposite way.
            People who participate in some after-school sports are not required
            to take P.E. at school. However, I was happy to have a little break
            in this class and I loved the teacher, she even came to cheer for me
            when I was playing my tennis match. I think she was also happy to
            have me there since for many times I was among only few people who
            were actively participating. And do you want to know what the
            students need to do to get credit for this class? Wear athletics
            clothes and come for the class. Principles of Engineering – That was
            absolutely my most favorite class and the teacher was the best. We
            did a lot of group hands-on projects which included for example,
            building a machine, calculating forces, evaluating usefulness of our
            builds, sketching and brainstorming ideas for our projects. We had a
            lot of fun in my group, too. I already knew a lot of things that we
            were learning about from my Technical Physics classes that I took in
            Tábor so, it was interesting to learn that again in English. English
            4 – This was basically literature and essay writing class. We read
            three books and each of them we analyzed in detail. It was
            challenging class for me, but the teacher was really understanding
            and so nice person. The biggest challenge was probably to understand
            reading Hamlet in the original version, but we also watched the play
            as a movie, which helped. Website ”SparkNotes” was a big help, too
            :) Psychology – I had so much fun in this class with my classmates
            and especially my table group. We did a lot of experiments and fun
            projects. The craziest one was called “Flour Baby Project”. We had
            to buy 10-pound flour, put baby clothes, and draw face on it. For
            over two weeks we were supposed to take care of this flour baby like
            it was a real human baby. Everyone was so serious about it, so it
            wasn’t unusual to see students walking around campus with a bjorn or
            even stroller. Besides the fun part in the class, we were getting
            long homework and tons of reading. I was on a cheerleading team at
            the beginning. After a month or so I joined tennis team and did both
            for a while. I decided to quit cheerleading and just play tennis. I
            created the best memories with the girls from on tennis team. And I
            had so much fun with both, cheerleaders, and tennis players."
          </p>
          <h3>What did you like the most? What places did you see?</h3>
          <p>
            "Generally, I loved meeting and getting to know new people. It was
            fun to see all the differences between Czechs and Americans. I saw a
            lot of gorgeous places in California. The most I enjoyed spending
            time in San Francisco (Golden Gate Bridge, Crissy Fields, Chinatown,
            Alcatraz…) and Los Angeles (Hollywood, Beverly Hills, Santa Monica,
            Malibu…). I loved our trip to Yosemite National Park. The nature and
            all the views were just breathtaking. Also, I enjoyed a lot how
            active and full of adventure trip it was. For the Christmas break we
            went to Hawaii – Maui. We all had such an amazing time there
            surfing, snorkeling, swimming, sunbathing, playing beach volleyball,
            trying their foods and so much more."
          </p>
          <h3>Was there anything you disliked?</h3>
          <p>
            My host-family’s house was located pretty far from downtown Orinda,
            and even so much further from school. So, I had to always ask
            someone to drive me. It usually wasn’t a problem but still, everyone
            had own plans and sometimes it was a situation to solve. My friends
            were driving me very often too. I just felt that sometimes I was
            kind of bothering them with asking for a ride too often. But I
            didn’t want to sit at home when I had the opportunity to explore
            some new place or hang out with someone. I walked for many times,
            but it was almost an hour walk to get to the BART (train station).
            Also, there are no sidewalks, and everyone is driving a car. So,
            walking there is not the best way of transportation, but on the
            other hand I explored the area more and enjoyed the walks. But yeah,
            I missed driving.
          </p>
          <h3>
            Any advice for the upcoming student? Would you recommend something?
          </h3>
          <p>
            Have positive attitude, be friendly, active, and tolerant. Join a
            sports team – it will make it so much easier for you to find
            friends. If you find yourself not enjoying the sport you chose,
            don’t be afraid to ask if you can try something else. Go cheer for
            Mats games!!! (Football, basketball, volleyball…) + bring some
            clothes in dark green color. Don’t forget to bring plug adapter.
            Don’t expect super high temperatures and be prepared for very cold
            nights. Try American foods and drinks (My favorites were Poke bowls
            (best in Poke Go in Lafayette) and Acai bowls (the best I had on
            Maui) and Boba tea (iTea in Moraga). Allow yourself some time to get
            oriented in the area, it’s not the easiest – I recommend walking
            sometimes, it makes it easier. If you happen to not have any plan
            (or can’t find someone to go out with), just jump on BART (train)
            and explore the beautiful Bay area by yourself. Enjoy every second
            you have there – time flies enormously.
          </p>
          <h3>Do you have any funny story you would like to share?</h3>
          <p>
            We were having fun all the time! It’s hard to describe only one
            moment. For example, one day I went to play tennis with Riley - she
            was the captain of the tennis team. The weather was so hot and
            there's no humidity in Orinda so, after just an hour of playing, we
            were drained. In OCC Club, where we played is also gym, golf course,
            and swimming pool. We regrated that we didn’t bring swimsuit. Riley
            suggested to go there anyway because she parked her car near the
            swimming pool. Only few people were in the swimming pool so, we just
            decided to run and jump in wearing our athletic clothes. I was a
            little doubtful inside, but I thought it would be so fun and
            spontaneous thing to do. And I was absolutely right. It was really
            funny at that moment and also, when I came back home completely
            soaked. My host family was laughing as well when I explained it to
            them.
          </p>
        </div>
      </Container>
    </Layout>
  )
}

export default DenisaDvorakovaPage
