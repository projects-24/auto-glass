import Hero from '@/components/Hero'
import Nav from '@/components/Nav'
import React from 'react'
import { PiPaperPlaneRight , PiKey, PiCheck, PiUser, PiPhone, PiTextAlignCenter, PiTextAlignJustify, PiPaperPlane } from 'react-icons/pi';
import Input from 'funuicss/ui/input/Input'
import IconicInput from 'funuicss/ui/input/Iconic'
import RowFlexUi from '@/ui/RowFlex';
import UiButton from '@/ui/button';
export default function page() {
  return (
    <div>
        <Nav />

        <Hero
        hero={"Get a free qoute online"}
        body={`     Let us help you with your auto glass needs. Contact us today to schedule your repair or replacement!`}
        />


        <div className="wrapper">
  <div className="contain">
     
      <div>
        <div className="header" >
          <h2 className="title">
    {`Don’t Hesited To Contact Us`}
          </h2>
          <div className="section"></div>
          <div className="article">
            Let us help you with your auto glass needs. Contact us today to schedule your repair or replacement!
          </div>
        </div>
        <div className="margin-top-50">
   <div className="width-600-max center">
            <RowFlexUi gap={1} funcss='section'>
            <div className="col">
                <IconicInput 
    funcss=" full-width" 
    leftIcon={ <PiPaperPlaneRight className='text-primary' />}
    input={<Input type="email" label="Email" funcss="full-width" bordered />}
     />
            </div>
            <div className="col">
                <IconicInput 
    funcss=" full-width" 
    leftIcon={ <PiUser className='text-primary' />}
    input={<Input type="text" label="Full Name" funcss="full-width" bordered />}
     />
            </div>
        </RowFlexUi>
        <RowFlexUi gap={1} funcss='section'>
            <div className="col">
                <IconicInput 
    funcss=" full-width" 
    leftIcon={ <PiTextAlignCenter className='text-primary' />}
    input={<Input type="text" label="Subject" funcss="full-width" bordered />}
     />
            </div>
            <div className="col">
                <IconicInput 
    funcss=" full-width" 
    leftIcon={ <PiPhone className='text-primary' />}
    input={<Input type="text" label="Phone" funcss="full-width" bordered />}
     />
            </div>
        </RowFlexUi>
                   <div className="section">
      <Input type="text" label="Write your message here" rows={4} multiline funcss="full-width" bordered />
            </div>
            <div className="section text-center">
                    <UiButton 
                      text={"SUBMIT YOUR REQUEST"}
                      endIcon={<PiPaperPlane />}
                      bg='primary'
                        fillAnimation 
                   outlined 
                   outlineSize={0.1}
                   fillTextColor='dark900' 
                      />
            </div>
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

    <div className="margin-top-40 padding">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.678901234567!2d-89.12345678901234!3d39.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDA3JzI0LjQiTiA4OcKwMDcnMjQuNCJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </div>
</div>
    </div>
  )
}
