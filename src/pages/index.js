import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { List } from "antd";

// data est le retour de la requete graphql
const IndexPage = ({data}) => (
  <Layout page="1">
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    < List
      itemLayout = "horizontal"
      dataSource = { data.allMarkdownRemark.edges }
      renderItem = { ({ node }) => ( 
        <List.Item> 
          <List.Item.Meta 
            title = {
              <span style = {{ fontSize: "2rem" }} >
              <Link to = { node.frontmatter.slug } > 
                { node.frontmatter.title } </Link> 
              </span>
            }
            description = { 
              <p style = {{
                  paddingTop: "16px",
                  lineHeight: "1.25"
                }} > 
                { node.excerpt } 
              </p>
            }
          /> 
        </List.Item>
        )
      }
  />

  </Layout>
)

// requête graphql simple lorsqu'on se sert des données dans une page gatsby
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: {
        fields: [frontmatter___date],
        order: DESC
      }) {
      edges {
        node {
          id
          html
          excerpt
          frontmatter {
            title
            slug
            date(formatString: "DD MMMM, YYYY")
          }
        }
      }
    }
  }
`

export default IndexPage
