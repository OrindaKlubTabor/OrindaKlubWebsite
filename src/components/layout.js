import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import TaborLogo from "../images/tabor-logo.png"
import OrindaLogo from "../images/orinda-logo.png"

export default function Layout({ children }) {
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
      <header>
        <Link to="/">{data.site.siteMetadata.title}</Link>
        <Link to="/about">O nás</Link>
        <Link to="/our-students">Naši studenti</Link>
        <Link to="/faq">FAQ</Link>
        <Link
          style={{ background: "#002868", color: "white", padding: "1rem" }}
          to="/"
        >
          Přihlásit se do soutěže
        </Link>
      </header>
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
              <a href="mailto:info@orindaklub.com">info@orindaklub.com</a>
              <a href="https://facebook.com/OrindaKlub">Facebook</a>
              <a href="https://facebook.com/OrindaKlub">Instagram</a>
            </div>
            <div>
              &copy; {new Date().getFullYear()} {data.site.siteMetadata.title}
            </div>
          </div>
          <div>
            <a href="https://taborcz.eu/">
              <img src={TaborLogo} alt="Tabor logo"></img>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
