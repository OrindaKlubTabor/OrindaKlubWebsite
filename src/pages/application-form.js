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
            >
              Přidej se na náš mailing list &#8594;
            </Link>
          </>
        ) : (
          <>
            <h2>Obsah přihlášky</h2>
            <p>
              Motivační esej v anglickém jazyce v rozsahu přibližně
              2 normostrany by měla obsahovat představení tebe, tvojí rodiny a
              koníčků. Taky nezapomeň připsat důvody, proč chceš studovat na
              škole v USA, a jaká jsou tvoje očekávání od tohoto studijního
              pobytu. Dej si na eseji záležet, má totiž v celém procesu
              rozhodování velkou váhu.
            </p>
            <h2>Formátování</h2>
            <p>
              Nepřikládej prosím žádné fotografie ani do PDF, ani do přílohy.
              <h3>Nadpisy</h3>
              <ul>
                <li>14pt (pro titulní můžeš použít 28pt)</li>
                <li>tučné</li>
                <li>1.5 mezera</li>
                <li>Times New Roman</li>
              </ul>
              <h3>Odstavce</h3>
              <ul>
                <li>12pt</li>
                <li>1.5 mezera</li>
                <li>Times New Roman</li>
              </ul>
            </p>
            <h2>Kam odeslat přihlášku?</h2>
            <p>
              Eseje odesílejte ve formátu PDF na{" "}
              <strong>apply@orindaklub.cz</strong>
            </p>
            <p>
              Po přijetí emailu ti dáme vždy vědět, že jsme přihlášku přijali.
              Kdybys ale nedostal/a potvrzení do pár dnů, tak nám zkus napsat
              ještě jednou na email nebo na naši Facebook stránku.
            </p>
            <p>
              Deadline na odeslání eseje:{" "}
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
          </>
        )}
      </Container>
    </Layout>
  )
}
