import { locations, socialLinks } from '@/functions/Functions'
import RowFlexUi from '@/ui/RowFlex'
import React from 'react'
import { PiFacebookLogo, PiInstagramLogo, PiMapPin, PiPhone, PiEnvelope, PiClock, PiWhatsappLogo, PiTiktokLogo } from 'react-icons/pi'

export default function Footer() {
  return (
    <div className="dark text-minified  padding-20" style={{lineHeight:"1.5rem"}}>
      <div className='padding-bottom-80' >
        {/* Main Footer Content */}
        <div className="row space-between padding-bottom-40">
          {/* Services Section */}
          <div className="col sm-12 md-6 lg-3 padding-10">
            <div className="h5 text-bold margin-bottom-20">Our Services</div>
            <div>
              <div className="margin-bottom-10 pointer hover-up">Windshield Repair</div>
              <div className="margin-bottom-10 pointer hover-up">Windshield Replacement</div>
              <div className="margin-bottom-10 pointer hover-up">Side Window Services</div>
              <div className="margin-bottom-10 pointer hover-up">Rear Glass Solutions</div>
              <div className="margin-bottom-10 pointer hover-up">Emergency Repairs</div>
              <div className="pointer hover-up">ADAS Calibration</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col sm-12 md-6 lg-3 padding-10">
            <div className="h5 text-bold margin-bottom-20">Contact Info</div>
          
            <div className="flex align-center margin-bottom-15">
              <PiPhone className="margin-right-10" />
              <RowFlexUi gap={0.5}>
                <div className="text-bold">Call Us:</div>
                <div>+19052264226</div>
              </RowFlexUi>
            </div>
            <div className="flex align-center margin-bottom-15">
              <PiEnvelope className="margin-right-10" />
              <RowFlexUi gap={0.5}>
                <div className="text-bold">Email:</div>
                <div>info@autoglassgurus.ca</div>
              </RowFlexUi>
            </div>
            <div className="flex align-center">
              <PiClock className="margin-right-10" />
              <div className="text-bold">24/7 Emergency Service</div>
            </div>
<div className="section"></div>
                        {
                          locations.map((res) => {
                            return (
                              <div key={res} className="flex align-center article margin-bottom-15">
                                <PiMapPin className="margin-right-10" />
                                <div>
                                  <div className="text-bold">{res}</div>
                                </div>
                              </div>
                            )
                          })
                        }
          </div>

          {/* Why Choose Us */}
          <div className="col sm-12 md-6 lg-3 padding-10">
            <div className="h5 text-bold margin-bottom-20">Why Choose Us</div>
            <div>
              <div className="margin-bottom-10">✓ Same-Day Service</div>
              <div className="margin-bottom-10">✓ Lifetime Warranty</div>
              <div className="margin-bottom-10">✓ Mobile Service Available</div>
              <div className="margin-bottom-10">✓ Insurance Direct Billing</div>
              <div className="margin-bottom-10">✓ OEM Quality Materials</div>
              <div>✓ Free Estimates</div>
            </div>
          </div>

          {/* Social Media */}
          <div className="col sm-12 md-6 lg-3 padding-10">
            <div className="h5 text-bold margin-bottom-20">Connect With Us</div>
            <p className="margin-bottom-20">Follow for maintenance tips and special offers</p>
            <RowFlexUi gap={1} justify='start'>
              <a href={socialLinks.facebook} className="dark100 pointer hover-up central width-40 height-40 round border-light">
                <PiFacebookLogo size={20}/>
              </a>
              <a href={socialLinks.tiktok} className="dark100 pointer hover-up central width-40 height-40 round border-light">
                <PiTiktokLogo size={20}/>
              </a>
              <a href={socialLinks.whatsapp} className="dark100 pointer hover-up central width-40 height-40 round border-light">
                <PiWhatsappLogo size={20}/>
              </a>
            </RowFlexUi>
            <div className="margin-top-20">
              <div className="text-bold margin-bottom-5">Business Hours:</div>
              <div>Monday-Sunday: 24/7</div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div 
          className="text-center text-minified uppercase padding-top-20 padding-bottom-20" 
          style={{ borderTop: '0.1rem solid #303030' }}
        >
          <RowFlexUi gap={2} justify="center">
            <span>© {new Date().getFullYear()} AutoGlass Gurus</span>
          </RowFlexUi>
        </div>

           <div className="width-300-max center">
        <img src="/payments.png" width={"100%"} alt="" />
      </div>
      </div>

   
    </div>
  )
}