import Head from 'next/head'
import React from 'react'
import Layout from '../components/Layout'

const gallery = ({navopen,togglenav}) => {
  return (
  <Layout imageshown={true} navopen={navopen} togglenav={togglenav} imagetext={"Our Gallery"} image="../public/images/gallery.jpg">
     <Head>
        <title>Operation Serve-Gallery</title>
      </Head>
     <div className="page">
      
     <div className="images">
       <div>
       <div className="image">
        <div className="img"></div>
          <p className="details">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus enim fuga nesciunt tenetur sit veritatis!</p>
        </div>
        
       </div>
       
       <div>
       <div className="image">
        <div className="img"></div>
          <p className="details">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus enim fuga nesciunt tenetur sit veritatis!</p>
        </div>
        
       </div>
       <div>
       <div className="image">
        <div className="img"></div>
          <p className="details">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus enim fuga nesciunt tenetur sit veritatis!</p>
        </div>
        
       </div>
       <div>
       <div className="image">
        <div className="img"></div>
          <p className="details">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus enim fuga nesciunt tenetur sit veritatis!</p>
        </div>
        
       </div>

      </div>
     </div>

  </Layout>
  )
}

export default gallery