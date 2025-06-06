import TextUi from '@/ui/Text'
import React from 'react'

export default function Hero({hero , body}) {
  return (
          <div className="home hero">
          <div className="homeTab text-white text-center center" >
                 <div className="width-700-max center fit" >
            
                 <TextUi
                      text={hero || "Your Safety, Our Priority"}
                      block
                      lineHeight="100%"
                      size="jumbo"
                      color={"white"}
                    />
                 <TextUi
                      text={body || ''}
                      color={"white"}
                      article
                    />
        
                 </div>
                  </div>
        </div>
  )
}
