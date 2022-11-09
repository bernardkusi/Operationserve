import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


const Header = ({navopen,togglenav}) => {
  
  return (
    <header>
        <nav className={navopen?"open":""}>
          <Link onClick={()=>togglenav(false)} href="/">
            <Image alt="alt" width={40} height={40} src={"/images/os-logo.jpg"}></Image>
          </Link>
          <ul>
            <Link onClick={()=>togglenav(false)} href="/">Home</Link>
            <Link onClick={()=>togglenav(false)} href="missions">Missions</Link>
            <Link onClick={()=>togglenav(false)} href="missions#services">Services</Link>
            <Link onClick={()=>togglenav(false)} href="/#history">History</Link>
            <Link onClick={()=>togglenav(false)} href="/#leadership">Leadership</Link>
            <Link onClick={()=>togglenav(false)} href="/gallery">Gallery</Link>
            <Link onClick={()=>togglenav(false)} href="/#contact">Contact</Link>
          </ul>

          <div className="bars" onClick={togglenav}>
            <div className="bar"></div>
          </div>
        </nav>
      </header>
  )
}

export default Header