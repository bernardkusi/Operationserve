import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


const Header = ({navopen,togglenav}) => {
  
  return (
    <header>
        <nav className={navopen?"open":""}>
          <Link href="/">
            <Image alt="alt" width={40} height={40} src={"/images/os-logo.jpg"}></Image>
          </Link>
          <ul>
            <Link href="/">Home</Link>
            <Link href="missions">Missions</Link>
            <Link href="missions#services">Services</Link>
            <Link href="/#history">History</Link>
            <Link href="/#leadership">Leadership</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/#contact">Contact</Link>
          </ul>

          <div className="bars" onClick={togglenav}>
            <div className="bar"></div>
          </div>
        </nav>
      </header>
  )
}

export default Header