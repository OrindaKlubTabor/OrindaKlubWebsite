import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import Container from "../components/container"
import { Link } from "gatsby"

export default function application() {
  return (
    <Layout>
      <Container>
        <Header headerText="Přihlášení do soutěže"></Header>
        {/*<h2>Soutěž 2022 je ukončená</h2>
        <p>
          Nemusíš se ale strachovat, na podzim 2023 spouštíme soutěž znovu.
          Zatím si můžeš přečíst, co budeš k přihlášce potřebovat. Určitě si
          také přečti některý z předcházejících příspěkvů našich studentů z
          Kalifornie.
        </p>
        <p>
          Přidej se na náš mailing list, aby Ti neunikl další ročník soutěže!
        </p>
        <Link
          style={{
            background: "#002868",
            color: "white",
            padding: "1rem",
            margin: "1rem 0 0",
            display: "block",
            maxWidth: "25rem",
          }}
          to="https://forms.gle/ey149oGRc99eiSBb8"
        >
          Dejte mi vědět před začátkem další soutěže &#8594;
        </Link> */}
        <h2>Obsah přihlášky</h2>
        <p>
          Motivační esej v anglickém jazyce v rozsahu přibližně 2 normostrany by
          měla obsahovat představení tebe, tvojí rodiny a koníčků. Taky
          nezapomeň připsat důvody, proč chceš studovat na škole v USA, a jaká
          jsou tvoje očekávání od tohoto studijního pobytu. Doporučujeme ti
          přiložit alespoň jednu fotografii. Dej si na eseji záležet, má totiž v
          celém procesu rozhodování velkou váhu.
        </p> 
        <h2>Kam odeslat přihlášku?</h2>
        <p>
          Eseje odesílejte ve formátu PDF na{" "}
          <strong>orindaklub@gmail.com</strong>
        </p>
        <p>
          Po přijetí emailu ti dáme vždy vědět, že jsme přihlášku přijali.
          Kdybys ale nedostal/a potvrzení do pár dnů, tak nám zkus napsat ještě
          jednou na email nebo na naši Facebook stránku.
        </p>
        <p>
          Přihlašování do soutěže končí{" "}
          <strong>v neděli 17. prosince 2023 ve 23:59</strong>
        </p>
      </Container>
    </Layout>
  )
}
