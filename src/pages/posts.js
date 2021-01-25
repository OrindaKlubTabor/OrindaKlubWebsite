import React from "react"
import Layout from "../components/layout"
import Container from "../components/container"
import { graphql, Link } from "gatsby"

export default function Posts({ data }) {
  return (
    <Layout>
      <Container>
        <h1>Všechny příspěvky</h1>
        {data.allContentfulPost.nodes.map(post => (
          <div style={{ margin: "3rem 0" }} key={post.slug}>
            <h2 style={{ margin: "1rem 0" }}>{post.title}</h2>
            <span>{post.createdAt}</span>
            <br></br>
            <br></br>
            <Link className="link-important" to={`/${post.slug}`}>Zobrazit příspěvek &#8594;</Link>
          </div>
        ))}
      </Container>
    </Layout>
  )
}

export const data = graphql`
  {
    allContentfulPost(sort: { fields: createdAt, order: DESC }) {
      nodes {
        title
        slug
        createdAt(fromNow: true, locale: "cs")
      }
    }
  }
`
