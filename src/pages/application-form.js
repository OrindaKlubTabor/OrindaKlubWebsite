import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import Container from "../components/container"

export default function application() {
  return (
    <Layout>
      <Container>
        <Header headerText="Přihlášky do soutěže 2021"></Header>
        <h2>Obsah přihlášky</h2>
        <p>
          Motivační esej v anglickém jazyce v rozsahu přibližně 2 normostrany by
          měla obsahovat představení tebe, tvojí rodiny, koníčků a důvody proč
          chceš studovat na škole v USA, a jaká jsou tvoje očekávání od tohoto
          studijního pobytu. Doporučujeme ti přiložit alespoň jednu fotografii.
        </p>
        <h2>Kam odeslat přihlášku?</h2>
        <p>
          Eseje odesílejte ve formátu PDF na{" "}
          <strong>info@orindaklub.com</strong>
        </p>
        <p>Po přijetí emailu ti dáme vždy vědět, že jsme přihlášku přijali.</p>
        <p>
          Přihlašování do soutěže končí{" "}
          <strong>17. prosince 2021 ve 23:59</strong>
        </p>
      </Container>
    </Layout>
  )
}
