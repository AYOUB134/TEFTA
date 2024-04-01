import React from 'react'
import DetailService from './DetailService'
import Services from '../components/home/Services'
import Projects from '../components/home/Project'
import Hero from '../components/home/Hero'

const ServicesPage = ({ description, title }) => {
  return (
    <div>
       <Hero  title={title} description={description} />
      <DetailService></DetailService>
     <Services></Services>
     <Projects></Projects>
    </div>
  )
}

export default ServicesPage
