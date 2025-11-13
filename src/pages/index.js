import React from "react"
import Layout from "../components/layout"
import Container from "../components/container"
import DownArrow from "../images/down-arrow.png"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { DEADLINE } from "../constants"

const styles = {
  heroSection: {
    textAlign: "center",
    maxWidth: "900px",
    margin: "0 auto 5rem",
    padding: "3rem 1.5rem",
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
  primaryButton: {
    background: "linear-gradient(135deg, #bf0a30 0%, #d41139 100%)",
    color: "white",
    padding: "1.2rem 3rem",
    display: "inline-block",
    fontSize: "1.1rem",
    fontWeight: "600",
    borderRadius: "50px",
    boxShadow: "0 8px 20px rgba(191, 10, 48, 0.3)",
    transition: "all 0.3s ease",
    border: "none",
    cursor: "pointer",
  },
  sectionTitle: {
    fontSize: "2.5rem",
    margin: "5rem 0 3rem",
    textAlign: "center",
    color: "#002868",
    fontWeight: "700",
  },
  conditionsGrid: {
    maxWidth: "700px",
    margin: "3rem auto",
    display: "grid",
    gap: "1rem",
  },
  conditionItem: {
    fontSize: "1.15rem",
    padding: "1.5rem 2rem",
    background: "white",
    borderRadius: "12px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
    borderLeft: "4px solid #002868",
    display: "flex",
    alignItems: "center",
    transition: "all 0.3s ease",
  },
  processCard: {
    padding: "2.5rem",
    background: "white",
    borderRadius: "16px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
    borderTop: "4px solid #bf0a30",
    transition: "all 0.3s ease",
  },
  processCardTitle: {
    marginTop: 0,
    marginBottom: "1rem",
    color: "#002868",
    fontSize: "1.8rem",
    fontWeight: "700",
  },
  processCardDate: {
    margin: "0 0 1.5rem",
    color: "#bf0a30",
    fontWeight: "600",
    fontSize: "1rem",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },
  ctaSection: {
    textAlign: "center",
    margin: "6rem auto 4rem",
    padding: "4rem 2rem",
    background: "linear-gradient(135deg, #002868 0%, #004a9e 100%)",
    borderRadius: "20px",
    color: "white",
    boxShadow: "0 10px 40px rgba(0, 40, 104, 0.3)",
  },
  secondaryLink: {
    display: "inline-block",
    fontSize: "1.15rem",
    fontWeight: "600",
    color: "#002868",
    padding: "1rem 2rem",
    borderRadius: "50px",
    border: "2px solid #002868",
    transition: "all 0.3s ease",
    textDecoration: "none",
  },
  videoSection: {
    margin: "5rem 0",
  },
}

export default function Home() {
  return (
    <Layout>
      <div className="landing-image">
        <StaticImage
          src="../images/background-1.png"
          alt=""
          layout="fullWidth"
          loading="eager"
          placeholder="none"
        />
      </div>

      <div className="popover">
        <h2>Půlrok v USA plný zážitků na celý život</h2>
        <a href="#content">
          O soutěži <img src={DownArrow} alt="down arrow"></img>
        </a>
      </div>
      <Container>
        <div id="content" style={{ paddingTop: "2rem" }}>
          <div style={styles.heroSection}>
            <h2 style={styles.heroTitle}>
              Studuj půl roku na střední škole v Kalifornii
            </h2>
            <p style={styles.heroDescription}>
              Získej možnost studovat na střední škole v Orindě, Kalifornii.
              Bydlet budeš u hostitelské rodiny, která se o tebe postará a
              staneš se tak součástí tamní kultury. Poznáš americké zvyky,
              seznámíš se s novými kamarády a určitě na celý pobyt nikdy
              nezapomeneš!
            </p>
            <Link style={styles.primaryButton} to="/application-form">
              Přihlásit se do soutěže &#8594;
            </Link>
          </div>

          <div style={styles.videoSection}>
            <h2 style={styles.sectionTitle}>Přednáška o soutěži</h2>
            <p
              style={{
                textAlign: "center",
                maxWidth: "700px",
                margin: "0 auto 2rem",
                fontSize: "1.05rem",
                color: "#4a4a4a",
              }}
            >
              Nahrávka přednášky o soutěži, která se konala v listopadu 2025 na
              Gymnáziu Pierra de Coubertina. Rádi poskytneme přednášku i na vaší
              škole, neváhejte nás kontaktovat.
            </p>
            <div
              id="video"
              style={{
                paddingBottom: "56.25%",
                position: "relative",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
              }}
            >
              <iframe
                src="https://www.youtube.com/embed/F-OSrC95ltU?si=2L3jKERGB4NErXXH"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                }}
              ></iframe>
            </div>
          </div>

          <div style={{ textAlign: "center", margin: "4rem 0" }}>
            <Link
              style={styles.secondaryLink}
              to="/our-students"
              onMouseEnter={e => {
                e.currentTarget.style.background = "#002868"
                e.currentTarget.style.color = "white"
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "transparent"
                e.currentTarget.style.color = "#002868"
              }}
            >
              Jak pobyt vidí naši studenti &#8594;
            </Link>
          </div>

          <h2 style={styles.sectionTitle}>Podmínky účasti</h2>
          <div style={styles.conditionsGrid}>
            <div style={styles.conditionItem}>
              <span
                style={{
                  fontSize: "1.5rem",
                  marginRight: "1rem",
                  color: "#002868",
                }}
              >
                ✓
              </span>
              <span>Jsi z Tábora</span>
            </div>
            <div style={styles.conditionItem}>
              <span
                style={{
                  fontSize: "1.5rem",
                  marginRight: "1rem",
                  color: "#002868",
                }}
              >
                ✓
              </span>
              <span>Studuješ na střední škole</span>
            </div>
            <div style={styles.conditionItem}>
              <span
                style={{
                  fontSize: "1.5rem",
                  marginRight: "1rem",
                  color: "#002868",
                }}
              >
                ✓
              </span>
              <span>Je ti 16-18 let</span>
            </div>
            <div style={styles.conditionItem}>
              <span
                style={{
                  fontSize: "1.5rem",
                  marginRight: "1rem",
                  color: "#002868",
                }}
              >
                ✓
              </span>
              <span>Chceš nám pomáhat spojovat Tábor a Orindu</span>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <a
              style={{ ...styles.secondaryLink, textDecoration: "none" }}
              href="/pravidla-souteze.pdf"
              onMouseEnter={e => {
                e.currentTarget.style.background = "#002868"
                e.currentTarget.style.color = "white"
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "transparent"
                e.currentTarget.style.color = "#002868"
              }}
            >
              Kompletní podmínky účasti &#8594;
            </a>
          </div>

          <h2 style={styles.sectionTitle}>Jak soutěž probíhá?</h2>

          <div
            style={{
              maxWidth: "950px",
              margin: "0 auto",
              display: "grid",
              gap: "2.5rem",
            }}
          >
            <div style={styles.processCard}>
              <h3 style={styles.processCardTitle}>První kolo</h3>
              <h5 style={styles.processCardDate}>
                1. října -{" "}
                {new Intl.DateTimeFormat("cs-CZ", {
                  day: "numeric",
                  month: "long",
                }).format(DEADLINE)}
              </h5>
              <p
                style={{
                  margin: 0,
                  fontSize: "1.05rem",
                  lineHeight: "1.7",
                  color: "#4a4a4a",
                }}
              >
                Každý rok na podzim začíná první kolo soutěže. V tomto kole máš
                za úkol napsat motivační esej v angličtině na přibližně 2
                normostrany.
              </p>
            </div>

            <div style={styles.processCard}>
              <h3 style={styles.processCardTitle}>Druhé kolo</h3>
              <h5 style={styles.processCardDate}>únor/březen</h5>
              <p
                style={{
                  margin: 0,
                  fontSize: "1.05rem",
                  lineHeight: "1.7",
                  color: "#4a4a4a",
                }}
              >
                Pokud nás svojí esejí zaujmeš, pozveme tě do druhého kola. Bude
                tě čekat ústní pohovor v angličtině, kde se budeme ptát na
                doplňující informace k eseji. Chceme tě tím více poznat, s
                komisí budeš mluvit asi 20 minut.
              </p>
            </div>

            <div style={styles.processCard}>
              <h3 style={styles.processCardTitle}>Odlet do Orindy</h3>
              <h5 style={styles.processCardDate}>srpen</h5>
              <p
                style={{
                  margin: 0,
                  fontSize: "1.05rem",
                  lineHeight: "1.7",
                  color: "#4a4a4a",
                }}
              >
                Porota v Táboře dává doporučení porotě v Orindě, pokud si tě
                tedy vyberou v Orindě, tak se můžeš se těšit na nezapomenutelné
                zážitky v Kalifornii!
              </p>
            </div>
          </div>

          <div style={styles.ctaSection}>
            <h2
              style={{
                color: "white",
                marginTop: 0,
                fontSize: "2.5rem",
                fontWeight: "700",
                marginBottom: "1.5rem",
              }}
            >
              Kalifornie čeká!
            </h2>
            <Link
              style={{
                background: "white",
                color: "#002868",
                padding: "1.2rem 3rem",
                display: "inline-block",
                fontSize: "1.1rem",
                fontWeight: "600",
                borderRadius: "50px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                transition: "all 0.3s ease",
                textDecoration: "none",
              }}
              to="/application-form"
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-2px)"
                e.currentTarget.style.boxShadow = "0 12px 28px rgba(0,0,0,0.3)"
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0)"
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.2)"
              }}
            >
              Přihlásit se do soutěže &#8594;
            </Link>
          </div>
        </div>
      </Container>
    </Layout>
  )
}
