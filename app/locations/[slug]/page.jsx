import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import HomeHero from '@/components/HomeHero'
import ContactUs from '@/components/Contact'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { locations, toSlug } from '@/functions/Functions'
import { autoGlassData, autoGlassBenefits, Services } from '@/app/data/services'
import { PiPlusCircle } from 'react-icons/pi'
import UiButton from '@/ui/button'

export function generateStaticParams() {
  return locations.map((loc) => ({ slug: toSlug(loc) }))
}

export function generateMetadata({ params }) {
  const location = locations.find((loc) => toSlug(loc) === params.slug)
  if (!location) return {}
  return {
    title: `Auto Glass Repair in ${location}`,
    description: `Professional windshield repair and replacement in ${location}, Ontario. Mobile service, lifetime warranty, and we pay up to 100% of your deductible. Book your free quote today!`,
    openGraph: {
      title: `Auto Glass Repair & Replacement in ${location} | AutoGlass Gurus`,
      description: `Serving ${location} with fast, certified auto glass repair. Same-day mobile service available.`,
    },
  }
}

export default function LocationPage({ params }) {
  const location = locations.find((loc) => toSlug(loc) === params.slug)
  if (!location) notFound()

  return (
    <div>
      <Nav />
      <HomeHero title={`Auto Glass Repair in ${location}`} />

      {/* Incentive cards */}
      <div className="wrapper central" data-aos="fade-up">
        <div className="row">
          {autoGlassData.map((doc, i) => (
            <div key={i} className="col sm-12 md-4 lg-3 padding margin-top-30">
              <div className="product-image hover-up pointer">
                <img src={doc.image} alt={doc.subtitle} className="width-80" />
              </div>
              <div className="margin-top-20">
                <div className="h5">{doc.subtitle}</div>
              </div>
              <div className="margin-top-10 article text-dark300">{doc.description}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Services */}
      <div className="wrapper dark800 text-dark central" data-aos="fade-up">
        <div>
          <div className="header" data-aos="fade-down">
            <h2 className="title">- Our Services in {location}</h2>
            <div className="section" />
            <div className="article h5">
              From minor chips to full windshield replacements, our expert team serves {location} and surrounding areas.
            </div>
          </div>
          {Services.map((doc, i) => (
            <div key={i} className="padding margin-top-30">
              <div className="row" style={{ flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
                <div className={`text-center col sm-12 ${i % 2 === 0 ? 'md-6' : 'md-6 order-md-2'}`}>
                  <div className="product-image hover-up pointer">
                    <img src={doc.image} alt={doc.name} className="company_image" />
                  </div>
                </div>
                <div className={`padding-20 col sm-12 ${i % 2 === 0 ? 'md-6' : 'md-6 order-md-1'}`}>
                  {doc.subtitle && <div className="h5 text-secondary margin-top-5">{doc.subtitle}</div>}
                  <div className="h3 text-bold">{doc.name}</div>
                  <div className="margin-top-10 article">{doc.description}</div>
                  <div className="section">
                    <Link href="/contact">
                      <UiButton text="Get a Quick Quote" qoute />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits */}
      <div className="wrapper central" data-aos="fade-up">
        <div className="header">
          <h2 className="title">- Why Choose AutoGlass Gurus in {location}?</h2>
        </div>
        <div className="row central section">
          <div className="col sm-12 md-12 lg-6 padding">
            {autoGlassBenefits.slice(0, Math.ceil(autoGlassBenefits.length / 2)).map((doc, i) => (
              <div key={i} className="row-flex section" style={{ gap: '0.5rem', alignItems: 'flex-start' }}>
                <PiPlusCircle className="text-primary" size={28} style={{ flexShrink: 0 }} />
                <div>
                  <div className="h4 text-bold">{doc.title}</div>
                  <div className="article text-dark300">{doc.description}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="col sm-12 md-12 lg-6 padding">
            {autoGlassBenefits.slice(Math.ceil(autoGlassBenefits.length / 2)).map((doc, i) => (
              <div key={i} className="row-flex section" style={{ gap: '0.5rem', alignItems: 'flex-start' }}>
                <PiPlusCircle className="text-primary" size={28} style={{ flexShrink: 0 }} />
                <div>
                  <div className="h4 text-bold">{doc.title}</div>
                  <div className="article text-dark300">{doc.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="wrapper">
        <div className="header">
          <h2 className="title">- Contact Us in {location}</h2>
          <div className="section" />
          <div className="article">
            Ready to book your auto glass repair in {location}? Reach out today and we'll get you sorted fast.
          </div>
        </div>
        <ContactUs />
      </div>

      <Footer />
    </div>
  )
}
