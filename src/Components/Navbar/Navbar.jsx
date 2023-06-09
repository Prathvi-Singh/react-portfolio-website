import React from 'react'
import {Link} from 'react-router-dom'

function Navbar(){

    return (
        <>
         <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-light">
        <a className="navbar-brand" href="https://drive.google.com/file/d/10F5SUY1Fwj4viYgVZMmhup1f4ZUNtWG4/view?usp=share_link">Prathvi</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/about">About<span className="sr-only">(current)</span></a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="https://leetcode.com/Prathvi_Singh/">Leetcode</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://auth.geeksforgeeks.org/user/singhprathvi1604/">GFG</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.codechef.com/users/prathvi_1604">CodeChef</a>
            </li> */}
          
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
        
        
        
        
        </>
    )
}

export default Navbar