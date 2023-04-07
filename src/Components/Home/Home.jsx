import React from 'react'
import Navbar from '../Navbar/Navbar'
import Intro from '../Intro/Intro.jsx'
import Skill from '../Skill/skill.jsx'
import Project from '../Project/project.jsx'
import Footer from '../Footer/footer'
import Contact from '../Contact/Contact.jsx'
import Coding from '../Skill/CodingProfile.jsx'

const Home =()=>{

    return (
     <>
      <Navbar></Navbar>
     <div className="container-fluid">
    
     <Intro></Intro>
     <Contact></Contact>
     <Project></Project>
     <Skill></Skill>
     <Coding></Coding>
     
     </div>
     <Footer></Footer>
     </>

    )
}

export default Home;