import React from "react"
import Layout from "../components/layout"
import Container from "../components/container"
import { StaticImage } from "gatsby-plugin-image"
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
  sectionTitle: {
    fontSize: "1.8rem",
    marginTop: "3rem",
    marginBottom: "1.5rem",
    color: "#002868",
    fontWeight: "700",
  },
  paragraph: {
    fontSize: "1.05rem",
    lineHeight: "1.7",
    color: "#4a4a4a",
    marginBottom: "1.5rem",
  },
  imageContainer: {
    margin: "2.5rem 0",
    borderRadius: "16px",
    overflow: "hidden",
  },
}

export default function About() {
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
        <title>O nás - Orinda Klub Tábor</title>
        <meta
          name="description"
          content="Partnerství měst Tábora a Orindy se datuje od roku 1997. Orinda Klub Tábor zaštiťuje každoročně studijní stipendijní program."
        />
      </Helmet>
      <Container>
        <div style={{ paddingTop: "2rem" }}>
          <div style={styles.heroSection}>
            <h1 style={styles.heroTitle}>O nás</h1>
          </div>

          <p style={styles.paragraph} className="responsive-text">
            Partnerství měst Tábora a Orindy se datuje od roku 1997, kdy
            Táborská setkání navštívila velká skupina Orinďanů. Následně Tábor
            navštívila další delegace z Orindy, doprovázená místním banjo bandem
            East Bay Banjo Club. V roce 1998 se vydala opačným směrem skupina z
            Tábora vedená tehdejším místostarostou Jiřím Návarou. O rok později
            byla další skupina z Tábora pozvána na Svatováclavské slavnosti.
            Oficiálně vznikl Orinda Klub Tábor v roce 2000. Dodnes funguje na
            bázi dobrovolnické činnosti a věnuje se rozvíjení již navázaného
            přátelství.
          </p>
          <p style={styles.paragraph} className="responsive-text">
            V roce 2003 působil v Táboře orindský učitel angličtiny Sean Nye,
            který vyučoval anglický jazyk na Táborském soukromém gymnáziu.
            Původní prezidentka Orinda Klubu, Dana Jančíková, předala
            prezidentství Radce Návarové v roce 2007, která klub vedla do roku
            2013, kdy odcestovala za hranice z pracovních důvodů. Dalším
            prezidentem byl zvolen jeden z bývalých studentů, Michal Vašek,
            který stojí v čele klubu i v současnosti.
          </p>
          <p style={styles.paragraph} className="responsive-text">
            Kromě rozvoje vztahů mezi partnerskými městy Táborem a Orindou
            zaštiťuje každoročně Orinda Klub semestrální studijní stipendijní
            program. Již od roku 2004 vycestuje jeden student z Tábora do
            Orindy, kde studuje jedno pololetí na místní střední škole Miramonte
            High School a bydlí v hostitelské rodině. Tento pobyt hradí
            partnerská organizace Orinda/Tabor Sister City Foundation.
          </p>

          <h2 style={styles.sectionTitle}>O Orindě</h2>

          <p style={styles.paragraph} className="responsive-text">
            Městečko Orinda, které leží nedaleko amerického San Francisca v
            Kalifornii, je v pořadí třetím partnerským městem Tábora. Ačkoliv se
            první kontakty mezi těmito městy zrodily již v roce 1995, oficiální
            partnerská smlouva byla podepsána až v roce 1999. I přes obrovskou
            vzdálenost mezi oběma městy navazování přátelství bylo od začátku
            velice intenzivní. V obou městech vznikly kluby, které mají za úkol
            rozvíjet navázané přátelství. V roce 2002 dokonce město Orinda
            uspořádalo dobročinný koncert a výtěžek darovalo na povodňový účet
            vodou zasaženého Tábora. Kromě studentských studijních pobytů
            proběhly i lékařské stáže. Na rozvoji vztahů partnerských měst se
            podílejí i Rotary klub a Lions klub.
          </p>
          <div style={styles.imageContainer}>
            <StaticImage
              src="../images/orinda-map.png"
              alt="Město Orinda"
              placeholder="blurred"
              layout="constrained"
              width={1000}
            />
          </div>
          <p style={styles.paragraph} className="responsive-text">
            Americká Orinda je naším nejvzdálenějším partnerským městem. Toto
            městečko se svými cca 17 000 obyvateli leží ve státě California
            těsně u San Francisca a je typem rodinného města s širokou nabídkou
            a rozsahem služeb. Přestože Orinda leží nedaleko přilehlých
            městských částí, i nadále si udržela atmosféru malého města.
          </p>
          <p style={styles.paragraph} className="responsive-text">
            Orinda je velice mladé město. Ačkoli toto území bylo osídleno již od
            konce 19. století, město bylo oficiálně založeno až v roce 1985.
            Popularita této oblasti vzrostla už v roce 1937, kdy byl otevřen
            tunel Caldecott, který zajišťuje rychlejší přístup k různým místům
            na západě, včetně San Francisca.
          </p>
          <p style={styles.paragraph} className="responsive-text">
            A jak vlastně vznikl název tohoto města? Plocha cca 32 km
            <sup>2</sup>, na níž dnes leží Orinda, byla součástí čtyř rozsáhlých
            ploch v době, kdy Alta California (Horní Kalifornie) patřila k
            Mexiku. Každý z nich nesl melodické španělské jméno, avšak Orinda
            byla pojmenována po Angličance. V roce 1876 se okresní šerif a
            velkostatkář William Walker Cameron oženil s Alice Mars Cameron.
            Alice měla velmi ráda poezii Katherine Fowler Philips, Angličanky
            17. století proslulé jako "The Matchless Orinda". Na její počest
            pojmenovali Cameronovi svůj domov Orinda Park.
          </p>
          <p style={styles.paragraph} className="responsive-text">
            Vhodná poloha města, tiché okolí, kultura, vynikající školy a
            blízkost k San Franciscu jej činí ideálním místem pro život i práci.
            Naleznete zde mnoho obchodů či restaurací. Co se týče kultury,
            můžete navštívit zrenovované divadlo Orinda Theatre, profesionální
            divadlo California Shakespeare, proslulé zejména inovativním pojetím
            her W. Shakespeara či komplex městské knihovny.
          </p>
          <p style={styles.paragraph} className="responsive-text">
            Centrem rekreačních aktivit je Orinda Community Center, které je
            určeno nejen pro děti, ale i pro dospělé, a to bez ohledu na okruh
            jejich zájmů. Soukromý Country Club se v Orindě stará o sportovní
            vyžití. Nejpopulárnějšími sporty jsou zde golf, tenis a plavání.
          </p>
          <p style={styles.paragraph} className="responsive-text">
            Vzhledem k velké vzdálenosti našeho partnerského města jsou vzájemné
            návštěvy méně časté, ale o to srdečnější. Účast East Bay Banjo Clubu
            na táborských slavnostech v roce 2005 vzbudila nadšení u všech
            posluchačů. Ryze americkou lidovou hudbu v předvedeném aranžmá a s
            takovým obsazením u nás žádný soubor nehraje.
          </p>

          <h2 style={styles.sectionTitle}>Kontakt</h2>
          <p style={styles.paragraph} className="responsive-text">
            Neváhejte nás kontaktovat na našem emailu{" "}
            <strong>
              <a
                href="mailto:info@orindaklub.cz"
                style={{
                  color: "#bf0a30",
                  fontWeight: "600",
                  textDecoration: "none",
                  borderBottom: "2px solid #bf0a30",
                }}
              >
                info@orindaklub.cz
              </a>
            </strong>
          </p>
          <p style={styles.paragraph} className="responsive-text">
            Můžese se také podívat na webové stránky měst Tábor a Orinda.
          </p>
          <a
            href="https://cityoforinda.org/"
            style={{
              color: "#bf0a30",
              fontWeight: "600",
              textDecoration: "none",
              borderBottom: "2px solid #bf0a30",
              marginRight: "1.5rem",
            }}
          >
            cityoforinda.org
          </a>
          <a
            href="https://taborcz.eu/"
            style={{
              color: "#bf0a30",
              fontWeight: "600",
              textDecoration: "none",
              borderBottom: "2px solid #bf0a30",
            }}
          >
            taborcz.eu
          </a>
        </div>
      </Container>
    </Layout>
  )
}
