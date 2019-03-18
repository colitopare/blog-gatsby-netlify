import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import { List, Avatar, Divider } from "antd"

// sur cette page je vais utiliser graphql pour faire une requête dans un compoment
// il faut utiliser StaticQuery et graphql
// Et dans StaticQuery il y a query qui contient la requête 
// et render qui récupère les data et les affiche dans le JSX
const Bio = () => (
  <StaticQuery 
    query = {
      graphql`
        query {
          site {
            siteMetadata {
              author
              bio
              authorImage
            }
          }
        }
      `
    }
    render = {data => (
      <>
        <Divider orientation="left" > Author </Divider>
        < List.Item >
          <List.Item.Meta
            avatar = {
              < Avatar size={64} src = { data.site.siteMetadata.authorImage } />
            }
            title = { <Link to="/about"> Muriel </Link> }
            description = { data.site.siteMetadata.bio }
          />
        </List.Item>
      </>
    )}
  />


)


export default Bio