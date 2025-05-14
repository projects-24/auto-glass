import UiButton from '@/ui/button'
import Link from 'next/link'
import React from 'react'
import { PiCalendar, PiPhone, PiWhatsappLogo } from 'react-icons/pi'
import Image from 'next/image'
import Logo from '@/ui/Logo'
import RowFlexUi from '@/ui/RowFlex'
import TextUi from '@/ui/Text'
import LandbotLoader from './LandbotLoader'
export default function Nav() {
  return (
    <div> 
      <LandbotLoader />
      <div className="whatsappBtn">
        <PiWhatsappLogo size={25}/>
        <div>
         whatsApp Us
        </div>
      </div>
      <div class="navtop white">
          {/* Logo with Image */}
     <div >
      <a href="/#home">
          <Logo />
        </a>
     </div>
    <div className='hide-small'>
      <RowFlexUi gap={1}>
        <RowFlexUi gap={0.1}>
          <PiPhone size={30} className='text-primary' />
        <div>
              <TextUi
          text="Place a call"
          size='smaller'
          bold
          uppercase
          color={'primary'}
          />
              <TextUi
          text="+1 647-708-4226"
          heading='h5'
          funcss='hide-small'
          />
              <TextUi
          text="+1 647-708-4226"
          funcss='show-small'
          />
        </div>
        </RowFlexUi>
        <RowFlexUi gap={0.1}>
          <PiPhone size={30} className='text-primary' />
        <div>
              <TextUi
          text="Place a call"
          size='smaller'
          bold
          uppercase
          color={'primary'}
          />
              <TextUi
          text="+1 (905) 226-4226"
          heading='h5'
          funcss='hide-small'
          />
              <TextUi
          text="+1 (905) 226-4226"
          funcss='show-small'
          />
        </div>
        </RowFlexUi>
      </RowFlexUi>
    </div>
    <div className='hide-small' >
      <a href="mailto:info@autoglassgurus.ca"  className='text-primary'>info@autoglassgurus.ca</a>
    </div>

      <div className='show-small'>
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
  <div class="nav_bar ">
 
  <div class="hide-small">
    <div class="row-flex gap">
      <a href="/" class="nav_link text-white  text-minified">Home</a>
      <a href="/#about" class="nav_link text-white  text-minified">About</a>
      <a href="/#services" class="nav_link text-white  text-minified">Services</a>
      <a href="/#testimonials" class="nav_link text-white  text-minified">Testimonials</a>
      <a href="/#contact" class="nav_link text-white  text-minified">Contact</a>
    </div>
  </div>
    <div>
      <div className='hide-small'>
        <Link href={"/contact"}>
        <UiButton 
      text={"Get a Quick Qoute"}
      bg='white'
        fillAnimation 
   outlined 
   outlineSize={0.1}
   fillTextColor='primary' 
      />
        </Link>
    
      </div>
          <div className='show-small'>
      <RowFlexUi gap={1}>
        <RowFlexUi gap={0.1}>
          <PiPhone size={20} className='text-white' />
        <div>
              <TextUi
          text="+1 647-708-4226"
          color={"white"}
          />
        </div>
        </RowFlexUi>
        <RowFlexUi gap={0.1}>
            <PiPhone size={20} className='text-white' />
        <div>
              <TextUi
          text="+1 (905) 226-4226"
          color={"white"}
          />
        </div>
        
        </RowFlexUi>
      </RowFlexUi>
    </div>
   
    </div>
  </div>
</div>
  )
}
