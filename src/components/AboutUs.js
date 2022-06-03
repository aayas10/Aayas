import { Component } from "react";
import './aboutus.css';
import emailjs from 'emailjs-com';
import { useRef } from 'react';
// import emailjs from '@emailjs/browser';

// export const A = () => {
//     const form = useRef();
  
//     const sendEmail = (e) => {
//       e.preventDefault();
// emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
//   .then((result) => {
//       console.log(result.text);
//   }, (error) => {
//       console.log(error.text);
//   });
// };

function AboutUs() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_c9k5fw2', 'template_yulcfyg', form.current, 'JCZQ-u4zj3wKpx037')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          alert("Email Send");
      };
        return (
            

            <section id="new-arrivals" className="new-arrivals" >
                <section className="ftco-section">
                    <div className="container">
                        <div class="row justify-content-center">
                            <div class="col-md-6 text-center mb-5">
                                <h2 style={{textAlign:"center "}} class="heading-section">Contact Us</h2>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-10 col-md-12">
                                <div className="wrapper">
                                    <div className="row no-gutters">
                                        <div className="col-md-7 d-flex align-items-stretch">
                                            <div style={{textAlign:"center "}} className="contact-wrap w-100 p-md-5 p-4">
                                                <h3 className="mb-4">Get in touch</h3>
                                                <div id="form-message-warning" className="mb-4" />
                                                <div id="form-message-success" className="mb-4">
                                                    Your message was sent, thank you!
                                                </div>
                                                <form method="POST" id="contactForm" name="contactForm" ref={form} onSubmit={sendEmail}>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <input type="text" className="form-control" name="name" id="name" placeholder="Name" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <input type="email" className="form-control" name="email" id="email" placeholder="Email" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="form-group">
                                                                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="form-group">
                                                                <textarea name="message" className="form-control" id="message" cols={30} rows={7} placeholder="Message" defaultValue={""} />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="form-group">
                                                                <input type="submit" Value="Send Message" className="btn btn-info" />
                                                                <div className="submitting" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="col-md-5 d-flex align-items-stretch">
                                            <div className="info-wrap bg-primary w-100 p-lg-5 p-4">
                                                <h3 style={{textAlign:"center "}} className="mb-4 mt-md-4">Contact us</h3>
                                                <div className="dbox w-100 d-flex align-items-start">
                                                    <div className="icon d-flex align-items-center justify-content-center">
                                                        <span className="fa fa-map-marker" />
                                                    </div>
                                                    <div className="text pl-3 mt-4">
                                                        <p><span>Address: Kathmandu, Nepal</span></p>
                                                    </div>
                                                </div>
                                                <div className="dbox w-100 d-flex align-items-center">
                                                    <div className="icon d-flex align-items-center justify-content-center">
                                                        <span className="fa fa-phone" />
                                                    </div>
                                                    <div className="text pl-3">
                                                        <p><span>Phone:</span> <a href="tel://9840311568">+ 977 9840311568</a></p>
                                                    </div>
                                                </div>
                                                <div className="dbox w-100 d-flex align-items-center">
                                                    <div className="icon d-flex align-items-center justify-content-center">
                                                        <span className="fa fa-paper-plane" />
                                                    </div>
                                                    <div className="text pl-3">
                                                        <p><span>Email:</span> <a href="mailto:aayaspaudel62@gmail.com">aayaspaudel62@gmail.com</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

               
                  

            </section>


        )
    // }
}

export default AboutUs;