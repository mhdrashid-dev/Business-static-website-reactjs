import React from 'react'
import About from './Components/About'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Question from './Components/Question'
import Services from './Components/Services'
import Team from './Components/Team'

function Webpage() {
  return (
    <div>
      <Home></Home>
      <About></About>
      <Services></Services>
      <Team></Team>
      <Question></Question>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default Webpage
