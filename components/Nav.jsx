import UiButton from '@/ui/button'
import Link from 'next/link'
import React from 'react'
import { PiCalendar, PiPhone } from 'react-icons/pi'
import Image from 'next/image'
import Logo from '@/ui/Logo'
import RowFlexUi from '@/ui/RowFlex'
import TextUi from '@/ui/Text'
export default function Nav() {
  return (
    <div> <div class="navtop white">
          {/* Logo with Image */}
     <div className="hide-small">
      <a href="/#home">
          <Logo />
        </a>
     </div>
    <div >
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
          heading='h3'
          block 
          funcss='hide-small'
          />
              <TextUi
          text="+1 647-708-4226"
          block 
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
          heading='h3'
                block 
          funcss='hide-small'
          />
              <TextUi
          text="+1 (905) 226-4226"
                block 
          funcss='show-small'
          />
        </div>
        </RowFlexUi>
      </RowFlexUi>
    </div>
    <div className='hide-small' >
      <a href="mailto:info@autoglassgurus.ca"  className='text-primary'>info@autoglassgurus.ca</a>
    </div>
  </div>
  <div class="nav_bar ">
 
<div className="show-small">
       <a href="/#home">
          <Logo />
        </a>
</div>
  <div class="hide-small">
    <div class="row-flex gap">
      <a href="/contact" class="nav_link text-white  text-minified">Home</a>
      <a href="/#about" class="nav_link text-white  text-minified">About</a>
      <a href="/#services" class="nav_link text-white  text-minified">Services</a>
      <a href="/#testimonials" class="nav_link text-white  text-minified">Testimonials</a>
      <a href="/#contact" class="nav_link text-white  text-minified">Contact</a>
    </div>
  </div>
    <div>
     <div class="row-flex ">
      <div>
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
     </div>
    </div>
  </div>
</div>
  )
}
