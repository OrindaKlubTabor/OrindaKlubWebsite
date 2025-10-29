import React from "react"
import Layout from "../components/layout"
import Container from "../components/container"
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
  questionTitle: {
    fontSize: "1.4rem",
    marginTop: "2.5rem",
    marginBottom: "1rem",
    color: "#002868",
    fontWeight: "700",
  },
  paragraph: {
    fontSize: "1.05rem",
    lineHeight: "1.7",
    color: "#4a4a4a",
    marginBottom: "1.5rem",
  },
  contactBox: {
    background: "linear-gradient(135deg, #002868 0%, #004a9e 100%)",
    color: "white",
    padding: "2rem",
    borderRadius: "16px",
    textAlign: "center",
    marginTop: "3rem",
    marginBottom: "2rem",
    boxShadow: "0 8px 30px rgba(0, 40, 104, 0.3)",
  },
}

export default function faq() {
  return (
    <Layout>
      <style>
        {`
          .responsive-text {
            text-align: left;
          }
          @media (min-width: 768px) {
            .responsive-text {
              text-align: justify;
            }
          }
        `}
      </style>
      <Helmet>
        <title>FAQ - Nejčastější otázky - Orinda Klub Tábor</title>
        <meta
          name="description"
          content="Odpovědi na nejčastější otázky o studijním pobytu v Orindě, Kalifornie."
        />
      </Helmet>
      <Container>
        <div style={{ paddingTop: "2rem" }}>
          <div style={styles.heroSection}>
            <h1 style={styles.heroTitle}>FAQ - Nejčastější otázky</h1>
          </div>

          <h2 style={styles.questionTitle}>Kde jsou studenti ubytováni?</h2>
          <p style={styles.paragraph} className="responsive-text">
            Studenti jsou vždy ubytováni u hostitelských rodin vybíraných tak,
            aby co nejvíce vyhovovaly potřebám a zájmům studenta/ky.
          </p>

          <h2 style={styles.questionTitle}>
            V jakém termínu se uskutečňuje studijní pobyt?
          </h2>
          <p style={styles.paragraph} className="responsive-text">
            O výhře se zpravidla studenti dozvídají během února. Během dalších
            několika měsíců probíhá vyřizování potřebných náležitostí, mezi
            které patří i získání víza. Odlet je obvykle naplánován na začátek
            srpna, aby měl student/ka čas na aklimatizaci před začátkem školního
            roku. Návrat domů bývá zpravidla na konci ledna/začátku února
            příštího roku. Vše je velice individuální, záleží také na domluvě s
            hostitelskou rodinou.
          </p>

          <h2 style={styles.questionTitle}>Co všechno student/ka dostane?</h2>
          <p style={styles.paragraph} className="responsive-text">
            Výherci je hrazeno ubytování, jídlo i studium na střední škole.
            Výherce si zaplatí jen náklady na vízum (cca do 10 tis. Kč) a
            letenku. Letenku ale výherci proplatíme, tyto peníze využívá
            student/ka jako své kapesné na pobyt v USA. Celková peněžní hodnota
            výhry se pohybuje okolo 300 000 Kč.
          </p>

          <h2 style={styles.questionTitle}>
            Jak se v případě výhry řeší studium v ČR?
          </h2>
          <p style={styles.paragraph} className="responsive-text">
            Záleží na tom, z jaké školy student je. Někdo skládá komisionální
            zkoušky, někdo má individuální studijní plán a někomu stačí dopsat
            testy za celé pololetí. Vše je o domluvě s učiteli a ředitelem dané
            školy.
          </p>

          <h2 style={styles.questionTitle}>
            Jakou kvalitu má střední škola v Orindě?
          </h2>
          <p style={styles.paragraph} className="responsive-text">
            Miramonte High School je ve svém okolí jednou z nejlépe hodnocených
            škol, dokonce se pravidelně objevuje v žebříčku nejlepších státních
            středních škol v celé Kalifornii. Nadaní studenti pravidelně
            odcházejí na proslulé univerzity v USA (Harvard, Stanford, UC
            Berkeley apod.)
          </p>

          <h2 style={styles.questionTitle}>
            Má se student na koho obrátit v případě jakýchkoli problémů?
          </h2>
          <p style={styles.paragraph} className="responsive-text">
            Samozřejmostí je maximální podpora hostitelské rodiny, která přijímá
            studenta/ku jako svého syna/dceru. V případě např. jazykových nebo
            jiných vážnějších problémů jsou vždy připraveni pomoci mj. i dva
            česky mluvící členové Sister City Foundation. Radu mohou kdykoli
            poskytnout také čeští kolegové z táborského Orinda Klubu, s kterými
            bude student jistě v kontaktu (to samé platí i pro rodiče).
          </p>

          <h2 style={styles.questionTitle}>
            Jak častý kontakt s domovem se doporučuje?
          </h2>
          <p style={styles.paragraph} className="responsive-text">
            Vzhledem k chtěnému a očekávanému jazykovému progresu se klade důraz
            na to, aby student hovořil česky co nejméně. Doporučujeme si s
            rodinou volat přibližně jednou za 14 dní.
          </p>

          <h2 style={styles.questionTitle}>
            Můžu se do soutěže přihlásit, i když jsem minulý rok nevyhrál/a?
          </h2>
          <p style={styles.paragraph} className="responsive-text">
            No jasně! Spousta studentů se hlásí do soutěže několikrát. Když se
            přihlásíš několikrát, tak uvidíme, že ti na soutěži opravdu záleží.
          </p>

          <div style={styles.contactBox}>
            <p style={{ fontSize: "1.1rem", margin: 0, lineHeight: "1.6" }}>
              Pokud se budete chtít na cokoli zeptat, napište nám na tento
              email:{" "}
              <strong>
                <a
                  href="mailto:info@orindaklub.cz"
                  style={{
                    color: "white",
                    fontWeight: "600",
                    textDecoration: "none",
                    borderBottom: "2px solid white",
                  }}
                >
                  info@orindaklub.cz
                </a>
              </strong>
            </p>
          </div>
        </div>
      </Container>
    </Layout>
  )
}
