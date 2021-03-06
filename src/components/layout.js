import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"
const Layout = ({ children }) => {
const data = useStaticQuery(graphql`
query SiteTitleQuery {
site {
siteMetadata {
title
}
}
}
`)
return (
<>
<div
style={{
margin: `0 auto`,
padding: `0 1.0875rem 1.45rem`,
}}
>
<main>{children}</main>
</div>
</>
)
}
Layout.propTypes = {
children: PropTypes.node.isRequired,
}
export default Layout