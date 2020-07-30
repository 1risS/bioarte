import React from "react"
import Agenda from "../components/agenda"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BiotecnologiaHeader = styled.div`
  height: 10em;
  width: 100%;
`

const BiotecnologiaPage = () => {
  return (
    <Layout>
      <SEO title="Biotecnología" />
      <BiotecnologiaHeader>ACTIVIDADES BIOTECNOLOGIA</BiotecnologiaHeader>
      <Agenda />
    </Layout>
  )
}

export default BiotecnologiaPage
