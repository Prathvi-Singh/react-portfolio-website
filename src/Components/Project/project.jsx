import React from 'react';
import Pic1 from '../../images/pic1.png'
import Pic2 from '../../images/pic2.png'
import Blogapp from '../../images/blogapp.png' 

const Project = () =>{
    return (
      
        <>
        <div class="container-fluid bg-light my-5">
    <h1 class="font-weight-bold text-dark text-center mt-5">Projects</h1> 
    <hr class="w-25 mx-auto pt-5"/>

    <div class="row pl-5 pb-5">
        <div class="col-lg-4 col-md-4 col-12 mt-3">
            <div class="card" style={{width: "18rem"}}>
                <img class="card-img-top" src={Pic1} alt="Card image cap"/>
                <div class="card-body">
                  <h5 class="card-title">Website(also work as complain box)</h5>
                  <p class="card-text">It is give information about collage like about club coordinators,sport coordinator ,department information</p>
                  <a href="#" class="btn btn-primary">VIEW</a>
                </div>
              </div>
        </div>

        <div class="col-lg-4 col-md-4 col-12 mt-5">
            <div class="card" style={{width: "18rem"}}>
                <img class="card-img-top" src={Pic2} alt="Card image cap"/>
                <div class="card-body">
                  <h5 class="card-title">Weather app</h5>
                  <p class="card-text">JS | Express.js | hbs | CSS | HTML | Boostrap | Weather api | Fontawesome</p>
                  <p class="card-text"> It fetch the current weather information from free Api</p>
                  <a href="#" class="btn btn-primary">VIEW</a>
                </div>
              </div>
        </div>

        <div class="col-lg-4 col-md-4 col-12 mt-5">
            <div class="card "  style={{width: "18rem"}}>
                <img class="card-img-top" src={Blogapp} alt="Card image cap"/>
                <div class="card-body">
                  <h5 class="card-title">Blogapp</h5>
                  <p class="card-text">React | Node.js | Express.js | Mongodb | HTML | CSS | boostrap  </p>
                  <p class="card-text">Here you can write blog relative to different topic like movies , education etc  </p>
                  <a href="https://eloquent-bublanina-811636.netlify.app/" class="btn btn-primary">VIEW</a>
                </div>
              </div>
        </div>
    </div>

    

   </div>  

        
        
        
        </>

    )
}

export default Project;