import Head from 'next/head'
import React from 'react'
import Layout from '../components/LAyout'

const gallery = ({navopen,togglenav}) => {
  return (
  <Layout imageshown={true} navopen={navopen} togglenav={togglenav} imagetext={"Our Gallery"} image="../public/images/gallery.jpg">
     <Head>
        <title>Operation Serve-Gallery</title>
      </Head>

  </Layout>
  )
}

export default gallery