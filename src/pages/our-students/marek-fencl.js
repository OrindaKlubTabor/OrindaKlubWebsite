import React from "react"
import Layout from "../../components/layout"
import Container from "../../components/container"
import ProfilePic from "../../images/students/marek-fencl.png"
import { Link } from "gatsby"

export default () => (
  <Layout>
    <Container>
      <Link className="link-important" to="/our-students/">
        &#8592; zpět na všechny studenty
      </Link>
      <div className="profile">
        <img src={ProfilePic} alt="Marek Fencl" />
        <h1>Marek Fencl</h1>
        <small>Medailonek 2014/15</small>
        <br></br>
        <a
          className="link-important"
          href="https://denik-orinda-klub-tabor.webnode.cz/"
        >
          Odkaz na Markův blog →
        </a>
        <h2>Questionnaire</h2>
        <h3>What was your host family’s name? Any host brothers or sisters?</h3>
        <p>
          I was staying with the Marks. My host-dad's name was David, Beth was
          my host-mom and I had two host-siblings. McClain, the younger one, was
          my age and we went to Miramonte together. Living with him was just one
          big adventure and I would say I experienced everything possible with
          him. My host-sister Meghan was two years older than me. She was in
          Paris for three months while I was there. I have never had a sister
          before, so it was a great experience too. I am really grateful for
          everything they have done for me!
        </p>
        <h3>
          What classes did you take? Did you participate in any sport throughout
          your stay?
        </h3>
        <p>
          As for Miramonte, I usually spent the whole day there. I took
          Pre-Calculus, CAD, 3D Art, Physiology, English, Sports Medicine and US
          History. Sometimes it was pretty tough schedule to have every single
          day. My favourite classes? The Physiology and US History were
          definitely the classes where I have learned the most. Sports Med. was
          a great fun. We were going on games of all kinds and were taking care
          of Miramonte athletes. Right after school I usually went to the
          Crosscountry practise. I have met many people there and I have not
          gone out of my running shape at least.
        </p>
        <h3>What did you like the most? What places did you see?</h3>
        <p>
          The most? I loved so many things I did while I was there! The music
          festivals like Outside Lands or Snowglobe were totally unforgettable.
          The Bay Area was just awesome place. All the cities I have visited
          were amazing... Las Vegas, Los Angeles, San Diego, Lake Tahoe,
          Berkeley... I have just fallen in love with California. That's it.
        </p>
        <h3>Was there anything you disliked?</h3>
        <p>
          Sometimes I missed the freedom of hopping on a bus and going out
          whenever I wanted. There were no buses so I had to ask someone to give
          me a ride everytime and my host-mom did not want me to bike.
          Fortunately there were four members of our family and each one had his
          own car so it was not such a big deal.
        </p>
        <h3>
          Any advice for the upcoming student? Would you recommend something?
        </h3>
        <p>
          You just have to be yourself and open to everything, otherwise you
          will miss a lot. Don't be shy. Try to do as many things you can
          handle. Enjoy the chance you have!
        </p>
        <h3>Do you have any funny story you would like to share?</h3>
        <p>
          It was my third day in California, I was still little sleepy in the
          evening (jet lag). However, I was partying hard at Outside Lands with
          my sister and her friends. I did not have american SIM card in my
          phone yet, so I had to stick to them well. But. There was fourty
          tousand people partying with us and unfortunately Meghan met a guy who
          was supposed to be her future boyfriend. Of course I got lost pretty
          easily. I was super lucky to meet one of her friends at 2 am. His
          phone was dead. At leats I had someone who knew where we were. We met
          Meghan at a MUNI stop near to the Golden Gate Park. That could have
          been a bummer!
        </p>
      </div>
    </Container>
  </Layout>
)
