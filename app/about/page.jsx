'use client'
import Hero from '@/components/Hero'
import Nav from '@/components/Nav'
import Aos from 'aos'
import React, { useEffect } from 'react'

export default function About() {
       useEffect(() => {
      Aos.init()  
      }, [])
    
  return (
 
    <div className='padding-top-80'>
<Nav />
<Hero
hero={"  About AutoGlass Gurus"}
body={`  We are committed to providing top-quality auto glass repair and replacement services to keep you and your vehicle safe on the road.`} 
/>
        <div className="wrapper text-dark central" data-aos="fade-up">
  <div className="contain">
    <div className="width-700-max center">
      <div className="section4 padding" data-aos="fade-up">
        <img src="/images/services/windshield_replacement.jpg" className="fit" alt="AutoGlass Repair" />
      </div>
      <div className="padding">
        <p className="article" data-aos="fade-up">
          <span className="lighted">AutoGlass Repair</span> was founded with a mission to deliver <span className="lighted">affordable, high-quality auto glass services</span> to our community. We understand the importance of <span className="lighted">safety and visibility</span> while driving, and we are dedicated to providing <span className="lighted">quick, reliable solutions</span> for all your auto glass needs. Our team combines <span className="lighted">years of experience</span> with the <span className="lighted">latest technology</span> to ensure your vehicle is in the best hands.
        </p>
      </div>
      <div className="section4">
        <div className="row">
          <div className="col sm-12 md-6 lg-6 padding">
            <h4 className="text-bold underline">OUR VISION</h4>
            <p className="article">
              To be the leading provider of auto glass repair and replacement services, known for our commitment to safety, quality, and customer satisfaction.
            </p>
          </div>
          <div className="col sm-12 md-6 lg-6 padding">
            <h4 className="text-bold underline">OUR MISSION</h4>
            <p className="article">
              To deliver fast, reliable, and professional auto glass services that ensure the safety and satisfaction of every customer.
            </p>
          </div>
        </div>
      </div>
    </div>


    
               <div className="header margin-top-100" >
          <h2 className="title">
    {`Don’t Hesited To Contact Us`}
          </h2>
          <div className="section"></div>
          <div className="article">
            Let us help you with your auto glass needs. Contact us today to schedule your repair or replacement!
          </div>
        </div>
        <div className="section4">
          <div className="row" style={{ alignItems: 'flex-start' }}>
            <div className="col sm-12 md-6 lg-6 padding" >
              <div className="section padding border round-edge">
                <h6 className="text-bold text-p margin-bottom-10 text-minified uppercase">Address:</h6>
                <h5>123 AutoGlass Gurus, Toronto</h5>
              </div>
              <div className="section padding border round-edge">
                <h6 className="text-bold text-p margin-bottom-10 text-minified uppercase">Location:</h6>
                Toronto, Canada
              </div>
            </div>
            <div className="col sm-12 md-6 lg-6 padding">
              <section />
              <div className="border padding round-edge section">
                <h6 className="text-bold text-p margin-bottom-10 text-minified uppercase">Call Us:</h6>
                <h5>
                +1 647-708-4226
                </h5>
              </div>
              <div className="section padding border round-edge">
                <h6 className="text-bold text-p margin-bottom-10 text-minified uppercase">Email:</h6>
                <h5>info@autoglassgurus.ca</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
 </div>
    <div className="margin-top-40 padding">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.678901234567!2d-89.12345678901234!3d39.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDA3JzI0LjQiTiA4OcKwMDcnMjQuNCJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    </div>
  )
}
