import React from 'react'
import Header from '../parts/Header'
import Breadcrumb from '../components/Breadcrumb'

import Sitemap from '../parts/Sitemap'
import Footer from '../parts/Footer'
import ShoppingCart from '../parts/Cart/ShoppingCart'
import ShippingDetails from '../parts/Cart/ShippingDetails'

export default function HomePage() {
  return (
    <>
    <Header theme="black"></Header>
    <Breadcrumb list={[
        { url: "/", name: "Home" },
        { url: "/cart", name: "Shopping Cart" },
    ]}></Breadcrumb>

    <section className="md:py-16">
  <div className="container mx-auto px-4">
    <div className="flex -mx-4 flex-wrap">
    <ShoppingCart></ShoppingCart>
    <ShippingDetails></ShippingDetails>
    </div>
  </div>
</section>

    <Sitemap></Sitemap>
    <Footer></Footer>
    </>
  )
}
