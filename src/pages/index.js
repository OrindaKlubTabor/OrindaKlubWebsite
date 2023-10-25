import React from "react"
import Layout from "../components/layout"
import Container from "../components/container"
import DownArrow from "../images/down-arrow.png"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"

export default function Home() {
  const data = useStaticQuery(
    graphql`
      query BackgroundImg {
        image: file(relativePath: { eq: "background.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1500) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        posts: allContentfulPost(
          limit: 1
          sort: { fields: createdAt, order: DESC }
        ) {
          nodes {
            createdAt(formatString: "D. MMMM YYYY", locale: "cs")
            title
            slug
            description
          }
        }
      }
    `
  )
  return (
    <Layout>
      <div className="landing-image">
        <Img
          critical={true}
          fadeIn={false}
          fluid={data.image.childImageSharp.fluid}
        />
      </div>

      <div className="popover">
        <h2>Půlrok v USA plný zážitků na celý život</h2>
        <a href="#content">
          O soutěži <img src={DownArrow} alt="down arrow"></img>
        </a>
      </div>
      <div className="latest">
        <Container>
          <h2>{data.posts.nodes[0].title}</h2>
          <p style={{ margin: "0 0 3rem" }}>
            {data.posts.nodes[0].createdAt} • {data.posts.nodes[0].description}
          </p>
          <Link className="link-background" to={data.posts.nodes[0].slug}>
            Zobrazit příspěvek &#8594;
          </Link>
        </Container>
      </div>
      <Container>
        <div id="content">
          <div id="video">
            <h2 style={{ margin: "4rem 0 1rem" }}>Přednáška o soutěži</h2>
            <p>
              Nahrávka přednášky o soutěži, která se konala v říjnu 2023 na
              Gymnáziu Soběslav. Rádi poskytneme přednášku i na vaší škole,
              neváhejte nás kontaktovat.
            </p>
            <iframe
              width="690"
              height="388"
              src="https://www.youtube.com/embed/Na0WP4Yl2cw?si=UlfBwYwmzocCEJyM"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen="true">
            </iframe>
          </div>
          <p>
            Získej možnost studovat půl roku na střední škole v Kalifornii.
            Bydlet budeš u hostitelské rodiny, která se o tebe postará a staneš
            se tak součástí tamní kultury. Poznáš americké zvyky, seznámíš se s
            novými kamarády a určitě na celý pobyt nikdy nezapomeneš!
          </p>
          <Link className="link-important" to="/our-students">
            Jak pobyt vidí naši studenti &#8594;
          </Link>
          <h2 style={{ margin: "4rem 0 1rem" }}>Podmínky účasti</h2>
          <ul>
            <li style={{ fontSize: "1.1rem" }}>Jsi z Tábora</li>
            <li style={{ fontSize: "1.1rem" }}>Studuješ na střední škole</li>
            <li style={{ fontSize: "1.1rem" }}>Je ti 16-18 let</li>
            <li style={{ fontSize: "1.1rem" }}>
              Chceš nám pomáhat spojovat Tábor a Orindu
            </li>
          </ul>
          <a className="link-important" href="/pravidla-souteze.pdf">
            Kompletní podmínky účasti &#8594;
          </a>
          <Link
            style={{
              background: "#002868",
              color: "white",
              padding: "1rem",
              margin: "1rem 0 0",
              display: "block",
              maxWidth: "20rem",
            }}
            to="/application-form"
          >
            Přihlásit se do soutěže &#8594;
          </Link>
          <h2 style={{ margin: "2rem 0 2rem" }}>Jak soutěž probíhá?</h2>
          <h3>První kolo</h3>
          <h5 style={{ margin: "0" }}>3. října - 17. prosinec</h5>
          <p>
            Každý rok na podzim začíná první kolo soutěže. V tomto kole máš za
            úkol napsat motivační esej v angličtině na přibližně 2 normostrany.
          </p>
          <h3 style={{ margin: "2rem 0 1rem" }}>Druhé kolo</h3>
          <h5 style={{ margin: "0" }}>únor/březen</h5>
          <p>
            Pokud bude tvoje esej vyhovovat zadání, pozveme tě do druhého kola.
            Bude tě čekat ústní pohovor v angličtině, kde se budeme ptát na
            doplňující informace k eseji. Chceme tě tím více poznat, s komisí
            budeš mluvit asi 20 minut.
          </p>
          <h3 style={{ margin: "2rem 0 1rem" }}>Odlet do Orindy</h3>
          <h5 style={{ margin: "0" }}>srpen</h5>
          <p>
            Porota v Táboře dává doporučení porotě v Orindě, pokud si tě tedy
            vyberou v Orindě, tak se můžeš se těšit na nezapomenutelné zážitky v
            Kalifornii!
          </p>
        </div>
      </Container>
    </Layout>
  )
}
