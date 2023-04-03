import React from 'react'
import {Link} from 'react-router-dom'

function Navbar(){

    return (
        <>
         <nav class="navbar navbar-expand-lg navbar-dark bg-dark text-light">
        <a class="navbar-brand" href="https://drive.google.com/file/d/10F5SUY1Fwj4viYgVZMmhup1f4ZUNtWG4/view?usp=share_link">Prathvi</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/about">About<span class="sr-only">(current)</span></a>
            </li>
            {/* <li class="nav-item">
              <a class="nav-link" href="https://leetcode.com/Prathvi_Singh/">Leetcode</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://auth.geeksforgeeks.org/user/singhprathvi1604/">GFG</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://www.codechef.com/users/prathvi_1604">CodeChef</a>
            </li> */}
          
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
        
        
        
        
        </>
    )
}

export default Navbar