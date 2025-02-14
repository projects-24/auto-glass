'use client'
import { useEffect, useState } from "react";
import { _TEAM } from "./data/team";
import Aos from 'aos'
import Animation from "funuicss/ui/aos/AOS" 
import Div from 'funuicss/ui/div/Div'
import Text from 'funuicss/ui/text/Text'
import Grid from 'funuicss/ui/grid/Grid'
import Col from 'funuicss/ui/grid/Col'
import Container from 'funuicss/ui/container/Container'
import Section from 'funuicss/ui/specials/Section'
import Button from 'funuicss/ui/button/Button'
import Input from 'funuicss/ui/input/Input'
import RowFlex from 'funuicss/ui/specials/RowFlex'
import List from 'funuicss/ui/list/List'
import ListItem from 'funuicss/ui/list/Item'
import {FunGet} from 'funuicss/js/Fun'
import Alert from 'funuicss/ui/alert/Alert'
import Nav from "@/components/Nav";
import {PiDiamondsFour, PiGoogleLogo, PiSketchLogo, PiStarDuotone, PiUserCheck} from 'react-icons/pi'
import Footer from "@/components/Footer";
import TextUi from "@/ui/Text";
import { _Articles } from "./functions/FaceBookPost";
import SectionUI from "@/ui/section";
import { Services } from "./data/services";
import { reviews } from "./data/reviews";
import RowFlexUi from "@/ui/RowFlex";

