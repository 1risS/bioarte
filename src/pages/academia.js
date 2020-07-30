import React from "react"
import Agenda from "../components/agenda"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AcademiaHeader = styled.div`
  height: 10em;
  width: 100%;
`

const AcademiaPage = () => {
  return (
    <Layout>
      <SEO title="Academia" />
      <AcademiaHeader>ACTIVIDADES ACADEMIA</AcademiaHeader>
      <Agenda />
    </Layout>
  )
}

export default AcademiaPage
