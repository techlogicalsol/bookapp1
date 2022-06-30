import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){
    return(
        <>

<nav className="navbar navbar-expand-md bg-dark navbar-dark">

  <NavLink className="navbar-brand" to="/">Digital Books</NavLink>

  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>

  
  <div className="collapse navbar-collapse" id="collapsibleNavbar">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <NavLink className="nav-link" to="/about">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/contact">Contact</NavLink>
      </li>
     
    </ul>

    <form class="form-inline">
			<div class="md-form my-0">
				<input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
        
			</div>
      <button className="btn btn-secondary ml-2">Search</button>
		</form>
  </div>
</nav>





        </>
    )
}

export default NavBar