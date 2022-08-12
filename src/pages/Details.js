import React from 'react'
import Header from '../parts/Header'
import Breadcrumb from '../components/Breadcrumb'
// import Hero from '../parts/Hero'
// import BrowseRoom from '../parts/HomePage/BrowseRoom'
// import JustArrived from '../parts/HomePage/JustArrived'
import Clients from '../parts/Clients'
import Sitemap from '../parts/Sitemap'
import Footer from '../parts/Footer'

export default function HomePage(props) {
  return (
    <>
    <Header theme="black"></Header>
    <Breadcrumb list={[
        { url: "/", name: "Home" },
        { url: "/categories/9321", name: "Office Room" },
        { url: "/categories/9321/Products/1234", name: "Details" }
    ]}></Breadcrumb>
    <Clients></Clients>
    <Sitemap></Sitemap>
    <Footer></Footer>
    </>
  )
}
