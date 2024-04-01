import React from 'react'
import Technology from './Technology'
import Project from './Project'
 import ContactBg from './ContactBg'
import Contact from './Contact'
import Services from './Services'
import Hero from './Hero'
const Main = () => {
  return (
    <div>
      <Hero></Hero>
      <Services/>
       <Technology/>
       <Project/>
        <ContactBg/>
        <Contact/>     
    </div>
  )
}

export default Main
