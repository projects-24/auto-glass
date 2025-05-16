'use client'
import Hero from '@/components/Hero'
import Nav from '@/components/Nav'
import React, { useState } from 'react'
import { PiPaperPlaneRight , PiKey, PiCheck, PiUser, PiPhone, PiTextAlignCenter, PiTextAlignJustify, PiPaperPlane } from 'react-icons/pi';
import Input from 'funuicss/ui/input/Input'
import IconicInput from 'funuicss/ui/input/Iconic'
import RowFlexUi from '@/ui/RowFlex';
import UiButton from '@/ui/button';
import TextUi from '@/ui/Text';
import { cars } from '@/functions/Functions';


export default function Contact() {
  const [state, setstate] = useState(0)
  const [questions, setquestions] = useState(
   [
  {
    question: "Which car glass needs replacement?",
    answer: "",
    subtitle: "Specify the damaged glass part, e.g., front windshield, rear window, or side glass."
  },
  {
    question: "Which car Make?",
    answer: "",
    subtitle: "Select the brand or manufacturer of your vehicle, such as Toyota, Ford, or BMW."
  },
  {
    question: "Select car model",
    answer: "",
    subtitle: "Choose the specific model of your car, like Corolla, Camry, or F-150."
  },
  {
    question: "Vehicle Year",
    answer: "",
    subtitle: "Enter the year your car was manufactured, such as 2015 or 2022."
  },
  {
    question: "Vehicle Registration number",
    answer: "",
    subtitle: "Provide your car's license plate or registration number for identification."
  },
  {
    question: "Enter your personal information",
    answer: "",
    subtitle: "Fill in your name, phone number, and any other required contact details."
  }
]

)


const currentYear = new Date().getFullYear();
const years = Array.from({ length: currentYear - 1990 + 1 }, (_, i) => {
  const year = 1990 + i;
  return { text: year.toString(), value: year.toString() };
});


const Submit = () => {
  console.log(questions)
}
  return (
    <div>
        <Nav />

        <Hero
        hero={"Get a free qoute online"}
        body={`     Let us help you with your auto glass needs. Contact us today to schedule your repair or replacement!`}
        />

        <div style={{minHeight:"90vh"}} className='flex padding-20 central dark900 text-dark round-edge'>
   <div className="width-600-max center">
   <div className="text-center section margin-bottom-50">
     {
     <>
      <TextUi
      text={questions[state].question}
      size='big'
      />
      <p className='article'>
        {questions[state].subtitle || ''}
      </p>
     </>
    }
   </div>
    {
      state == 0 ?
      <div>
           <div onClick={() => {
              questions[0].answer = 'Front Windscreen'
              setstate(() => state + 1)
            }} className='primary flex center central pointer hover-up round-edge'
            style={{height:"100px" , width:"60%"}}
            >
              <TextUi
              text="Front Windscreen"
              heading='h5'
              color={'white'}
              />
            </div>
        <RowFlexUi>
          <div className="col">
            <div onClick={() => {
              questions[0].answer = 'Passenger Front'
              setstate(() => state + 1)
            }} className='primary flex central pointer hover-up round-edge'
            style={{height:"100px"}}
            >
              <TextUi
              text="Passenger Front"
              heading='h5'
              color={'white'}
              />
            </div>
            <div className="section"></div>
            <div  onClick={() => {
              questions[0].answer = 'Passenger Rear'
              setstate(() => state + 1)
            }} className='primary flex central pointer hover-up round-edge'
            style={{height:"100px"}}
            >
              <TextUi
              text="Passenger Rear"
              heading='h5'
              color={'white'}
              />
            </div>
          </div>
          <div className="col text-center">
            <img src="/car.svg" className='height-300' alt="" />
          </div>
              <div className="col">
            <div onClick={() => {
              questions[0].answer = 'Driver Front'
              setstate(() => state + 1)
            }} className='primary flex central pointer hover-up round-edge'
            style={{height:"100px"}}
            >
              <TextUi
              text="Driver Front"
              heading='h5'
              color={'white'}
              />
            </div>
            <div className="section"></div>
            <div  onClick={() => {
              questions[0].answer = 'Driver Rear'
              setstate(() => state + 1)
            }} className='primary flex central pointer hover-up round-edge'
            style={{height:"100px"}}
            >
              <TextUi
              text="Driver Rear"
              heading='h5'
              color={'white'}
              />
            </div>
          </div>
        </RowFlexUi>
           <div onClick={() => {
              questions[0].answer = 'Rear Windscreen'
              setstate(() => state + 1)
            }} className='primary flex center central pointer hover-up round-edge'
            style={{height:"100px" , width:"60%"}}
            >
              <TextUi
              text="Rear Windscreen"
              heading='h5'
              color={'white'}
              />
            </div>
      </div>
      : state == 1 ?
      <>
         <Input
      fullWidth
      bordered
      label="Car Make"
       onChange={(e) => {
    questions[state].answer = e.target.value;
  }}
  onKeyDown={(e) => {
    if (e.key === 'Enter' && questions[state].answer) {
      setstate(() => state + 1);
    }
  }}
      />
      {/* <Input
      fullWidth
      bordered
      label="Car"
      select 
      onChange={(e) => { 
        questions[state].answer = e.target.value
             if(e.target.value){
               setstate(() => state + 1)
        }
       }}
      options={cars().map((res , i) => {
         if(i === 0){
            return {text:"select car model" , value:""}
          }
       return {text:res.title , value:res.title}
      })}
      /> */}
      </>
      : state == 2 ?
      <>
      <Input
      fullWidth
      bordered
      label="Model"
       onChange={(e) => {
    questions[state].answer = e.target.value;
  }}
  onKeyDown={(e) => {
    if (e.key === 'Enter' && questions[state].answer) {
      setstate(() => state + 1);
    }
  }}
      />
      {/* <Input
      fullWidth
      bordered
      label="Model"
      select 
      onChange={(e) => { 
        questions[state].answer = e.target.value
        if(e.target.value){
               setstate(() => state + 1)
        }
       }}
      options={cars().find((res) => res.title === questions[1].answer).models
        .map((res , i) => {
          if(i === 0){
            return {text:"select car model" , value:""}
          }
       return {text:res.value , value:res.value}
      })}
      /> */}
      </>
      : state == 3 ?
      <>
<Input
  fullWidth
  bordered
  label="Model Year"
  select
  onChange={(e) => {
    questions[state].answer = e.target.value;
    if (e.target.value) {
      setstate(() => state + 1);
    }
  }}
  options={[
    { text: "Select model year", value: "" },
    ...Array.from({ length: new Date().getFullYear() - 1990 + 1 }, (_, i) => {
      const year = 1990 + i;
      return { text: year.toString(), value: year.toString() };
    })
  ]}
/>
      </>
      : state == 4 ?
      <>
<Input
  fullWidth
  bordered
  label="Enter your vehicle number"
  type="text"
  onChange={(e) => {
    questions[state].answer = e.target.value;
  }}
  onKeyDown={(e) => {
    if (e.key === 'Enter' && questions[state].answer) {
      setstate(() => state + 1);
    }
  }}
/>

      </>
      : <>
           <RowFlexUi responsiveSmall gap={1} funcss='section'>
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
        <RowFlexUi responsiveSmall gap={1} funcss='section'>
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
          
            <div className="section text-center">
                    <UiButton 
                      text={"SUBMIT YOUR REQUEST"}
                      endIcon={<PiPaperPlane />}
                      bg='primary'
                        fillAnimation 
                   outlined 
                   outlineSize={0.1}
                   fillTextColor='dark900' 
                   onClick={Submit}
                      />
            </div>
      </>
    }
       
        </div>
        </div>
        <div className="wrapper">

  <div className="contain">
     
      <div>
 


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
</div>

    <div className="margin-top-40 padding">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.678901234567!2d-89.12345678901234!3d39.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDA3JzI0LjQiTiA4OcKwMDcnMjQuNCJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    </div>
  )
}
