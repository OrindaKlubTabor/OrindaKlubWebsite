import React from "react"
import { Helmet } from "react-helmet"

export default function Header(props) {
  return (
    <div>
      <Helmet>
        <title>{props.headerText} - Orinda Klub Tábor</title>
      </Helmet>
      <h1>{props.headerText}</h1>
    </div>
  )
}
