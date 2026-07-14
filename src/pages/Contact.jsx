import React from "react";
import PageBanner from "../components/PageBanner";
import contactBanner from "../assets/banners/contact-banner.png";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt
} from "react-icons/fa";

import "./Contact.css";


function Contact() {


  return (

    <>


      {/* Page Banner */}

      <PageBanner
        title="Contact Us"
        image={contactBanner}
      />




      {/* Contact Section */}


      <section className="contact-section">



        <div className="contact-container">



          {/* Contact Information */}


          <div className="contact-info">


            <h2>
              Get In Touch
            </h2>


            <p>
              Have a project idea or need a technology solution?
              Contact us and our team will help you with the
              right digital solution.
            </p>




            <div className="contact-item">


              <div className="contact-icon">

                <FaPhoneAlt />

              </div>


              <div>

                <h4>
                  Phone
                </h4>


                <p>
                  +91 98765 43210
                </p>

              </div>


            </div>





            <div className="contact-item">


              <div className="contact-icon">

                <FaEnvelope />

              </div>


              <div>

                <h4>
                  Email
                </h4>


                <p>
                  info@yourcompany.com
                </p>

              </div>


            </div>





            <div className="contact-item">


              <div className="contact-icon">

                <FaMapMarkerAlt />

              </div>


              <div>

                <h4>
                  Address
                </h4>


                <p>
                  Hyderabad, Telangana, India
                </p>

              </div>


            </div>



          </div>







          {/* Contact Form */}



          <div className="contact-form">


            <h2>
              Send Message
            </h2>



            <form>


              <input

                type="text"

                placeholder="Your Name"

              />



              <input

                type="email"

                placeholder="Your Email"

              />



              <input

                type="text"

                placeholder="Subject"

              />



              <textarea

                rows="5"

                placeholder="Your Message"

              ></textarea>




              <button type="submit">

                Send Message

              </button>



            </form>



          </div>





        </div>




      </section>




    </>

  );

}


export default Contact;