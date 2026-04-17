'use client'
import Link from 'next/link'
import { PiPhone } from 'react-icons/pi'
import TextUi from '@/ui/Text'
import UiButton from '@/ui/button'

export default function HomeHero({ title = "Get Your Windshield Repaired" }) {
  return (
    <div className="home">
      <div className="homeTab text-white text-center center">
        <div>
          <TextUi
            text={title}
            block
            lineHeight="100%"
            size="jumbo"
            color="white"
          />

          <div className="article section">
            <div><div>💸 We Pay Up To <strong>100%</strong> Of Your <span className="text-bold">Deductible</span></div></div>
            <div><div>🛡️ Lifetime Auto Glass Repair <span className="text-bold">Warranty</span></div></div>
            <div><div>🔧 We Will Beat Any Competitor <span className="text-bold">By 10%!</span></div></div>
            <div><div>🇨🇦 Canadian Owned &amp; Operated</div></div>
          </div>

          <div style={{ marginTop: "30px" }}>
            <Link href="/contact">
              <UiButton
                text="GET A FREE QUOTE ONLINE"
                qoute
                big
              />
            </Link>
          </div>

          <div className="text-center" style={{ marginTop: "30px" }}>
            <div>
              <TextUi text="call us now!" color="white" />
            </div>
            <Link href="tel:+437-436-7669">
              <UiButton
                startIcon={<PiPhone />}
                color="white"
                big
                text={<TextUi text="+437-436-7669" color="white" heading="h2" light />}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
