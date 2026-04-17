'use client'
import React from 'react'
import Text from 'funuicss/ui/text/Text'
import SectionUI from './section'
import BreadCrumb from 'funuicss/ui/breadcrumb/BreadCrumb'
import RowFlexUi from './RowFlex'
import Link from 'next/link'
import TextUi from './Text'
import { usePathname } from 'next/navigation'
export default function Header({title, subtitle, uri}) {
    const raw = usePathname()
    const pathname = raw ? raw.slice(1).split('/') : []
    
  return (
  <div>
      <div className='dark900 text-dark padding-20 roundEdgeSmall'>
    <RowFlexUi>
      <div className='col'>
      <div>
        <Text
        text={'-' + title || ''}
        color='dark300'
        bold
        size='bigger'
        />
   {
    subtitle &&
    <div className="width-600-max  fit">
    <Text
       text={subtitle || ''}
       color='dark400'
       block
       article
       />
    </div>
   }
        </div>
        <SectionUI gap={1.5}/>
        <RowFlexUi>
        <Link href="/" legacyBehavior>
            <TextUi text='Profile' bold color='primary'/>
        </Link>
   
        {
            pathname &&
            pathname.map((res , index) => (
              <div key={index}>
                <BreadCrumb type={"straight"} />
                  <Link href={`/${res}`} >
                    {res}
                </Link>
              </div>
            ))
        }
     
        </RowFlexUi>
      </div>
      <div>
        <img src={uri ? uri : "/svg/Virus-precautions.svg"} className='width-200' alt="" />
      </div>
    </RowFlexUi>
    </div>
    <SectionUI gap={4}/>
  </div>
  )
}
