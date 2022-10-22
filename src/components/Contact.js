import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";

import { FaRegEnvelope } from "react-icons/fa";


function Contact() {
  return (
    <>
      <div className="container">
        <section className="mb-4">

            <h2 className="h1-responsive font-weight-bold text-center my-4 p-3">Contact us</h2>
            <p className="text-center w-responsive mx-auto mb-5">
              Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                a matter of hours to help you.
            </p>

            <div className="row">

                <div className="col-md-9 mb-md-0 mb-5">
                    <form id="contact-form" name="contact-form" action="" method="POST">

                        <div className="row">
                            <div className="col-md-6">
                                <div className="md-form mb-0">
                                    <input type="text" id="name" name="name" className="form-control"/>
                                    <label for="name" className="">Your name</label>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="md-form mb-0">
                                    <input type="text" id="email" name="email" className="form-control"/>
                                    <label for="email" className="">Your email</label>
                                </div>
                            </div>

                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <div className="md-form mb-0">
                                    <input type="text" id="subject" name="subject" className="form-control"/>
                                    <label for="subject" className="">Subject</label>
                                </div>
                            </div>
                        </div>

                        <div className="row">

                            <div className="col-md-12">

                                <div className="md-form">
                                    <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                                    <label for="message">Your message</label>
                                </div>

                            </div>
                        </div>
                    </form>

                    <div className="text-center text-md-left">
                        <input type="submit" className="btn btn-primary"/>
                    </div>
                    <div className="status"></div>
                </div>

                <div className="col-md-3 text-center">
                    <ul className="list-unstyled mb-0">
                        <li>
                            <FaMapMarkerAlt/>
                            <p>San Francisco, CA 94126, USA</p>
                        </li>

                        <li>
                            <FaPhone/>
                            <p>+ 01 234 567 89</p>
                        </li>

                        <li>
                            <FaRegEnvelope/>
                            <p>contact@mdbootstrap.com</p>
                        </li>
                    </ul>
                </div>

            </div>

        </section>
      </div>
    </>
  );
}

export default Contact;