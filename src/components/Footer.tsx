import React from "react"

function Footer() {
  return (
    <div className="text-center background: var(--black)">
        <div className="px-0 py-4">
            <a href="#" className="text-[2rem] h-20 w-20 leading-[5rem] text-white border-[length:var(--border)] m-[0.3rem] rounded-[50%] hover:bg-[color:var(--main-color)] hover:text-[color:var(--black)] hover:scale-110 fab fa-facebook-f"></a>
            <a href="#" className="text-[2rem] h-20 w-20 leading-[5rem] text-white border-[length:var(--border)] m-[0.3rem] rounded-[50%] hover:bg-[color:var(--main-color)] hover:text-[color:var(--black)] hover:scale-110 fab fa-twitter"></a>
            <a href="#" className="text-[2rem] h-20 w-20 leading-[5rem] text-white border-[length:var(--border)] m-[0.3rem] rounded-[50%] hover:bg-[color:var(--main-color)] hover:text-[color:var(--black)] hover:scale-110 fab fa-instagram"></a>
            <a href="#" className="text-[2rem] h-20 w-20 leading-[5rem] text-white border-[length:var(--border)] m-[0.3rem] rounded-[50%] hover:bg-[color:var(--main-color)] hover:text-[color:var(--black)] hover:scale-110 fab fa-linkedin"></a>
            <a href="#" className="text-[2rem] h-20 w-20 leading-[5rem] text-white border-[length:var(--border)] m-[0.3rem] rounded-[50%] hover:bg-[color:var(--main-color)] hover:text-[color:var(--black)] hover:scale-110 fab fa-pinterest"></a>
        </div>
        <div className="links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#menu">Specialities</a>
            <a href="#products">Products</a>
            <a href="#review">Reviews</a>
            <a href="#contact">Contact Us</a>
            <a href="#blogs">Blogs</a>
        </div>
        <div className="credits"> Developed by <span>Pseudo</span> | All Rights Reserved</div>
    </div>
  )
}

export default Footer;
