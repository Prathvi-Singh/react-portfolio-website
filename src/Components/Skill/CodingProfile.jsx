import React from 'react'
import {Link} from 'react-router-dom';
import Leetcode from '../../images/leetcode.png';
import Hackerrank from '../../images/hackerrank.png';
import GFG from '../../images/GFG.png';
import Codechef from '../../images/codechef.png';

const Coding=()=>{

   return(
    <>
    <div className="container-fluid bg-light my-5 ">
<h1 className="font-weight-bold text-dark text-center mt-5">Coding Profile</h1> 
<hr className="w-25 mx-auto pt-5"/>

<div className="row  pb-5 d-flex justify-content-around ">
    {/* <div className="col-lg-4 col-md-4 col-12 mt-3"> */}
        <div className="card mt-4" style={{width: "18rem"}}>
            <img className="card-img-top" src={Leetcode} alt="Card image cap"  style={{height :"200px"}}/>
            <div className="card-body">
              <h5 className="card-title">Leetcode</h5>
              <p className="card-text">800+ Problems Solved | 1800+ Rating</p>
              <Link  to="https://leetcode.com/Prathvi_Singh/" className="btn btn-primary">VIEW</Link> 
            </div>
          </div>
    {/* </div> */}

    {/* <div className="col-lg-4 col-md-4 col-12 mt-5"> */}
        <div className="card mt-4" style={{width: "18rem"}}>
            <img className="card-img-top" src={GFG} alt="Card image cap"  style={{height :"200px"}}/>
            <div className="card-body">
              <h5 className="card-title">GFG</h5>
             
              <p className="card-text">500+ Problems Solved | Rank 1 in Institute</p>
              <Link  to="https://auth.geeksforgeeks.org/user/singhprathvi1604/" className="btn btn-primary">VIEW</Link> 
            </div>
          </div>
    {/* </div> */}

    {/* <div className="col-lg-4 col-md-4 col-12 mt-5"> */}
        <div className="card mt-4"  style={{width: "18rem"}}>
            <img className="card-img-top" src={Codechef} alt="Card image cap"  style={{height :"200px"}}/>
            <div className="card-body">
              <h5 className="card-title">CodeChef</h5>
              <p className="card-text">3 Star | 1600+ Rating  </p>
              {/* <p className="card-text">Here you can write blog relative to different topic like movies , education etc  </p> */}
              <Link  to="https://www.codechef.com/users/prathvi_1604" className="btn btn-primary">VIEW</Link> 
            </div>
          </div>
   

    <div className="card mt-4"  style={{width: "18rem"}}>
            <img className="card-img-top" src={Hackerrank} alt="Card image cap"  style={{height :"200px"}}/>
            <div className="card-body">
              <h5 className="card-title">Hacker Rank</h5>
              
              <p className="card-text">5 Star in Problem Solving & Algorithms ,Python ,C++ </p>
              <Link  to="https://www.hackerrank.com/120cs0026" className="btn btn-primary">VIEW</Link> 
            </div>
          </div>
    </div>
    </div>

{/* </div> */}


 

    
    
    
    </>
   )

}

export default Coding;