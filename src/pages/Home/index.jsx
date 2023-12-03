import React from 'react'
import Hero from '../../components/Hero'
import Furniture from '../../components/Furniture'
import Projects from '../../components/Projects'
import Feature from '../../components/Feature'
import Impress from '../../components/Impress'
import OurBlog from '../../components/OurBlog'
import ClietsLogo from '../../components/ClientsLogo'

function Home() {
  return (
    <>
        <Hero/>
        <Furniture/>
        <Projects/>
        <Feature/>
        <Impress/>
        <OurBlog/>
        <ClietsLogo/>
    </>
  )
}

export default Home