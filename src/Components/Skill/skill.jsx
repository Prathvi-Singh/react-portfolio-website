import React from 'react'
import './skill.css'

const Skill=()=>{

     return (
       
        <>
        <div className="container bg-dark mb-5 rounded card">
    <h1 className="font-weight-bold text-center text-light pt-3">Skill</h1>
    <hr className="w-25 mx-auto pt-5"/>
     
    <div className="container ">

      <div className="row pb-5 d-flex justify-content-around">
          {/* <div className="col-lg-4 col-md-4 col-12"> */}
              <div className="card  mb-5 box" style={{width: "18rem"}}>
                 
                  <div className="card-body">
                    <h5 className="card-title">Front End</h5>
                   
                    <button type="button" className="btn btn-outline-danger mx-3 my-3">HTML</button>
                    <button type="button" className="btn btn-outline-dark mx-3 my-3" >REACT JS</button>
                    <button type="button" className="btn btn-outline-secondary">JAVASCRIPT</button>
                    <button type="button" className="btn btn-outline-success mx-3 my-3">CSS</button>
                    <button type="button" className="btn btn-outline-info mx-3 my-3">BOOSTRAP</button>
                
                  </div>
                </div>
          {/* </div> */}
          
          {/* <div className="col-lg-4 col-md-4 col-12"> */}
              <div className="card  mb-5" style={{width: "18rem"}}>
                 
                  <div className="card-body">
                    <h5 className="card-title">BACK END</h5>
                    <button type="button" className="btn btn-outline-success mx-3 my-3">Node JS</button>
                
                    <button type="button" className="btn btn-outline-warning mx-3 my-3">ExpressJs</button>
                    <button type="button" className="btn btn-outline-dark mx-3 my-3" >SQL</button>
                    <button type="button" className="btn btn-outline-danger mx-3 my-3">MONGODB</button>
                    <button type="button" className="btn btn-outline-info mx-3 my-3">php</button>
                    <button type="button" className="btn btn-outline-secondary">Mongoose</button>
                  </div>
                </div>
          {/* </div> */}
          {/* <div className="col-lg-4 col-md-4 col-12"> */}
              <div className="card mb-5" style={{width: "18rem"}}>
                 
                  <div className="card-body">
                    <h5 className="card-title">Others</h5>
                    <button type="button" className="btn btn-outline-success mx-3 my-3">C</button>
                   
                    <button type="button" className="btn btn-outline-warning mx-2 my-3">C++</button>
                    
                    <button type="button" className="btn btn-outline-info mx-1 my-3">Python</button>
                    <button type="button" className="btn btn-outline-danger mx-1 my-3">java</button>
                    <button type="button" className="btn btn-outline-dark mx-1 my-3">Pandas</button>
              
                    <button type="button" className="btn btn-outline-secondary ">numpy</button>
                    <button type="button" className="btn btn-outline-warning mx-2 my-3">Django</button>
                    <button type="button" className="btn btn-outline-info mx-2 my-3">Matplotlib</button>
                  </div>
                </div>
          {/* </div> */}
      </div>
    </div>
 
   </div>

        
        
        
        </>
    

     )

}

export default Skill;