export default function Home() {
  const [success, setsuccess] = useState(false)
  const [error, seterror] = useState(false)
  const [errMessage, seterrMessage] = useState('')

  useEffect(() => {
    setTimeout(() => {
      seterror(false)
      setsuccess(false)
    }, 4000);
  
    return () => {
      clearTimeout()
    }
  }, [error , success])
  


useEffect(() => {
  Aos.init()  
  }, [])

   return (
   <main>
    {
    success && <Alert fixed='top-right' message="Your message has been submitted successfully." standard type="success" card />
    }
    {
    error && <Alert message={errMessage} standard type="danger" fixed='top-right' card/>
    }
  <Nav />
  <div id="home"></div>

<div className="home">
  <div className="">
    <div className="row">
      <div className="col sm-12 md-6 lg-6 padding">
        <div className="">
          <img src="/images/pics/autoglass.jpg" className="fit" alt="AutoGlass Repair" />
        </div>
      </div>
      <div className="col sm-12 md-6 lg-6 padding">
        <div className="flex central fit">
          <div className="container">
          <TextUi
          text="AutoGlass Repair: Your Safety, Our Priority"
          block
          lineHeight="100%"
          size='big'
          color='p'
        />
        <SectionUI>
          <TextUi
            text={<>
              <p>
                At <span className="lighted">AutoGlass Repair</span>, we believe that <span className="lighted">clear, safe windows</span> are essential for your vehicles performance and your peace of mind. 
              </p>
            </>}
            block
            lineHeight="150%"
            heading='h5'
          />
        </SectionUI>
        <div className="margin-top-30">
          <div className="row-flex gap">
            <a href="#contact">
              <button className="bg-p raised button">Contact Us</button>
            </a>
            <a href="#services">
              <button className="bg-s raised button">Our Services</button>
            </a>
          </div>
        </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div id="services"></div>
<div className="wrapper dark800 text-dark central" data-aos="fade-up">
  <div className="contain">
    <div className="header" data-aos="fade-down">
      <h2 className="title">
        - Discover Our Auto Glass Services
      </h2>
      <div className="section"></div>
      <div className="article h5">
        From minor chips to full windshield replacements, our expert team is here to restore your vehicles glass to its original condition.
      </div>
    </div>
    <div className="row">
      {
        Services.map((doc, i) => (
          <div key={i} className="col sm-12 md-12 lg-6 padding margin-top-30">
            <Animation>
              <div className='product-image hover-up pointer'>
                <img src={doc.image} alt={doc.name} className='fit round-edge' />
              </div>
              <div className="margin-top-20">
                <div className='h4 text-p text-bold important'>{doc.name}</div>
              </div>
              <div className="margin-top-10 article text-dark300">
                {doc.description}
              </div>
            </Animation>
          </div>
        ))
      }
    </div>
  </div>
</div>

<div id="about"></div>
<div className="wrapper text-dark central" data-aos="fade-up">
  <div className="contain">
    <div className="header" data-aos="fade-down">
      <h2 className="title">
        - About AutoGlass Repair
      </h2>
      <div className="section"></div>
      <div className="article h5">
        We are committed to providing top-quality auto glass repair and replacement services to keep you and your vehicle safe on the road.
      </div>
    </div>
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
  </div>
</div>

<Animation>
  <div className="wrapper">
    <div className="container">
      <div id="testimonials"></div>
      <div className="header" data-aos="fade-down">
        <h2 className="title">
          - Hear What Our Customers Say
        </h2>
        <div className="section"></div>
        <div>
          Discover why our customers trust AutoGlass Repair for their auto glass needs.
        </div>
      </div>
      <div className="margin-top-50">
        <div className="width-700-max center">
          {
            reviews.map((doc, i) => (
              <div class="section border padding-20 round-edge" data-aos="fade-up" key={i}>
                <h2 class="text-bold text-p">{doc.user}</h2>
                <p>
                  <RowFlexUi gap={2} justify='space-between'>
                    <div class="row-flex">
                      <div class="h4 text-s"> <PiStarDuotone /></div>
                      <div class="h4 text-s"> <PiStarDuotone /></div>
                      <div class="h4 text-s"> <PiStarDuotone /></div>
                      {
                        doc.stars == "4" || doc.stars == '5' ? <div class="h4 text-s"> <PiStarDuotone /></div> : ''
                      }
                      {
                        doc.stars == "5" ? <div class="h4 text-s"> <PiStarDuotone /></div> : <div class="h4 text-dark"> <PiStarDuotone /></div>
                      }
                    </div>
                    <RowFlexUi gap={0.5}>
                      <div className="text-bold text-dark400">
                        {doc.stars} / 5
                      </div>
                    </RowFlexUi>
                  </RowFlexUi>
                  <div className="article text-dark200 text-italic">
                    {`"`} {doc.review} {`"`}
                  </div>
                </p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  </div>
</Animation>

<div className="wrapper dark900 text-dark">
  <div className="contain">
    <div id="contact"></div>
    <div data-aos="fade-up">
      <div>
        <div className="header" data-aos="fade-down">
          <h2 className="title">
            Visit Us
          </h2>
          <div className="section"></div>
          <div className="article">
            Let us help you with your auto glass needs. Contact us today to schedule your repair or replacement!
          </div>
        </div>
        <div className="section4">
          <div className="row" style={{ alignItems: 'flex-start' }}>
            <div className="col sm-12 md-6 lg-6 padding" data-aos="fade-up">
              <div className="section padding border round-edge">
                <h6 className="text-bold text-p margin-bottom-10 text-minified uppercase">Address:</h6>
                <h5>123 AutoGlass Street, Springfield</h5>
              </div>
              <div className="section padding border round-edge">
                <h6 className="text-bold text-p margin-bottom-10 text-minified uppercase">Location:</h6>
                Near City Center, Springfield, USA
              </div>
            </div>
            <div className="col sm-12 md-6 lg-6 padding">
              <section />
              <div className="border padding round-edge section" data-aos="fade-up">
                <h6 className="text-bold text-p margin-bottom-10 text-minified uppercase">Call Us:</h6>
                <h5>
                  +1 234 567 8901
                </h5>
              </div>
              <div className="section padding border round-edge">
                <h6 className="text-bold text-p margin-bottom-10 text-minified uppercase">Email:</h6>
                <h5>info@autoglassrepair.com</h5>
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
</div>

<Footer />

   </main>
  );
}

