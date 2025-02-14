import RowFlexUi from '@/ui/RowFlex'
import React from 'react'
import { PiFacebookLogo, PiInstagramLogo } from 'react-icons/pi'

export default function Footer() {
  return (
    <div>
    <div className="  dark  padding-20">
      <div className="width-1000-max center">
        <div>
          <RowFlexUi gap={1} justify='center'>
            <div className="text-bold">Follow Us</div>
            <div></div> 
            <a >
              <div className="dark100 pointer hover-up  central width-40 height-40">
                <PiFacebookLogo size={20}/>
              </div>
             </a>
           <a >
            <div className="dark100 pointer hover-up  central width-40 height-40">
             <PiInstagramLogo size={20}  />
            </div>
           </a>
        
          
          </RowFlexUi>
       
        </div>
        <div className="section2 text-center text-minified uppercase padding-top-40 padding-bottom-40"style={{borderTop:' 0.1rem solid #303030'}} >
          ©autoglass - All Rights Reserved | Privacy Policy | Terms of Service
        </div>
      </div>
    </div></div>
  )
}
