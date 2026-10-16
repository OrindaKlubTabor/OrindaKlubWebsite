import React from "react"
import Layout from "../components/layout"
import Container from "../components/container"
import PageHeader from "../components/page-header"
import { DEADLINE } from "../constants"
import { Link } from "gatsby"

const styles = {
  sectionTitle: {
    fontSize: "1.5rem",
    marginTop: 0,
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
    textDecoration: "none",
    margin: "1rem 0",
  },
  deadlineBox: {
    background: "linear-gradient(135deg, #002868 0%, #004a9e 100%)",
    color: "white",
    padding: "2.5rem",
    borderRadius: "16px",
    textAlign: "center",
    marginBottom: "2.5rem",
    boxShadow: "0 8px 30px rgba(0, 40, 104, 0.3)",
  },
  closedSection: {
    textAlign: "center",
    maxWidth: "700px",
    margin: "0 auto",
    padding: "2.5rem 1.5rem",
  },
  closedTitle: {
    fontSize: "2rem",
    color: "#002868",
    fontWeight: "700",
    marginBottom: "1.5rem",
  },
  closedText: {
    fontSize: "1.1rem",
    lineHeight: "1.8",
    color: "#4a4a4a",
    marginBottom: "1.5rem",
  },
  mailingButton: {
    background: "linear-gradient(135deg, #002868 0%, #004a9e 100%)",
    color: "white",
    padding: "1.2rem 3rem",
    display: "inline-block",
    fontSize: "1.1rem",
    fontWeight: "600",
    borderRadius: "50px",
    boxShadow: "0 8px 20px rgba(0, 40, 104, 0.3)",
    transition: "all 0.3s ease",
    textDecoration: "none",
    marginTop: "1rem",
  },
}

export default function application() {
  const now = new Date()
  const isClosed = now >= DEADLINE
  const nextFallYear = DEADLINE.getFullYear() + 1
  return (
    <Layout>
      <script
        dangerouslySetInnerHTML={{
          __html: `gtag('event', 'conversion', {'send_to': 'AW-16450868697/DqNlCLqZ0o0ZENmrsaQ9'});`,
        }}
      />
      <Container>
        <div style={{ paddingTop: "2rem" }}>
          <PageHeader
            title="Přihlášení do soutěže"
          />

          {isClosed ? (
            <div style={styles.closedSection}>
              <h2 style={styles.closedTitle}>Soutěž je ukončená</h2>
              <p style={styles.closedText}>
                Nemusíš se ale strachovat, na podzim {nextFallYear} spouštíme
                soutěž znovu. Zatím si můžeš přečíst, co budeš k přihlášce
                potřebovat. Určitě si také přečti některý z předcházejících
                příspěvků našich studentů z Kalifornie.
              </p>
              <p style={styles.closedText}>
                Přidej se na náš mailing list, aby Ti neunikl další ročník
                soutěže!
              </p>
              <Link
                style={styles.mailingButton}
                to="https://forms.gle/2UtcZtYhXZrDQg5c6"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={e => {
                  e.currentTarget.style.transform = "translateY(-2px)"
                  e.currentTarget.style.boxShadow =
                    "0 12px 28px rgba(0, 40, 104, 0.4)"
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = "translateY(0)"
                  e.currentTarget.style.boxShadow =
                    "0 8px 20px rgba(0, 40, 104, 0.3)"
                }}
              >
                Přidej se na náš mailing list &#8594;
              </Link>
            </div>
          ) : (
            <>
              <h2 style={styles.sectionTitle}>Obsah přihlášky</h2>
              <p style={styles.paragraph}>
                Motivační esej v anglickém jazyce v rozsahu maximálně 2
                normostrany (3600 znaků s mezerami) by měla obsahovat
                představení tebe, tvojí rodiny a koníčků. Taky nezapomeň připsat
                důvody, proč chceš studovat na škole v USA, jaká jsou tvoje
                očekávání od tohoto studijního pobytu a jak pomůžeš naopak
                rozvoji klubu ty. Dej si na eseji záležet, má totiž v celém
                procesu rozhodování velkou váhu.
              </p>
              <p style={styles.paragraph}>
                <strong style={{ color: "#cb9b15", fontSize: "1.1rem" }}>
                  💡 Tip:
                </strong>{" "}
                <strong>Nově můžeš také přiložit video</strong>, ve kterém se
                můžeš představit a říct, proč bys měl/a vyhrát právě ty. Ve
                videu mluv v anglickém jazyce. Maximální délka videa je 2
                minuty. Video ale není povinné a nebudeš nijak penalizován/a,
                pokud ho nepřiložíš.
              </p>

              <h2 style={styles.sectionTitle}>Jak odeslat přihlášku?</h2>
              <p style={styles.paragraph}>
                Eseje odevzdej přes Google formulář:
              </p>
              <Link
                style={styles.primaryButton}
                to="https://forms.gle/PoLz9ik1v3uyWkyu8"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={e => {
                  e.currentTarget.style.transform = "translateY(-2px)"
                  e.currentTarget.style.boxShadow =
                    "0 12px 28px rgba(191, 10, 48, 0.4)"
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = "translateY(0)"
                  e.currentTarget.style.boxShadow =
                    "0 8px 20px rgba(191, 10, 48, 0.3)"
                }}
              >
                Otevřít přihlášku &#8594;
              </Link>
              <p style={styles.paragraph}>
                Formátování eseje, ani přikládání fotek není možné. Odstavce
                můžeš oddělovat prázdnými řádky. Doporučujeme ti, abys tvořil/a
                esej mimo odesílací formulář, předejdeš tak nechtěným ztrátám
                tvojí eseje. Esej vlož teprve až budeš odesílat přihlášku. Nech
                si prosím dostatečný čas na vyplnění přihlášky.
              </p>

              <div style={styles.deadlineBox}>
                <p
                  style={{
                    fontSize: "1rem",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    marginBottom: "1rem",
                    opacity: "0.9",
                  }}
                >
                  Deadline na odeslání přihlášky
                </p>
                <p style={{ fontSize: "1.8rem", fontWeight: "700", margin: 0 }}>
                  {new Intl.DateTimeFormat("cs-CZ", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                  }).format(DEADLINE)}
                </p>
              </div>

              <h2 style={styles.sectionTitle}>Technické problémy</h2>
              <p style={styles.paragraph}>
                Pokud narazíš na jakékoliv technické problémy při vyplňování
                přihlášky, neváhej se na nás obrátit prostřednictvím emailu na{" "}
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
              </p>
            </>
          )}
        </div>
      </Container>
    </Layout>
  )
}
