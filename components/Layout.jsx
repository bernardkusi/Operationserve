import Image from 'next/image'
import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Layout = ({children,imageshown,imagetext,image,navopen,togglenav}) => {
  return (
    <>
    <Header navopen={navopen} togglenav={togglenav}/>
    <main>
    {imageshown && (<div className="pageimage">
      {image && <Image  src={"/images/gallery.jpg"} alt="pageimage" layout="fill" objectFit='cover'/>}
    <p className="text">{imagetext && imagetext}</p>
    </div>)}
    {children}
    <div className="pagebottom"></div>
    </main>
    <Footer  navopen={navopen} togglenav={togglenav}/>
    </>
  )
}

export default Layout