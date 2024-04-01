import React from 'react'
import Portfolio from './Portfolio'
import Hero from '../components/home/Hero'

const PortfolioPage = ({ description, title }) => {
  return (
    <div>
      <Hero title={title} description={description}> </Hero>
      <Portfolio></Portfolio>
    </div>
  )
}

export default PortfolioPage
