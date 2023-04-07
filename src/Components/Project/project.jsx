import React from 'react';
import {Link} from 'react-router-dom'
import Pic1 from '../../images/pic1.png'
import Pic2 from '../../images/pic2.png'
import Blogapp from '../../images/blogapp.png' 
import Course from '../../images/course.jpg'
import './project.css'

const Project = () =>{
    return (
      
        <>
        <div className="container-fluid bg-light my-5 card">
    <h1 className="font-weight-bold text-dark text-center mt-5">Projects</h1> 
    <hr className="w-25 mx-auto pt-5"/>

    <div className="row  pb-5 d-flex justify-content-around">
        {/* <div className="col-lg-4 col-md-4 col-12 mt-3"> */}
            <div className="card mt-4" style={{width: "18rem"}}>
                <img className="card-img-top" src={Pic1} alt="Card image cap"/>
                <div className="card-body">
                  <h5 className="card-title">Website(also work as complain box)</h5>
                  <p className="card-text">It is give information about collage like about club coordinators,sport coordinator ,department information</p>
                  <p className="card-text">here any student can write their thought or complaint and also share document</p>
                  <Link to="https://github.com/Prathvi-Singh/Django-project" className="btn btn-primary">VIEW</Link> 
                </div>
              </div>
        {/* </div> */}

        {/* <div className="col-lg-4 col-md-4 col-12 mt-5"> */}
            <div className="card mt-4" style={{width: "18rem"}}>
                <img className="card-img-top" src={Pic2} alt="Card image cap"/>
                <div className="card-body">
                  <h5 className="card-title">Weather app</h5>
                  <p className="card-text">JS | Express.js | hbs | CSS | HTML | Boostrap | Weather api | Fontawesome</p>
                  <p className="card-text"> It fetch the current weather information from free Api</p>
                  <p className="card-text"> you can find current weather infomation of any place at any time</p>
                  <Link to="https://github.com/Prathvi-Singh/Weather-App" className="btn btn-primary">VIEW</Link> 
                </div>
              </div>
        {/* </div> */}

        {/* <div className="col-lg-4 col-md-4 col-12 mt-5"> */}
            <div className="card mt-4"  style={{width: "18rem"}}>
                <img className="card-img-top" src={Blogapp} alt="Card image cap"/>
                <div className="card-body">
                  <h5 className="card-title">Blogapp</h5>
                  <p className="card-text">React | Node.js | Express.js | Mongodb | HTML | CSS | boostrap  </p>
                  <p className="card-text">Here you can write blog relative to different topic like movies , education etc  </p>
                  <p className="card-text">You can create ,edit ,delete the blog ,and other can view and comments on it</p>
                  <Link to="https://ps-blogapp.netlify.app/" className="btn btn-primary">VIEW</Link> 
                </div>
              </div>


              <div className="card mt-4"  style={{width: "18rem"}}>
                <img className="card-img-top" src={Course} alt="Card image cap"/>
                <div className="card-body">
                  <h5 className="card-title">CourseManagement</h5>
                  <p className="card-text">React | Node.js | Express.js | Mongodb | HTML | CSS | boostrap  </p>
                  <p className="card-text">It deliver the information according to designstion like student (different branch and year) ,faculty ,admin. </p>
                  <p className="card-text">Any Institute can use to manage courses , grade for the students  </p>
                  <Link to="https://ps-coursemanagement.netlify.app/" className="btn btn-primary">VIEW</Link> 
                </div>
              </div>

        </div>
    {/* </div> */}

    

    

   </div>  

        
        
        
        </>

    )
}

export default Project;
