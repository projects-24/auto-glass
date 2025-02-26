import UiButton from '@/ui/button'
import Link from 'next/link'
import React from 'react'
import { PiCalendar } from 'react-icons/pi'
import Image from 'next/image'
import Logo from '@/ui/Logo'
export default function Nav() {
  return (
    <div> <div class="navtop white">
    <div >
      <span className="h4">+1 647-708-4226 || +1 (905) 226-4226</span>
    </div>
    <div class="hline"></div>
    <div >
      <a href="mailto:info@autoglassgurus.ca"  >info@autoglassgurus.ca</a>
    </div>
  </div>
  <div class="nav_bar ">
     {/* Logo with Image */}
     <a href="#home">
          <Logo />
        </a>

  <div class="hide-small">
    <div class="row-flex gap">
      <a href="#home" class="nav_link text-white  text-minified">Home</a>
      <a href="#about" class="nav_link text-white  text-minified">About</a>
      <a href="#services" class="nav_link text-white  text-minified">Services</a>
      <a href="#testimonials" class="nav_link text-white  text-minified">Testimonials</a>
      <a href="#contact" class="nav_link text-white  text-minified">Contact</a>
    </div>
  </div>
    <div>
     <div class="row-flex ">
      <div>
        <Link href={""}>
        <UiButton 
      text={"Book an Appointment"}
      bg='gradient'
       flat
      startIcon={<PiCalendar />}
      />
        </Link>
    
      </div>
     </div>
    </div>
  </div>
</div>
  )
}
