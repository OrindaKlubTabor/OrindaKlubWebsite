import React from "react"
import Layout from "../components/layout"
import Container from "../components/container"
import Header from "../components/header"

import { Link, useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

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
    <Link to={"/our-students/" + props.page + "/"}>
      <div
        className="profile profile-blue"
        style={{ backgroundColor: "#002868", color: "white" }}
      >
        {profilePicture && (
          <GatsbyImage image={profilePicture} alt={props.name} />
        )}
        <h2 style={{ margin: "1rem 0 0.5rem", textAlign: "center" }}>
          {props.name}
        </h2>
        <small>Medailonek {props.year}</small>
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
            gatsbyImageData(width: 150, quality: 80, placeholder: BLURRED)
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Container>
        <Header
          headerText="Naši studenti"
          description="Do Orindy jelo už přes 19 studentů a studentek z Tábora. Tady si můžeš přečíst o jejich zážitcích."
        ></Header>
        <p>
          Každý kdo vyhraje v naší soutěži se automaticky stává členem našeho
          klubu a pomáhá nám ho rozvíjet nadále. Za celou dobu máme už přes 15
          členů.
        </p>
      </Container>
      <div className="student-grid">
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
