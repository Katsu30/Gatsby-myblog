import React from "react"
import { Link, graphql } from "gatsby"
import styled from 'styled-components';

import Bio from "../Organisms/bio"
import Layout from "../Organisms/layout"
import SEO from "../Organisms/seo"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  return (
    <Layout location={ location } title={ siteTitle }>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />

      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        <hr />
        <footer>
          <Bio />
        </footer>
      </article>

      <BlogPostNavWithStyled>
        <BlogPostListWithStyled>
          <BlogPostListArticleWithStyled>
            { previous && (
              <Link to={ previous.fields.slug } rel="prev">
                ← { previous.frontmatter.title }
              </Link>
            )}
          </BlogPostListArticleWithStyled>
          <BlogPostListArticleWithStyled>
            { next && (
              <Link to={ next.fields.slug } rel="next">
                { next.frontmatter.title } →
              </Link>
            )}
          </BlogPostListArticleWithStyled>
        </BlogPostListWithStyled>
      </BlogPostNavWithStyled>

    </Layout>
  )
}

const BlogPostNavWithStyled = styled.nav`
  min-width: 100%;
`;

const BlogPostListWithStyled = styled.div`
  display: flex;
  flexWrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
`;

const BlogPostListArticleWithStyled = styled.div`
`;

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
