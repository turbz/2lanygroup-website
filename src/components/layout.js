import * as React from "react"
import Footer from "./footer/footer"
import Header from "./header/header"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
