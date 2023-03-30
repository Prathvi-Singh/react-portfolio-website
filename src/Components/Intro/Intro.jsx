import React from 'react';
import {Link} from 'react-router-dom'
import Prathvi1 from '../../images/prathvi1.jpeg'
import Prathvi2 from '../../images/prathvi2.jpeg'

const resume="https://drive.google.com/file/d/10F5SUY1Fwj4viYgVZMmhup1f4ZUNtWG4/view?usp=share_link";

const Intro =()=>{

    return (
        
        <>
         <div class="container-fluid mt-5 bg-dark text-light">

<div class="row py-5" > 
 <div class="col-lg-6 col-md-6 col-md-12">
   <h1 class="text-success" >Hi , I am Prathvi Singh</h1>
   <div class="text-light"  >Third year student of CSE department </div>
   <div class="text-light"  >IIITDM Kurnool , Andhra Pradesh </div>


   <div class="mt-5 typewriter" >
 <h3> I like to do Coding and Consistently active on different Coding Platform and also doing some web development projects. 

  
    I enjoy working as part of a team ,but I am  equally Comfortable working on my own initiative.

 I am motivate and consistent self learner ,it can be prove if you see my <a href="https://drive.google.com/file/d/10F5SUY1Fwj4viYgVZMmhup1f4ZUNtWG4/view?usp=share_link" >RESUME</a>
  </h3> 

   </div> 

 

</div>

<div class="col-lg-6 col-md-6 col-md-12">
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100  rounded-circle" src={Prathvi1} alt="First slide"  style={{height:"550px"}}/>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100 rounded-circle" src={Prathvi2} alt="Second slide"  style={{height:"550px"}}/>
          </div>
         
        </div>
        <a class="carousel-control-prev"  role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
       
      </div>

 </div>

</div> 

</div>  

        
        
        
        
        </>
 
        

    )

}

export default Intro;