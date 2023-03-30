import React from 'react'

const Contact = () =>{

    return (

     <>
  <div class="container-fluid bg-light text-dark text-center mt-5" style={{height:"200px"}} >
   <h1>Contact Me</h1>
   <hr class="w-25 mx-auto pt-5"/>
    <div class="hello justify-content-center row ">
   
    <div class="px-5 email"><a href="mailto:prathvisingh1604@gmail.com" value="prathvisingh1604@gamil.com" style={{height:"40px"}}><i class="fa-solid fa-envelope fa-lg"></i></a>
    </div>
    <div class="px-5"><a href="https://www.linkedin.com/in//prathvi-singh-019813223"><img src="https://img.icons8.com/fluency/2x/linkedin.png" style={{height:"40px"}}/></a>
    </div>
    <div class="px-5"><a href="https://github.com//Prathvi-Singh"><img src="https://img.icons8.com/bubbles/2x/github.png" style={{height:"50px"}}/></a>
    </div>
    <div class="px-5 email"><a href="tel:+916397776826" value="prathvisingh1604@gamil.com" ><i class="fa-solid fa-phone fa-lg" style={{height:"40px"}}></i></a>
    </div>

    <div class="px-5"><a href="https://api.whatsapp.com/send?phone=+916397776826"><img src="https://img.icons8.com/color/2x/whatsapp.png" style={{height:"40px"}}/></a></div>
  </div>
   </div>

     
     
     
     
     </>

    )
}

export default Contact;