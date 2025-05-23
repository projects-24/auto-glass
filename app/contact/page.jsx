'use client'
import Hero from '@/components/Hero'
import Nav from '@/components/Nav'
import React, { useEffect, useState } from 'react'
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
import ContactUs from '@/components/Contact';

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
    message: '',
    vin: '',
  });
const [attachmentBase64, setAttachmentBase64] = useState('');

useEffect(() => {
      setTimeout(() => {
        setmessage('');
        setalert_state(false);
      }, 5000);

  return () => {
    clearTimeout()
  }
}, [alert_state])


// const handleFileChange = (e) => {
//   const file = e.target.files[0];
//   const reader = new FileReader();
//   reader.onloadend = () => {
//     setAttachmentBase64(reader.result.split(',')[1]); // Strip the "data:image/png;base64," prefix
//   };
//   if (file) reader.readAsDataURL(file);
// };

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
    "chip repair",
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
    !form.email ||
    !form.phone 
  ) {
    setmessage('Please Enter you email and contact!')
    setalert_state("warning")
    return;
  }

  setisLoading(true);
  let testEmail =  "abdulwahabiddris08@gmail.com" 
  const templateParams = {
  email: companyEmail,
  name: form.name,
  //  'my_file': attachmentBase64 ,
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
📅 Vin Number : ${form.vin}

🛠️ REPAIR REQUEST
========================
🧩 Requested Part : ${form.part}
🗒️ Additional Notes: ${form.message || 'None'}

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
        vin:'',
        message:""
      });

      // Stop loading
      setisLoading(false);

      // Hide message after 5 seconds

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
                  {/* <div className="section"></div>
          <Input fullWidth bordered label="Attachment" type="file" accept="image/*" onChange={handleFileChange} /> */}

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

                  <div className="section"></div>
          <Input
            fullWidth
            bordered
            label="VIN Number (Recommended)"
            onChange={handleChange('vin')}
            value={form.vin}
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
                input={<Input  type="text" label="Phone" funcss="full-width" bordered value={form.phone} onChange={handleChange('phone')} />}
              />
            </div>
          </RowFlexUi>
          <div className="section"></div>
          <Input
            fullWidth
            bordered
            label="Message"
            onChange={handleChange('message')}
            value={form.message}
            multiline
            rows={5}
          />
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
    
        <ContactUs />
      </div>

  </div>
</div>

    {/* <div className="margin-top-40 padding">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.678901234567!2d-89.12345678901234!3d39.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDA3JzI0LjQiTiA4OcKwMDcnMjQuNCJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div> */}
    </div>
  )
}
