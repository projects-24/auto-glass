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
import { cars, companyEmail } from '@/functions/Functions';
import emailjs from '@emailjs/browser';
import Loader from '@/ui/Loader';
import Alert from 'funuicss/ui/alert/Alert'

export default function Contact() {
  const [message, setmessage] = useState(0)
  const [alert_state, setalert_state] = useState("")
  const [showOther, setshowOther] = useState(false)
  const [isLoading, setisLoading] = useState(false)
  const [form, setForm] = useState({
    part: '',
    otherPart: '',
    make: '',
    model: '',
    year: '',
    registration: '',
    email: '',
    name: '',
    subject: '',
    phone: '',
  });

  const CarParts = [
    "Windscreen",
    "Rear Windscreen",
    "Front Door Glass",
    "Driver Rear Door Glass",
    "Passenger Rear Door Glass",
    "Front Quarter Glass",
    "Driver Rear Quarter Glass",
    "Passenger Rear Quarter Glass",
    "Rear Quarter Glass",
    "Other"
  ];

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 1990 + 1 }, (_, i) => {
    const year = 1990 + i;
    return { text: year.toString(), value: year.toString() };
  });

  const handleChange = (name) => (e) => {
    setForm({ ...form, [name]: e.target.value });
  };

const Submit = () => {
  // Validate required fields
  if (
    !form.name ||
    !form.email ||
    !form.phone ||
    !form.subject ||
    !form.make ||
    !form.model ||
    !form.year ||
    !form.part
  ) {
    alert('Please fill all required fields before submitting.');
    return;
  }

  setisLoading(true);

  const templateParams = {
  email: companyEmail,
  name: form.name,
  message: `
🔧 NEW WINDSHIELD REPAIR QUOTE REQUEST 🔧

📌 CLIENT INFORMATION
========================
👤 Name       : ${form.name}
📧 Email      : ${form.email}
📞 Phone      : ${form.phone}
📝 Subject    : ${form.subject}

🚗 VEHICLE DETAILS
========================
🏷️ Make       : ${form.make}
🚘 Model      : ${form.model}
📅 Year       : ${form.year}

🛠️ REPAIR REQUEST
========================
🧩 Requested Part : ${form.part}
🗒️ Additional Notes: ${form.otherPart || 'None'}

📍 Submitted via the company website.
    `,
};


  emailjs
    .send(
      'service_ckthctb',        // Your EmailJS service ID
      'template_e415yhv',       // Your EmailJS template ID
      templateParams,
      'Cs-Lc0t9aVCayuZ_Q'       // Your EmailJS public key
    )
    .then((res) => {

      // Show success message
      setmessage('Quote request submitted successfully!, We will contact you soon.');
      setalert_state('success');

      // Clear form
      setForm({
        part: '',
        otherPart: '',
        make: '',
        model: '',
        year: '',
        email: '',
        name: '',
        subject: '',
        phone: '',
      });

      // Stop loading
      setisLoading(false);

      // Hide message after 5 seconds
      setTimeout(() => {
        setmessage('');
        setalert_state(false);
      }, 5000);
    })
    .catch((err) => {
      console.error('Email sending failed:', err);
      setmessage('Failed to submit quote. Please try again.');
      setalert_state('error');
      setisLoading(false);

      setTimeout(() => {
        setmessage('');
        setalert_state(false);
      }, 5000);
    });
};



  return (
    <div>
      {
        message && 
      <Alert fixed="top-middle" card message={message} type={alert_state || "info"}/>
      }
      {
        isLoading && 
        <Loader />
      }
        <Nav />

        <Hero
        hero={"Get a free qoute online"}
        body={`     Let us help you with your auto glass needs. Contact us today to schedule your repair or replacement!`}
        />
  <div style={{ minHeight: "100vh" }} className="flex padding-20 dark900 text-dark round-edge">
        <div className="width-600-max center">
               <RowFlexUi gap={1} justify='center'>
            <img className="width-90" src="/reviewed.png" alt="" />
            <img className="width-90" src="/guaranteed.png" alt="" />
          </RowFlexUi>
          <div className="text-center section margin-bottom-50">
            <TextUi text="Request A Quote" size="bigger" />
            <p className="article">Fill in your details below to get started</p>
          </div>

          {/* Car part selection */}
          <select
            className="input section central borderedInput pointer hover-up round-edge full-width"
            onChange={handleChange('part')}
          >
            <option value="">Select damaged glass part</option>
            {CarParts.map((part, i) => (
              <option key={i} value={part}>{part}</option>
            ))}
          </select>

          {form.part === "Other" && (
            <Input
              fullWidth
              bordered
              label="Specify the problem"
              value={form.otherPart}
              onChange={handleChange('otherPart')}
            />
          )}

          {/* Car details */}
          <Input fullWidth bordered label="Car Make" onChange={handleChange('make')} value={form.make} />
                    <div className="section"></div>
          <Input fullWidth bordered label="Model" onChange={handleChange('model')} value={form.model} />
                  <div className="section"></div>
          <Input
            fullWidth
            bordered
            label="Year"
            select
            options={[{ text: "Select year", value: "" }, ...years]}
            onChange={handleChange('year')}
            value={form.year}
          />
  
          {/* Personal Information */}
          <RowFlexUi responsiveSmall gap={1} funcss="section">
            <div className="col">
              <IconicInput
                funcss=" full-width"
                leftIcon={<PiPaperPlaneRight className="text-primary" />}
                input={<Input type="email" label="Email" funcss="full-width" bordered value={form.email} onChange={handleChange('email')} />}
              />
            </div>
            <div className="col">
              <IconicInput
                funcss=" full-width"
                leftIcon={<PiUser className="text-primary" />}
                input={<Input type="text" label="Full Name" funcss="full-width" bordered value={form.name} onChange={handleChange('name')} />}
              />
            </div>
          </RowFlexUi>

          <RowFlexUi responsiveSmall gap={1} funcss="section">
            <div className="col">
              <IconicInput
                funcss=" full-width"
                leftIcon={<PiTextAlignCenter className="text-primary" />}
                input={<Input type="text" label="Subject" funcss="full-width" bordered value={form.subject} onChange={handleChange('subject')} />}
              />
            </div>
            <div className="col">
              <IconicInput
                funcss=" full-width"
                leftIcon={<PiPhone className="text-primary" />}
                input={<Input type="text" label="Phone" funcss="full-width" bordered value={form.phone} onChange={handleChange('phone')} />}
              />
            </div>
          </RowFlexUi>

          <div className="section text-center">
            <UiButton
            fullWidth
              text="SUBMIT YOUR REQUEST"
              endIcon={<PiPaperPlane />}
              bg="primary"
              fillAnimation
              outlined
              outlineSize={0.1}
              fillTextColor="dark900"
              onClick={Submit}
            />
          </div>
        </div>
      </div>
        <div id='contact' className="wrapper">

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
