import Hero from '@/components/Hero'
import Nav from '@/components/Nav'
import React from 'react'
import { galleryImages } from '../data/gallery'
import Footer from '@/components/Footer'

export default function page() {
  return (
    <div>
        <Nav />
        <Hero
        hero={"Gallery"}
        body={"Explore our extensive gallery of completed projects, showcasing our commitment to quality, precision, and attention to detail."}/>
  <div className="wrapper">
      <div className='width-700-max center'>
        <div className="section">
            <h2 className="title">Explore Our Gallery</h2>
            <div className="subtitle">A showcase of our finest works</div>
        </div>
        <div className="row">
            {
                galleryImages.map(image => (
                    <div className="col sm-12 md-6 lg-4 padding" key={image} 
                    >
                    <div className=' height-300 round-edge pointer scale-up' 
                    style={{backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center'}}
                    > 

                    </div>
                    </div>
                ))
            }
        </div>
    </div>
  </div>
    <Footer />
    </div>
  )
}
