import React, { useEffect } from "react"
import Agenda from "../components/agenda"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Loadable from "@loadable/component"
import { useCookies } from "react-cookie"

const LoadableMapa = Loadable(() => import("../components/mapa"))

const AcademiaHeader = styled.div`
  height: 10em;
  width: 100%;
`

const AcademiaPage = () => {
  const [cookies, setCookie] = useCookies(["AcademiaVisited"])

  useEffect(() => {
    console.log("visito academia?", cookies.AcademiaVisited)
    setCookie("AcademiaVisited", true, { path: "/" })
  }, [])

  return (
    <Layout>
      <SEO title="Academia" />
      <AcademiaHeader>ACTIVIDADES ACADEMIA</AcademiaHeader>
      <Agenda />
      <LoadableMapa />
    </Layout>
  )
}

export default AcademiaPage
