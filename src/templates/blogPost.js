import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Container from "../components/container"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"

const BlogPost = ({ data }) => {
  return (
    <Layout>
      <Container>
        <Link className="link-important" to="/blog">
          &#8592; Zpět na všechny příspěvky
        </Link>
        <h1>{data.contentfulPost.title}</h1>
        <p>Přidáno: {data.contentfulPost.createdAt}</p>
        <div style={{ marginTop: "3rem" }}>
          {documentToReactComponents(data.contentfulPost.content.json, {
            renderNode: {
              [BLOCKS.EMBEDDED_ASSET]: (node, children) => (
                <img
                  style={{ maxWidth: "100%" }}
                  src={node.data.target.fields.file["en-US"].url}
                  alt={node.data.target.fields.title["en-US"]}
                />
              ),
            },
          })}
          <Link className="link-important" to="/blog">
            &#8592; Zpět na všechny příspěvky
          </Link>
        </div>
      </Container>
    </Layout>
  )
}
export default BlogPost
export const pageQuery = graphql`
  query($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      createdAt(formatString: "D. MMMM YYYY, HH:mm", locale: "cs")
      content {
        json
      }
    }
  }
`