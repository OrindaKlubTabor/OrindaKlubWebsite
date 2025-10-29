import React from "react"
import Layout from "../components/layout"
import Container from "../components/container"
import { Link, useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Helmet } from "react-helmet"

const styles = {
  heroSection: {
    textAlign: "center",
    maxWidth: "900px",
    margin: "0 auto 4rem",
    padding: "3rem 1.5rem 2rem",
  },
  heroTitle: {
    fontSize: "clamp(2rem, 5vw, 3rem)",
    marginBottom: "1.5rem",
    color: "#002868",
    fontWeight: "700",
    lineHeight: "1.3",
  },
  heroDescription: {
    fontSize: "1.15rem",
    lineHeight: "1.8",
    marginBottom: "2.5rem",
    color: "#4a4a4a",
    maxWidth: "750px",
    margin: "0 auto 2.5rem",
  },
  introText: {
    fontSize: "1.05rem",
    lineHeight: "1.7",
    color: "#4a4a4a",
    maxWidth: "800px",
    margin: "0 auto 3rem",
    textAlign: "center",
  },
}

function Student(props) {
  const node = props.pictures.allFile.nodes.find(
    n =>
      n.childImageSharp.gatsbyImageData.images.fallback?.src?.includes(
        `${props.page}.png`
      ) ||
      n.childImageSharp.gatsbyImageData.images.sources?.some(s =>
        s.srcSet?.includes(`${props.page}.png`)
      )
  )
  const profilePicture = getImage(node)
  return (
    <Link
      to={"/our-students/" + props.page + "/"}
      style={{ textDecoration: "none" }}
    >
      <div
        className="profile profile-blue"
        style={{
          backgroundColor: props.isInOrinda ? "#cb9b15" : "#002868",
          color: "white",
          transition: "all 0.3s ease",
          borderRadius: "16px",
          overflow: "hidden",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "3rem 2rem",
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = "translateY(-8px)"
          e.currentTarget.style.boxShadow = props.isInOrinda
            ? "0 12px 35px rgba(203, 155, 21, 0.4)"
            : "0 12px 35px rgba(0, 40, 104, 0.4)"
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = "translateY(0)"
          e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)"
        }}
      >
        {profilePicture && (
          <div
            style={{
              width: "150px",
              height: "150px",
              overflow: "hidden",
              marginBottom: "1.5rem",
              flexShrink: 0,
            }}
          >
            <GatsbyImage
              image={profilePicture}
              alt={props.name}
              style={{
                width: "150px",
                height: "150px",
                display: "block",
              }}
              imgStyle={{
                objectFit: "cover",
                objectPosition: "center center",
              }}
            />
          </div>
        )}
        <h2
          style={{
            margin: "0 0 0.75rem 0",
            textAlign: "center",
            fontSize: "1.5rem",
            fontWeight: "700",
            color: "white",
          }}
        >
          {props.name}
        </h2>
        <small
          style={{
            fontSize: "0.85rem",
            textTransform: "uppercase",
            letterSpacing: "1px",
            opacity: "0.95",
            fontWeight: "600",
          }}
        >
          {props.isInOrinda ? "Aktuálně v Orindě" : `Medailonek ${props.year}`}
        </small>
      </div>
    </Link>
  )
}

const OurStudentsPage = () => {
  const pictures = useStaticQuery(graphql`
    query ProfileImages {
      allFile(filter: { dir: { regex: "/images/students/" } }) {
        nodes {
          childImageSharp {
            gatsbyImageData(
              width: 180
              height: 180
              quality: 80
              placeholder: BLURRED
            )
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Helmet>
        <title>Naši studenti - Orinda Klub Tábor</title>
        <meta
          name="description"
          content="Do Orindy jelo už přes 20 studentů a studentek z Tábora. Tady si můžeš přečíst o jejich zážitcích."
        />
      </Helmet>
      <Container>
        <div style={{ paddingTop: "2rem" }}>
          <div style={styles.heroSection}>
            <h1 style={styles.heroTitle}>Naši studenti</h1>
            <p style={styles.heroDescription}>
              Do Orindy jelo už přes 20 studentů a studentek z Tábora. Tady si
              můžeš přečíst o jejich zážitcích. Každý kdo vyhraje v naší soutěži
              se automaticky stává členem našeho klubu a pomáhá nám ho rozvíjet
              nadále. Za celou dobu máme už přes 15 členů.
            </p>
          </div>
        </div>
      </Container>
      <div className="student-grid">
        <Student
          name="Amálie Zahradníčková"
          year="2025/2026"
          page="amalie-zahradnickova"
          pictures={pictures}
          isInOrinda={true}
        ></Student>
        <Student
          name="Jan Belada"
          year="2024/2025"
          page="jan-belada"
          pictures={pictures}
        ></Student>
        <Student
          name="Eliška Tůmová"
          year="2023/2024"
          page="eliska-tumova"
          pictures={pictures}
        ></Student>
        <Student
          name="Sofie Flašková"
          year="2022/2023"
          page="sofie-flaskova"
          pictures={pictures}
        ></Student>
        <Student
          name="Denisa Dvořáková"
          year="2021/2022"
          page="denisa-dvorakova"
          pictures={pictures}
        ></Student>
        <Student
          name="Erik Stoklasa"
          year="2019/2020"
          page="erik-stoklasa"
          pictures={pictures}
        ></Student>
        <Student
          name="Marie Růžičková"
          year="2018/2019"
          page="marie-ruzickova"
          pictures={pictures}
        ></Student>
        <Student
          name="Marek Vybíral"
          year="2017/2018"
          page="marek-vybiral"
          pictures={pictures}
        ></Student>
        <Student
          name="Adam Kraus"
          year="2016/2017"
          page="adam-kraus"
          pictures={pictures}
        ></Student>
        <Student
          name="Karel Balogh"
          year="2015/2016"
          page="karel-barlogh"
          pictures={pictures}
        ></Student>

        <Student
          name="Marek Fencl"
          year="2014/2015"
          page="marek-fencl"
          pictures={pictures}
        ></Student>
        <Student
          name="Roxana Rayová"
          year="2013/2014"
          page="roxana-rayova"
          pictures={pictures}
        ></Student>
        <Student
          name="Michael Čížek"
          year="2012/2013"
          page="michael-cizek"
          pictures={pictures}
        ></Student>
        <Student
          name="Martin Matějček"
          year="2010/2011"
          page="martin-matejicek"
          pictures={pictures}
        ></Student>
        <Student
          name="Michaela Kopecká"
          year="2009/2010"
          page="michaela-kopecka"
          pictures={pictures}
        ></Student>
        <Student
          name="Michal Vašek"
          year="2006/2007"
          page="michal-vasek"
          pictures={pictures}
        ></Student>
        <Student
          name="Veronika Štěpková"
          year="2005/2006"
          page="veronika-stepkova"
          pictures={pictures}
        ></Student>
      </div>
    </Layout>
  )
}
export default OurStudentsPage
