import React from 'react'
import Header from '../parts/Header'
import Breadcrumb from '../components/Breadcrumb'

import ProductDetails from '../parts/Details/ProductDetails'
import Suggestion from '../parts/Details/Suggestion'


import Sitemap from '../parts/Sitemap'
import Footer from '../parts/Footer'

export default function HomePage() {
  return (
    <>
    <Header theme="black"></Header>
    <Breadcrumb list={[
        { url: "/", name: "Home" },
        { url: "/categories/9321", name: "Office Room" },
        { url: "/categories/9321/Products/1234", name: "Details" }
    ]}></Breadcrumb>
    <ProductDetails></ProductDetails>
    <Suggestion></Suggestion>
    <Sitemap></Sitemap>
    <Footer></Footer>
    </>
  )
}
