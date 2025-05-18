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
import {PiChecks, PiDiamondsFour, PiGear, PiGoogleLogo, PiPhone, PiPlusCircle, PiSketchLogo, PiStar, PiStarDuotone, PiStarFill, PiUserCheck} from 'react-icons/pi'
import Footer from "@/components/Footer";
import TextUi from "@/ui/Text";
import SectionUI from "@/ui/section";
import { autoGlassBenefits, autoGlassData, Services } from "./data/services";
import { reviews } from "./data/reviews";
import RowFlexUi from "@/ui/RowFlex";
import { FaPlusSquare } from 'react-icons/fa';
import UiButton from "@/ui/button";
import Logo from "@/ui/Logo";
import Link from "next/link";
import CircleUi from "@/ui/Circle";
import { companies } from "./data/Companies";


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
  <div className="homeTab text-white text-center center">
         <div >
    
         <TextUi
              text="Get you windshield repaired with 24/7"
              block
              lineHeight="100%"
              size="jumbo"
              color={"white"}
            />

            {/* Highlighted Key Benefits */}
                  <div className="article section">
  <div>
    <div>
      💸 We Pay Up To <strong>100%</strong> Of Your Deductible
    </div>
  </div>
  <div>
    <div>
      🛡️ Lifetime Auto Glass Repair Warranty
    </div>
  </div>
  <div>
    <div>
      🔧 We Will Beat Any Competitor <span className="text-bold">By 10%!</span>
    </div>
  </div>
  <div>
    <div>
      🇨🇦 Canadian Owned & Operated
    </div>
  </div>
</div>


            <div style={{ marginTop: "30px" }}>
           <Link href={"/contact"}>
        <UiButton 
      text={"GET A FREE QOUTE ONLINE"}
      bg='white'
        fillAnimation 
   outlined 
   outlineSize={0.1}
   big
   fillTextColor='primary' 
      />
        </Link>
            </div>

         </div>
          </div>
</div>

<div id=""></div>
<div className="wrapper central" data-aos="fade-up">
<div>
      <div className="row">
      {
        autoGlassData.map((doc, i) => (
          <div key={i} className="col sm-12 md-4 lg-3 padding margin-top-30">
            <Animation>
              <div className='product-image hover-up pointer'>
                <img src={doc.image} alt={doc.title} className='width-80' />
              </div>
              <div className="margin-top-20">
                <div className='h5'>{doc.title}</div>
              </div>
              <div className="margin-top-10 article text-dark300">
                {doc.description}
              </div>
            </Animation>
          </div>
        ))
      }
    </div>
       <div className="width-700-max fit center">
      <img src="/images/service.png" className="fit" alt="" />
    </div>
    <div className="row central">
      <div className="col sm-12 md-12 lg-4 padding">
        {
          autoGlassBenefits.slice(0 , autoGlassBenefits.length / 2).map((doc, i) => {
            return (
              <RowFlexUi  data-aos="fade-up" key={i} gap={0.5} alignItems='flex-start' funcss='section'>
                <PiPlusCircle className="text-primary" size={30} />
                <div>
                  <TextUi
                  text={doc.title}
                  heading='h4'
                  bold
                  block
                  />
                  <TextUi
                  text={doc.description}
                  article
                  />
                </div>
              </RowFlexUi>
            )
          })
        }
      </div>
      <div className="col sm-12 md-12 lg-4">
        <img  data-aos="fade-up" src="/images/1.jpg" className="width-100-p" alt="" />
      </div>
        <div className="col sm-12 md-12 lg-4 padding">
        {
          autoGlassBenefits.slice((autoGlassBenefits.length / 2) + 1 , autoGlassBenefits.length).map((doc, i) => {
            return (
              <RowFlexUi  data-aos="fade-up" key={i} gap={0.5} alignItems='flex-start' funcss='section'>
                <PiPlusCircle className="text-primary" size={30} />
                <div>
                  <TextUi
                  text={doc.title}
                  heading='h4'
                  bold
                  block
                  />
                  <TextUi
                  text={doc.description}
                  article
                  />
                </div>
              </RowFlexUi>
            )
          })
        }
      </div>
    </div>

    <div className="section">
      <div className="row">
        {
        companies.map((res , index) => {
          return (
          <div key={index} className="col text-center sm-4 md-3 lg-3 padding">
            <img src={res} width={"100px"}/>
          </div>
          )
        })
      }
      </div>
    </div>


 
</div>
</div>
<div id="services"></div>
<div className="wrapper dark800 text-dark central" data-aos="fade-up">
  <div className="">
    <div className="header" data-aos="fade-down">
      <h2 className="title">
        - Discover Our Auto Glass Services
      </h2>
      <div className="section"></div>
      <div className="article h5">
        From minor chips to full windshield replacements, our expert team is here to restore your vehicles glass to its original condition.
      </div>
    </div>
<div >
  {Services.map((doc, i) => (
    <div key={i} className="padding margin-top-30">
      <Animation>
        <RowFlexUi gap={4} justify='center' style={{flexWrap:"wrap"}}>
          <div  className={`text-center col sm-12 ${i % 2 === 0 ? 'md-6' : 'md-6 order-md-2'}`}>
            <div className='product-image hover-up pointer '>
              <img src={doc.image} alt={doc.name} className='width-70-p  ' />
            </div>
          </div>
          <div className={`padding-20 col sm-12 ${i % 2 === 0 ? 'md-6' : 'md-6 order-md-1'}`}>
                {doc.subtitle && (
              <div className='h5 text-secondary margin-top-5'>{doc.subtitle}</div>
            )}
            <TextUi size='bigger' block>{doc.name}</TextUi>
            <div className="margin-top-10 article">
              {doc.description}
            </div>

            <div className="section">
                     <Link href={"/contact"}>
        <UiButton 
      text={"Get a Quick Qoute"}
      bg='primary'
        fillAnimation 
   outlined 
   outlineSize={0.1}
   fillTextColor='dark900' 
      />
        </Link>
            </div>
          </div>
        </RowFlexUi>
      </Animation>
    </div>
  ))}
</div>
  </div>
</div>

<div id="about"></div>
<div className="wrapper text-dark central" data-aos="fade-up">
  <div className="contain">
    <div className="header" data-aos="fade-down">
      <h2 className="title">
        - About AutoGlass Gurus
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
        <div className="row">
          {
            reviews.map((doc, i) => (
              <div class="col sm-12 md-6 lg-6 padding" data-aos="fade-up" key={i}>
               <RowFlexUi gap={1} justify='space-between'>
                  <div className="">
                  <img src={doc.profile} className="width-50 circle" alt="" />
                     <div class="article section">{doc.user}</div>
                </div>
             <img src="/google.png" className="width-20" alt="" />
               </RowFlexUi>
                <p>
                  <RowFlexUi gap={2} justify='space-between'>
                    <div class="row-flex">
                      <div class="h4 text-yellow"> <PiStarFill /></div>
                      <div class="h4 text-yellow"> <PiStarFill /></div>
                      <div class="h4 text-yellow"> <PiStarFill /></div>
                      {
                        doc.stars == "4" || doc.stars == '5' ? <div class="h4 text-yellow"> <PiStarFill /></div> : ''
                      }
                      {
                        doc.stars == "5" ? <div class="h4 text-yellow"> <PiStarFill /></div> : <div class="h4 text-dark"> <PiStarDuotone /></div>
                      }
                    </div>
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



<Footer />

   </main>
  );
}

