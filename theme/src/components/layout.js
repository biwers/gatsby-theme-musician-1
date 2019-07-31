/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from "react"
import { Global } from "@emotion/core"
import { ColorMode, Styled, jsx } from "theme-ui"

import SEO from "./seo"
import Header from "./header"
import Footer from "./footer"
import SkipLink from "./skip-link"

const Layout = props => {
  return (
    <Styled.root>
      <SEO
        url={props.hasOwnProperty("location") ? props.location.href : null}
      />
      <ColorMode />
      <Global
        styles={{
          "*": {
            boxSizing: "border-box",
          },
          body: {
            margin: 0,
          },
          img: {
            maxWidth: "100%",
            height: "auto",
          },
        }}
      />
      <SkipLink>Skip to content</SkipLink>
      <Header location={props.location} />
      {props.children}
      <Footer />
    </Styled.root>
  )
}

export default Layout
