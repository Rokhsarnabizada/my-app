import React,{useState, useEffect}from 'react'
import Menu from './Menu';

 function Navbar() {
const [menuOpen,setMenuOpen]=useState(false)
const [nav,setNav]=useState(false)

useEffect(()=>{
function activateNav(){
    let scrollposition = Window.pageYOffset
    if(scrollposition >200){
        setNav(true)
    }else if (scrollposition<10){
        setNav(false)
    }
}

window.addEventListener("scroll",activateNav)
})

const menuToggle=()=>{
    setMenuOpen(!menuOpen)
}


  return (

    <div className={`navbar ${nav && 'navbar-active'}`}>
      <div className='container'>
<a href='index.html' className='brand'>
    Website

</a>
<Menu menuOpen={menuOpen}/>
<div className='menu-btn'>
    <i className='fas fa-bars' onClick={menuToggle}>  </i>


</div>
      </div>
    </div>
  )
}
export default Navbar