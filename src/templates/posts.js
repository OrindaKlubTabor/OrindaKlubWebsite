import React from "react"
import Layout from "../components/layout"
import Container from "../components/container"
import { graphql, Link } from "gatsby"

export default class BlogList extends React.Component {
  render() {
    const posts = this.props.data.allContentfulPost.nodes
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage =
      currentPage - 1 === 1 ? "/blog" : "/blog/" + (currentPage - 1).toString()
    const nextPage = "/blog/" + (currentPage + 1).toString()
    const startCountIndex = numPages > 5 ? currentPage - 2 - 1 - isLast : 0
    const endCountIndex = numPages > 5 ? currentPage + 2 + isFirst : numPages
    return (
      <Layout>
        <Container>
          <h1>Všechny příspěvky</h1>
          {posts.map(node => (
            <Link className="post-link" to={`/${node.slug}`}>
              <div
                className="post"
                style={{ margin: "3rem 0" }}
                key={node.slug}
              >
                <h2 style={{ margin: "1rem 0" }}>{node.title}</h2>
                <div className="post-container">
                  <div className="post-text-container">
                    <p>
                      <strong>{node.createdAt}</strong> • {node.description}
                    </p>
                    <Link
                      className="post-link link-important"
                      to={`/${node.slug}`}
                    >
                      Zobrazit příspěvek &#8594;
                    </Link>
                  </div>

                  {node.thumbnail != null && (
                    <picture>
                      <source
                        srcset={node.thumbnail.fixed.srcSetWebp}
                        type="image/webp"
                      />
                      <source
                        srcset={node.thumbnail.fixed.srcSet}
                        type="image/jpeg"
                      />
                      <img src={node.thumbnail.fixed.src} alt={node.title} />
                    </picture>
                  )}
                </div>
              </div>
            </Link>
          ))}
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {isFirst ? (
              <span style={{ color: "transparent" }}>← Předchozí</span>
            ) : (
              <Link to={prevPage} rel="prev">
                ← Předchozí
              </Link>
            )}
            <div>
              {Array.from(
                { length: numPages },
                (_, i) =>
                  startCountIndex <= i &&
                  endCountIndex > i &&
                  (currentPage === i + 1 ? (
                    <Link
                      style={{
                        padding: "0 10px",
                        backgroundColor: "#002868",
                        color: "#fff",
                        borderRadius: 5,
                      }}
                      key={`pagination-number${i + 1}`}
                      to={`${i === 0 ? "/blog" : "/blog/" + (i + 1)}`}
                    >
                      {i + 1}
                    </Link>
                  ) : (
                    <Link
                      style={{ padding: "0 10px" }}
                      key={`pagination-number${i + 1}`}
                      to={`${i === 0 ? "/blog" : "/blog/" + (i + 1)}`}
                    >
                      {i + 1}
                    </Link>
                  ))
              )}
            </div>
            {isLast ? (
              <span style={{ color: "transparent" }}>Další →</span>
            ) : (
              <Link to={nextPage} rel="next">
                Další →
              </Link>
            )}
          </div>
        </Container>
      </Layout>
    )
  }
}

export const data = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allContentfulPost(
      limit: $limit
      skip: $skip
      sort: { fields: createdAt, order: DESC }
    ) {
      nodes {
        description
        createdAt(formatString: "D. MMMM YYYY", locale: "cs")
        slug
        title
        thumbnail {
          fixed(quality: 75, width: 200) {
            src
            srcSet
            srcSetWebp
          }
        }
      }
    }
  }
`
