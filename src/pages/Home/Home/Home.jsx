import React from 'react'
import Banner from '../Banner/Banner'
import ServiceCard from '../ServiceCard/ServiceCard'
import Service from '../Service/Service'
import Brands from '../Brands/Brands'
import Support from '../Support/Support'
import Marchent from '../Marchent/Marchent'
import Reviews from '../Reviews/Reviews'
import Faq from '../FAQ/Faq'

const reviewPromise = fetch('/reviews.json').then(res =>res.json())

function Home() {
  return (
    <div className='my-8'>
      <Banner></Banner>
      <ServiceCard></ServiceCard>
      <Service></Service>
      <Brands></Brands>
      <Support></Support>
      <Marchent></Marchent>
      <Reviews reviewPromise={reviewPromise}></Reviews>
      <Faq></Faq>
    </div>
  )
}

export default Home
