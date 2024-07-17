import React from 'react';

function Contact() {
  return (
    <div className="d-flex justify-content-center align-items-center ">
      <div className="container">
        <div className="row justify-content-center">
          <div className="contact-info col-md-8 ">
            <h5><strong>CONTACT INFORMATION SCK-CLIMBING.</strong></h5>
            <hr />
            <ul className="list-unstyled">
              <li><strong>Address:</strong> 590 CMT8, P.11, Q.3, Tp.HCM.</li>
              <li><strong>Hotline:</strong> 0989 893 450 | 0931 313 329.h</li>
              <li><strong>Email:</strong> <a href="mailto:sinhndhcmr@gmail.com">sinhndhcmr@gmail.com</a> </li>
              <li><strong>Website:</strong> skc-climbing.com.vn</li>
            </ul>
          </div>
          <div className="map-container col-md-8 text-center mt-4 map-contact">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d489.9151569832225!2d106.66593221409872!3d10.786688556570452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ed23f3ea3f5%3A0x2ab5db2abff8cbaf!2zxJAuIEPDoWNoIE3huqFuZyBUaMOhbmcgOCwgUGjGsOG7nW5nIDExLCBRdeG6rW4gMywgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1720669446591!5m2!1svi!2s"
              width="100%"
              height="100%"
              className='map-contact1'
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
