import React from 'react';
import {Link} from 'react-router-dom'
import Prathvi1 from '../../images/prathvi1.jpeg'
import Prathvi2 from '../../images/prathvi2.jpeg'
import './intro.css'

const resume="https://drive.google.com/file/d/10F5SUY1Fwj4viYgVZMmhup1f4ZUNtWG4/view?usp=share_link";

const Intro =()=>{

    return (
        
        <>
         <div className="container-fluid mt-5 bg-dark text-light ">

<div className="row py-5 " > 
 <div className="col-lg-6 col-md-6 col-md-12 bg-dark intro">
   <h1 className="text-success" >Hi , I am Prathvi Singh</h1>
   <div className="text-light"  >Third year student of CSE department </div>
   <div className="text-light"  >IIITDM Kurnool , Andhra Pradesh </div>


   <div className="mt-5 typewriter" >
 <h3> I like to do Coding and Consistently active on different Coding Platform and also doing some web development projects. 
   <br/>
  
    I enjoy working as part of a team ,but I am  equally Comfortable working on my own initiative.
    <br/>
    <br/>
 I am motivate and consistent self learner ,it can be prove if you see my <Link to="https://drive.google.com/file/d/10F5SUY1Fwj4viYgVZMmhup1f4ZUNtWG4/view?usp=share_link" >RESUME</Link>
  </h3> 

   </div> 

 

</div>

<div className="col-lg-6 col-md-6 col-md-12 ">
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100  rounded-circle card" src={Prathvi1} alt="First slide"  style={{height:"550px"}}/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100 rounded-circle card" src={Prathvi2} alt="Second slide"  style={{height:"550px"}}/>
          </div>
         
        </div>
        <a className="carousel-control-prev"  role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
       
      </div>

 </div>

</div> 

</div>  

        
        
        
        
        </>
 
        

    )

}

export default Intro;