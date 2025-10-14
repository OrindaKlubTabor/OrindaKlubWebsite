import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import Container from "../components/container"
import { DEADLINE } from "../constants"
import { Link } from "gatsby"

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
        <Header headerText="Přihlášení do soutěže"></Header>
        {isClosed ? (
          <>
            <h2>Soutěž je ukončená</h2>
            <p>
              Nemusíš se ale strachovat, na podzim {nextFallYear} spouštíme
              soutěž znovu. Zatím si můžeš přečíst, co budeš k přihlášce
              potřebovat. Určitě si také přečti některý z předcházejících
              příspěkvů našich studentů z Kalifornie.
            </p>
            <p>
              Přidej se na náš mailing list, aby Ti neunikl další ročník
              soutěže!
            </p>
            <Link
              style={{
                background: "#002868",
                color: "white",
                padding: "1rem",
                margin: "1rem 0 0",
                display: "block",
                maxWidth: "20rem",
              }}
              to="https://forms.gle/2UtcZtYhXZrDQg5c6"
              target="_blank"
              rel="noopener noreferrer"
            >
              Přidej se na náš mailing list &#8594;
            </Link>
          </>
        ) : (
          <>
            <h2>Obsah přihlášky</h2>
            <p>
              Motivační esej v anglickém jazyce v rozsahu přibližně
              2 normostrany (3600 znaků) by měla obsahovat představení tebe,
              tvojí rodiny a koníčků. Taky nezapomeň připsat důvody, proč chceš
              studovat na škole v USA, jaká jsou tvoje očekávání od tohoto
              studijního pobytu a jak pomůžeš naopak rozvoji klubu ty. Dej si na
              eseji záležet, má totiž v celém procesu rozhodování velkou váhu.
            </p>
            <p>
              <strong>Nově můžeš také přiložit video</strong>, ve kterém se
              můžeš představit a říct, proč bys měl/a vyhrát právě ty. Video ale
              není povinné a nebudeš nijak penalizován/a, pokud ho nepřiložíš.
            </p>
            <h2>Jak odeslat přihlášku?</h2>
            <p>Eseje odevzdej přes Google formulář:</p>
            <Link
              style={{
                background: "#002868",
                color: "white",
                padding: "1rem",
                display: "inline-block",
                textDecoration: "none",
              }}
              to="https://forms.gle/QCJMYfQBB6ztNWsXA"
              target="_blank"
              rel="noopener noreferrer"
            >
              Otevřít přihlášku &#8594;
            </Link>
            <p>
              Formátování eseje, ani přikládání fotek není možné. Odstavce můžeš
              oddělovat prázdnými řádky. Doporučujeme ti, abys tvořil/a esej
              mimo odesílací formulář, předejdeš tak nechtěným ztrátám tvojí
              eseje. Esej vlož teprve až budeš odesílat přihlášku. Nech si prosím
              dostatečný čas na vyplnění přihlášky.
            </p>
            <p>
              Deadline na odeslání přihlášky:{" "}
              <strong>
                {new Intl.DateTimeFormat("cs-CZ", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                  hour: "numeric",
                  minute: "numeric",
                }).format(DEADLINE)}
              </strong>
            </p>
            <h2>Technické problémy</h2>
            <p>
              Pokud narazíš na jakékoliv technické problémy při vyplňování
              přihlášky, neváhej se na nás obrátit prostřednictvím emailu.
            </p>
          </>
        )}
      </Container>
    </Layout>
  )
}
