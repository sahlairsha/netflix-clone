import React from 'react'
// eslint-disable-next-line
import nav from './NavBar.css'
function NavBar() {
  return (
    <nav>
    < div className='navbar'>
      <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix Logo" />
      <div className='homebar'>

        <li className='current'> <a className='link' href="/">Home</a></li>
         <li><a className='link' href="/">TV Shows</a></li>
       <li> <a className='link' href="/">Movies</a></li>
       <li> <a className='link' href="/">New & Popular</a></li>
      <li>  <a className='link' href="/">My List</a></li>
       <li> <a className='link' href="/">Browse my Languages</a> </li>

      </div>
      <div className="side-bar">
        <button className='searchbar'></button>
      <img  className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar" />
      </div>
    </div>
    </nav>
  )
}

export default NavBar
