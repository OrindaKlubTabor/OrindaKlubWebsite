import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import TaborLogo from "../images/tabor-logo.png"
import OrindaLogo from "../images/orinda-logo.png"
import Hamburger from "hamburger-react"
import { useState } from "react"
import { Helmet } from "react-helmet"
import Popup from "./deadline-popup"

export default function Layout({ children }) {
  const [isOpen, setOpen] = useState(false)
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <div className="footer-parent">
      <script
        defer
        src="https://static.cloudflareinsights.com/beacon.min.js"
        data-cf-beacon='{"token": "3a6090d2ab3b4599b9f7344540de87c7"}'
      ></script>
      <Helmet>
        <title>Půlrok v USA plný zážitků na celý život - Orinda Klub</title>
        <meta
          name="description"
          content="Přihlaš se do soutěže 2024! Zajímá tě, jak se žije v Kalifornii a chtěl/a bys zkusit prozkoumat novou zemi na vlastní pěst? Orinda Klub Tábor pořádá jedinečnou soutěž pro středoškoláky z Tábora. V rámci programu budeš studovat na střední škole v Orindě."
        />
      </Helmet>
      <header className="navbar">
        <div className="navbar-top">
          <Link to="/">{data.site.siteMetadata.title}</Link>
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
        <div className={isOpen ? "links open" : "links"}>
          <Link to="/about">O nás</Link>
          <Link to="/blog">Aktuality</Link>
          <Link to="/our-students">Naši studenti</Link>
          <Link to="/faq">FAQ</Link>
          <Link
            style={{ background: "#002868", color: "white", padding: "1rem" }}
            to="/application-form"
          >
            Přihlásit se do soutěže
            {/* Chci vědět o další soutěži */}
          </Link>
        </div>
      </header>
      <Popup />
      {children}
      <footer>
        <div className="width-limiter">
          <div>
            <a href="https://cityoforinda.org/">
              <img src={OrindaLogo} alt="Orinda logo"></img>
            </a>
          </div>
          <div>
            <div style={{ padding: "0 0 2rem 0" }}>
              <a href="mailto:info@orindaklub.cz">info@orindaklub.cz</a>
              <a href="https://facebook.com/OrindaKlub">Facebook</a>
              <a href="https://www.instagram.com/orindaklubtabor">Instagram</a>
            </div>
            <div>
              &copy; {new Date().getFullYear()} {data.site.siteMetadata.title}
            </div>
          </div>
          <div>
            <a href="https://taborcz.eu/">
              <img src={TaborLogo} alt="Tábor logo"></img>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
