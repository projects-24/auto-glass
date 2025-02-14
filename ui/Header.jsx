'use client'
import React, { useEffect, useState } from 'react'
import Text from 'funuicss/ui/text/Text'
import SectionUI from './section'
import BreadCrumb from 'funuicss/ui/breadcrumb/BreadCrumb'
import RowFlexUi from './RowFlex'
import Link from 'next/link'
import TextUi from './Text'
export default function Header({title, subtitle, uri}) {
    const [pathname, setpathname] = useState('')
    useEffect(() => {
        let res = window.location.pathname
        setpathname(res.slice(1, res.length).split('/'))
    }, [])
    
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
