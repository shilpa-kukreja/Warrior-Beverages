import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import IntroSection from './components/IntroSection'
import AnimatedSection from './components/animatedsection'
import WhyChooseWather from './components/why-choose-wather'
import ProductRange from './components/Our-Range-of-Premium-Water'
import Testimonials from './components/testimonial'
import ContactSection from './components/contact'
import Footer from './components/Footer'


const page = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <IntroSection/>
    <AnimatedSection/>
    <WhyChooseWather/>
    <ProductRange/>
    <Testimonials/>
    <ContactSection/>
    <Footer/>
    </>
  )
}

export default page

