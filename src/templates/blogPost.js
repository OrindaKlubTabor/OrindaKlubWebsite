import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Container from "../components/container"
import Header from "../components/header"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"

const BlogPost = ({ data }) => {
  return (
    <Layout>
      <Container>
        <Link className="link-important" to="/blog">
          &#8592; Zpět na všechny příspěvky
        </Link>
        <Header
          headerText={data.contentfulPost.title}
          description={data.contentfulPost.description}
        ></Header>
        <p>{data.contentfulPost.createdAt}</p>
        {data.contentfulPost.thumbnail != null && (
          <div className="post-img-center">
            <img
              src={data.contentfulPost.thumbnail.file.url}
              alt={data.contentfulPost.title}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        )}
        <div style={{ marginTop: "3rem" }}>
          {documentToReactComponents(
            JSON.parse(data.contentfulPost.content.raw),
            {
              renderNode: {
                [BLOCKS.EMBEDDED_ASSET]: (node, children) => (
                  <img
                    style={{ maxWidth: "100%" }}
                    src={node?.data?.target?.fields?.file?.["en-US"]?.url}
                    alt={node?.data?.target?.fields?.title?.["en-US"]}
                  />
                ),
              },
            }
          )}
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
  query ($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      description
      createdAt(formatString: "D. MMMM YYYY, HH:mm", locale: "cs")
      content {
        raw
      }
      thumbnail {
        file {
          url
        }
      }
    }
  }
`
