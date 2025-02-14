import UiButton from '@/ui/button'
import Link from 'next/link'
import React from 'react'
import { PiCalendar } from 'react-icons/pi'

export default function Nav() {
  return (
    <div> <div class="navtop dark50">
    <div >
      Call / WhatsApp: <span className="text-bold">+233 00988889</span>
    </div>
    <div class="hline"></div>
    <div >
      <a href="mailto:admin@gmail.com"  class="text-white">username@gmail.com</a>
    </div>
  </div>
  <div class="nav_bar card">
     <a href="#home"> Logo</a>
  <div class="hide-small">
    <div class="row-flex gap">
      <a href="#home" class="nav_link text-dark400  text-minified">Home</a>
      <a href="#about" class="nav_link text-dark400  text-minified">About</a>
      <a href="#services" class="nav_link text-dark400  text-minified">Services</a>
      <a href="#testimonials" class="nav_link text-dark400  text-minified">Testimonials</a>
      <a href="#contact" class="nav_link text-dark400  text-minified">Contact</a>
    </div>
  </div>
    <div>
     <div class="row-flex ">
      <div>
        <Link href={""}>
        <UiButton 
      text={"Book an Appointment"}
      bg='gradient'
      raised 
      startIcon={<PiCalendar />}
      rounded
      />
        </Link>
    
      </div>
     </div>
    </div>
  </div>
</div>
  )
}
