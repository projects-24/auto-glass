import React from 'react'

export default function ContactUs() {
  return (
    <div>
      <div className="section4">
        <div className="row central" style={{ alignItems: 'flex-start' }}>
          <div className="col sm-12 md-6 lg-6 padding">
            <div className="padding border round-edge">
              <h6 className="text-bold text-p margin-bottom-10 text-minified uppercase">Location:</h6>
              Toronto, Canada
            </div>
          </div>
          <div className="col sm-12 md-6 lg-6 padding">
            <div className="border padding round-edge">
              <h6 className="text-bold text-p margin-bottom-10 text-minified uppercase">Call Us:</h6>
              <h5>
                <a href="tel:+1 437-436-7669">+1 (905) 226-4226</a>
              </h5>
            </div>
          </div>
          <div className="col sm-12 md-6 lg-6 padding">
            <div className="padding border round-edge">
              <h6 className="text-bold text-p margin-bottom-10 text-minified uppercase">Email:</h6>
              <h5>
                <a href="mailto:info@autoglassgurus.ca">info@autoglassgurus.ca</a>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

