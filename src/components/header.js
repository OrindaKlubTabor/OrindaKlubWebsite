import React from "react"
import { Helmet } from "react-helmet"
import PageHeader from "./page-header"

export default function Header(props) {
  return (
    <div>
      <Helmet>
        <title>{props.headerText} - Orinda Klub Tábor</title>
        <meta name="description" content={props.description} />
      </Helmet>
      <PageHeader title={props.headerText} />
    </div>
  )
}
