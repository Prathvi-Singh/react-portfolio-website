import React from 'react'
import Leetcode from '../../images/leetcode.png';
import Hackerrank from '../../images/hackerrank.png';
import GFG from '../../images/GFG.png';
import Codechef from '../../images/codechef.png';

const Coding=()=>{

   return(
    <>
    <div class="container-fluid bg-light my-5 ">
<h1 class="font-weight-bold text-dark text-center mt-5">Coding Profile</h1> 
<hr class="w-25 mx-auto pt-5"/>

<div class="row  pb-5 d-flex justify-content-around ">
    {/* <div class="col-lg-4 col-md-4 col-12 mt-3"> */}
        <div class="card mt-4" style={{width: "18rem"}}>
            <img class="card-img-top" src={Leetcode} alt="Card image cap"  style={{height :"200px"}}/>
            <div class="card-body">
              <h5 class="card-title">Leetcode</h5>
              <p class="card-text">800+ Problems Solved | 1800+ Rating</p>
              <a href="https://leetcode.com/Prathvi_Singh/" class="btn btn-primary">VIEW</a>
            </div>
          </div>
    {/* </div> */}

    {/* <div class="col-lg-4 col-md-4 col-12 mt-5"> */}
        <div class="card mt-4" style={{width: "18rem"}}>
            <img class="card-img-top" src={GFG} alt="Card image cap"  style={{height :"200px"}}/>
            <div class="card-body">
              <h5 class="card-title">GFG</h5>
             
              <p class="card-text">500+ Problems Solved | Rank 1 in Institute</p>
              <a href="https://auth.geeksforgeeks.org/user/singhprathvi1604/" class="btn btn-primary">VIEW</a>
            </div>
          </div>
    {/* </div> */}

    {/* <div class="col-lg-4 col-md-4 col-12 mt-5"> */}
        <div class="card mt-4"  style={{width: "18rem"}}>
            <img class="card-img-top" src={Codechef} alt="Card image cap"  style={{height :"200px"}}/>
            <div class="card-body">
              <h5 class="card-title">CodeChef</h5>
              <p class="card-text">3 Star | 1600+ Rating  </p>
              {/* <p class="card-text">Here you can write blog relative to different topic like movies , education etc  </p> */}
              <a href="https://www.codechef.com/users/prathvi_1604" class="btn btn-primary">VIEW</a>
            </div>
          </div>
   

    <div class="card mt-4"  style={{width: "18rem"}}>
            <img class="card-img-top" src={Hackerrank} alt="Card image cap"  style={{height :"200px"}}/>
            <div class="card-body">
              <h5 class="card-title">Hacker Rank</h5>
              
              <p class="card-text">5 Star in Problem Solving & Algorithms ,Python ,C++ </p>
              <a href="https://www.hackerrank.com/120cs0026" class="btn btn-primary">VIEW</a>
            </div>
          </div>
    </div>
    </div>

{/* </div> */}


 

    
    
    
    </>
   )

}

export default Coding;