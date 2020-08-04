import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ExcibicionHeader = styled.div`
  height: 10em;
  width: 100%;
`

const ExcibicionPage = () => {
  return (
    <Layout>
      <SEO title="Excibición" />
      <ExcibicionHeader>EXCIBICION</ExcibicionHeader>
    </Layout>
  )
}

export default ExcibicionPage
