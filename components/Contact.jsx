'use client'
import React from 'react'
import { phoneNumbers, companyEmail } from '@/functions/Functions'
import { trackCall, trackLead } from '@/functions/analytics'

export default function ContactUs({ location = "Etobicoke" }) {
  return (
    <div>
      <div className="section4">
        <div className="row central" style={{ alignItems: 'flex-start' }}>
          <div className="col sm-12 md-6 lg-6 padding">
            <div className="padding border round-edge">
              <h6 className="text-bold text-p margin-bottom-10 text-minified uppercase">Location:</h6>
              {location}, Canada
            </div>
          </div>
          <div className="col sm-12 md-6 lg-6 padding">
            <div className="border padding round-edge">
              <h6 className="text-bold text-p margin-bottom-10 text-minified uppercase">Call Us:</h6>
              {phoneNumbers.map((phone) => (
                <h5 key={phone.tel} className="margin-bottom-5">
                  <a href={`tel:${phone.tel}`} onClick={() => trackCall(phone.tel)}>{phone.display}</a>
                </h5>
              ))}
            </div>
          </div>
          <div className="col sm-12 md-6 lg-6 padding">
            <div className="padding border round-edge">
              <h6 className="text-bold text-p margin-bottom-10 text-minified uppercase">Email:</h6>
              <h5>
                <a href={`mailto:${companyEmail}`} onClick={() => trackLead({ method: 'email' })}>{companyEmail}</a>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
