'use client'
import Hero from '@/components/Hero'
import Nav from '@/components/Nav'
import React, { useEffect, useRef, useState } from 'react'
import { PiPaperPlaneRight , PiKey, PiCheck, PiUser, PiPhone, PiTextAlignCenter, PiTextAlignJustify, PiPaperPlane } from 'react-icons/pi';
import Input from '@/ui/input'
import IconicInput from 'funuicss/ui/input/Iconic'
import RowFlexUi from '@/ui/RowFlex';
import UiButton from '@/ui/button';
import TextUi from '@/ui/Text';
import { companyEmail, primaryPhone } from '@/functions/Functions';
import { trackLead } from '@/functions/analytics';
import { validateVin, formatVinForEmail } from '@/functions/vin.mjs';
import { formatVpicForEmail } from '@/functions/vpic.mjs';
import useVinLookup from '@/functions/useVinLookup';
import VinFeedback from '@/components/VinFeedback';
import emailjs from '@emailjs/browser';
import Loader from '@/ui/Loader';
import Alert from 'funuicss/ui/alert/Alert'
import ContactUs from '@/components/Contact';

export default function Contact() {
  const [message, setmessage] = useState(0)
  const [alert_state, setalert_state] = useState("")
  const [showOther, setshowOther] = useState(false)
  const [isLoading, setisLoading] = useState(false)
  const submissionInFlight = useRef(false)
  const [form, setForm] = useState({
    part: '',
    otherPart: '',
    make: '',
    model: '',
    year: '',
    registration: '',
    email: '',
    name: '',
    city: '',
    phone: '',
    insuranceCoverage: '',
    message: '',
    vin: '',
  });
  const vinValidation = validateVin(form.vin);
  const { lookup: vinLookup, getLookup: getVinLookup } = useVinLookup(form.vin);
const [attachmentBase64, setAttachmentBase64] = useState('');

useEffect(() => {
      // Keep delivery errors visible until the visitor retries.
      if (!message || alert_state === 'danger') return;
      const timeout = setTimeout(() => {
        setmessage('');
        setalert_state(false);
      }, 5000);

  return () => {
    clearTimeout(timeout)
  }
}, [message, alert_state])


// const handleFileChange = (e) => {
//   const file = e.target.files[0];
//   const reader = new FileReader();
//   reader.onloadend = () => {
//     setAttachmentBase64(reader.result.split(',')[1]); // Strip the "data:image/png;base64," prefix
//   };
//   if (file) reader.readAsDataURL(file);
// };

  const CarParts = [
    "Windshield",
    "Rear Windshield",
    "Front Door Glass",
    "Driver Rear Door Glass",
    "Passenger Rear Door Glass",
    "Front Quarter Glass",
    "Driver Rear Quarter Glass",
    "Passenger Rear Quarter Glass",
    "Rear Quarter Glass",
    "Chip Repair",
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

const Submit = async () => {
  if (submissionInFlight.current) return;

  // Validate required fields
  if (
    !form.name.trim() ||
    !form.email.trim() ||
    !form.phone.trim()
  ) {
    setmessage('Please Enter your Name, Email & Contact!')
    setalert_state("warning")
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    setmessage('Please enter a valid email address.');
    setalert_state('warning');
    return;
  }

  submissionInFlight.current = true;
  setisLoading(true);
  setmessage('');
  setalert_state('');
  const submittedVinLookup = await getVinLookup(form.vin);
const templateParams = {
  email: companyEmail,
  name: form.name,
  message: `
🔧 NEW WINDSHIELD REPAIR QUOTE REQUEST 🔧

📌 CLIENT INFORMATION
========================
👤 Name         : ${form.name || 'Not provided'}
📧 Email        : ${form.email || 'Not provided'}
📞 Phone        : ${form.phone || 'Not provided'}
🏙️ City         : ${form.city || 'Not provided'}

🚗 VEHICLE DETAILS
========================
🏷️ Make         : ${form.make || 'Not provided'}
🚘 Model        : ${form.model || 'Not provided'}
📅 Year         : ${form.year || 'Not provided'}
🔢 VIN Number   : ${formatVinForEmail(form.vin)}

${formatVpicForEmail(form, submittedVinLookup)}

🛠️ REPAIR REQUEST
========================
🔩 Requested Part  : ${form.part === 'Other' ? form.otherPart : form.part || 'Not specified'}
🛡️ Insurance       : ${form.insuranceCoverage || 'Not specified'}
🗒️ Additional Notes: ${form.message || 'None'}

📍 Submitted via the company website.
  `,
};


  try {
    await emailjs.send(
      'service_1nwb6jp',        // AutoGlass Gurus Gmail service
      'template_n6qqkze',       // AutoGlass Gurus quote template
      templateParams,
      { publicKey: '3xog12vb0S0C1QZGO' }
    );
  } catch (err) {
    // EmailJS rejects with { status, text }, rather than a standard Error.
    console.error('Email sending failed:', err?.status, err?.text || err?.message || err);
    const reason = err?.status === 429
      ? 'Too many requests. Please wait a minute before trying again.'
      : err?.status === 0 || err instanceof TypeError
        ? 'Unable to connect. Please check your internet connection and try again.'
        : 'Our quote form is temporarily unavailable.';
    const diagnostic = process.env.NODE_ENV === 'development' && err?.text
      ? ` EmailJS: ${err.text}`
      : '';
    setmessage(`${reason} Your details have been kept. You can also call ${primaryPhone.display} or email ${companyEmail}.${err?.status ? ` (Reference: ${err.status})` : ''}${diagnostic}`);
    setalert_state('danger');
    return;
  } finally {
    submissionInFlight.current = false;
    setisLoading(false);
  }

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
    registration: '',
    email: '',
    name: '',
    city: '',
    phone: '',
    insuranceCoverage: '',
    vin:'',
    message:""
  });

  // A tracking failure must never turn a delivered quote into a failed submission.
  try {
    trackLead({ method: 'quote_form', city: form.city || undefined });
  } catch (err) {
    console.warn('Quote submitted, but conversion tracking failed:', err);
  }
};



  return (
    <div>
      {
        isLoading && 
        <Loader />
      }
        <Nav />

        <Hero
        hero={"Get a Free Quote Online"}
        body={`     Let us help you with your auto glass needs. Contact us today to schedule your repair or replacement!`}
        />
  <div style={{ minHeight: "100vh" }} className="flex dark900 text-dark round-edge">
        <div className="width-600-max center">
               <RowFlexUi gap={1} justify='center'>
            <img className="width-90" src="/reviewed.png" alt="" />
            <img className="width-90" src="/guaranteed.png" alt="" />
          </RowFlexUi>
          <div className="text-center section margin-bottom-50">
            <TextUi text="Request a Quote" size="bigger" />
            <p className="article">Fill in your details below to get started</p>
          </div>

          {/* Car part selection */}
          <select
            className="input section central borderedInput pointer hover-up round-edge full-width"
            onChange={handleChange('part')}
            value={form.part}
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
              hint="e.g. side window, rear window, or any other part not listed"
            />
          )}

          {/* Car details */}
          <Input fullWidth bordered label="Car Make" onChange={handleChange('make')} value={form.make} hint="e.g. Toyota, Ford, Honda" />
                    <div className="section"></div>
          <Input fullWidth bordered label="Model" onChange={handleChange('model')} value={form.model} hint="e.g. Camry, Mustang, Civic" />
                  {/* <div className="section"></div>
          <Input fullWidth bordered label="Attachment" type="file" accept="image/*" onChange={handleFileChange} hint="Attach a photo of the damaged part" /> */}

                  <div className="section"></div>
          <Input
            fullWidth
            bordered
            label="Year"
            select
            options={[{ text: "Select year", value: "" }, ...years]}
            onChange={handleChange('year')}
            value={form.year}
            hint="Year of the car"
          />

                  <div className="section"></div>
          <Input
            fullWidth
            bordered
            label="VIN Number (Recommended)"
            id="vin"
            aria-label="VIN number"
            aria-describedby="vin-validation"
            aria-invalid={vinValidation.status === 'invalid'}
            autoCapitalize="characters"
            spellCheck={false}
            onChange={handleChange('vin')}
            value={form.vin}
            hint="17-character vehicle identification number"
          />
          <VinFeedback validation={vinValidation} lookup={vinLookup} form={form} />
  
          {/* Personal Information */}
          <RowFlexUi responsiveSmall gap={1} funcss="section">
            <div className="col">
               <Input required type="email" label="Email" funcss="full-width" bordered value={form.email} onChange={handleChange('email')} hint="We'll send you a quote and follow up with you" />
            </div>
            <div className="col">
             <Input required type="text" label="Name" funcss="full-width" bordered value={form.name} onChange={handleChange('name')} hint="Your full name please" />
            </div>
          </RowFlexUi>

          <RowFlexUi responsiveSmall gap={1} funcss="section">
            <div className="col">
             <Input type="text" required label="city" funcss="full-width" bordered value={form.city} onChange={handleChange('city')} hint="City or Town" />
            </div>
            <div className="col">
          <Input  type="text" required label="Phone" funcss="full-width" bordered value={form.phone} onChange={handleChange('phone')} hint="Your phone number, please" />
            </div>
          </RowFlexUi>
          <div className="section"></div>
          <Input
            fullWidth
            bordered
            label="Insurance Coverage?"
            select
            options={[
              { text: "Select an option", value: "" },
              { text: "Yes, deal with insurance directly", value: "Yes, deal with insurance directly" },
              { text: "No, self-pay / transparent rate", value: "No, self-pay / transparent rate" },
            ]}
            onChange={handleChange('insuranceCoverage')}
            value={form.insuranceCoverage}
            hint="Choose how you would like to handle payment"
          />
          <div className="section"></div>
          <Input
            fullWidth
            bordered
            label="Message"
            onChange={handleChange('message')}
            value={form.message}
            multiline
            rows={5}
            hint="Any additional information you'd like to provide"
          />
          {message && (
            <div role="alert" className="section">
              <Alert standard card message={message} type={alert_state || 'info'} />
            </div>
          )}
          <div className="section text-center">
            <UiButton
              fullWidth
              text="SUBMIT YOUR REQUEST"
              endIcon={<PiPaperPlane />}
              qoute
              onClick={Submit}
              disabled={isLoading}
            />
          </div>
        </div>
      </div>
        <div id='contact' className="wrapper">

  <div className="contain">
     
      <div>
 


               <div className="header margin-top-100" >
          <h2 className="title">
    {`Don’t Hesitate To Contact Us`}
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
