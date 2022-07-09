import React from "react"
import logo1 from "./pic/f_logo.png"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='conatiner text-center top'>
          <div className='img'>
            <img src={logo1} style={{width: 100 , height: 80 }} alt='' />
          </div>
          <p>© 2022. All rights reserved by Akash Deep.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer
