import React from 'react'
import Navbar from '../Navbar/Navbar'
import Intro from '../Intro/Intro.jsx'
import Skill from '../Skill/skill.jsx'
import Project from '../Project/project.jsx'
import Footer from '../Footer/footer'
import Contact from '../Contact/Contact.jsx'

const Home =()=>{

    return (
     <>
     <Navbar></Navbar>
     <Intro></Intro>
     <Contact></Contact>
     <Project></Project>
     <Skill></Skill>
    
     <Footer></Footer>
     
     </>

    )
}

export default Home;