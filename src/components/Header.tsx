import React from "react"
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <div className='box-border no-underline capitalize transition-[0.2s] duration-[linear] m-0 p-0 border-[none];
    font-family: "Roboto", sans-serif outline: none'>
      <header className = "flex items-center justify-between border-b-[length:var(--border)] fixed z-[1000] px-[7%] py-6 top-0 inset-x-0  background: var(--bg);">
        <Link to="#" className = "">
          <img className='h-16' src="src\assets\logo.png" alt="" />
        </Link>

        <nav className = "">
          <NavLink className = { () => 'text-[1.2rem] text-white mx-4 my-0 hover:text-[color:#d3ad7f] hover:border-b-[color:var(--main-color)] hover:pb-2 hover:border-b-[0.1rem] hover:border-solid'} to="#home">Home</NavLink>
          <a className='text-[1.2rem] text-white mx-4 my-0 hover:text-[color:#d3ad7f] hover:border-b-[color:var(--main-color)] hover:pb-2 hover:border-b-[0.1rem] hover:border-solid' href="#about">About</a>
          <a className='text-[1.2rem] text-white mx-4 my-0 hover:text-[color:#d3ad7f] hover:border-b-[color:var(--main-color)] hover:pb-2 hover:border-b-[0.1rem] hover:border-solid' href="#menu">Specialities</a>
          <a className='text-[1.2rem] text-white mx-4 my-0 hover:text-[color:#d3ad7f] hover:border-b-[color:var(--main-color)] hover:pb-2 hover:border-b-[0.1rem] hover:border-solid' href="#products">Products</a>
          <a className='text-[1.2rem] text-white mx-4 my-0 hover:text-[color:#d3ad7f] hover:border-b-[color:var(--main-color)] hover:pb-2 hover:border-b-[0.1rem] hover:border-solid' href="#review">Reviews</a>
          <a className='text-[1.2rem] text-white mx-4 my-0 hover:text-[color:#d3ad7f] hover:border-b-[color:var(--main-color)] hover:pb-2 hover:border-b-[0.1rem] hover:border-solid' href="#contact">Contact</a>
          <a className='text-[1.2rem] text-white mx-4 my-0 hover:text-[color:#d3ad7f] hover:border-b-[color:var(--main-color)] hover:pb-2 hover:border-b-[0.1rem] hover:border-solid' href="#blogs">Blogs</a>
        </nav>

        <div className = "flex">
          <div className = "flex text-white cursor-pointer text-[1.8rem] ml-8 hover:text-[color:#D3AD7F] fas fa-search" id = "search-btn"></div>
          <div className = "flex text-white cursor-pointer text-[1.8rem] ml-8 hover:text-[color:#D3AD7F]  fas fa-shopping-cart" id = "cart-btn"></div>
          <p className = "h-[22px] w-[22px] text-l flex items-center justify-center bg-[color:#D3AD7F] text-[white] ml-4 rounded-[22px]" id="cart-count">0</p>
          <div className = " flex text-white cursor-pointer text-[1.8rem] ml-8 hover:text-[color:#D3AD7F] fas fa-bars" id = "menu-btn"></div>
        </div>

        {/* <div className = "absolute w-[50rem] h-20 flex items-center origin-top scale-y-1 left-[7%] top-[115%]background: #fff">
          <input type="search" name="" id="search-box" placeholder="Search Here" />
          <label htmlFor="search-box" className="fas fa-search"></label>
        </div> */}



      </header>
    </div>
  )
}

export default Header;
