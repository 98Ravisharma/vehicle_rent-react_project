import React, { useState } from "react";
import WEBSITE from "../Constant/constant";

import db from "../firebase";
import { collection, addDoc } from "firebase/firestore";

function Contact() {

  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [subject, setSubject] = useState(null);
  const [message, setMessage] = useState(null);

  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async () => {
    setIsSending(true);
    try {

      const docRef = await addDoc(collection(db, "tbl_contact_us"), {
        name: name,
        email:email,
        subject:subject,
        message:message
      });
      console.log("Document written with ID: ", docRef.id);

      alert("Request Submitted !");
      window.location.replace("./contact");
    } catch (error) {
      console.log("Unable to submit contact form " + error)
    }
    setIsSending(false);
  }


  return (
    <>
      {/* Contact Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 600 }}
          >
            <h1 className="mb-3">Contact Us</h1>
            <p>
              {WEBSITE.about.desc}
            </p>
          </div>
          <div className="row g-4">
            <div className="col-12">
              <div className="row gy-4">
                <div
                  className="col-md-6 col-lg-4 wow fadeIn"
                  data-wow-delay="0.1s"
                >
                  <div className="bg-light rounded p-3">
                    <div
                      className="d-flex align-items-center bg-white rounded p-3"
                      style={{ border: "1px dashed rgba(0, 185, 142, .3)" }}
                    >
                      <div
                        className="icon me-3"
                        style={{ width: 45, height: 45 }}
                      >
                        <i className="fa fa-map-marker-alt text-primary" />
                      </div>
                      <span>{WEBSITE.address}</span>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-6 col-lg-4 wow fadeIn"
                  data-wow-delay="0.3s"
                >
                  <div className="bg-light rounded p-3">
                    <div
                      className="d-flex align-items-center bg-white rounded p-3"
                      style={{ border: "1px dashed rgba(0, 185, 142, .3)" }}
                    >
                      <div
                        className="icon me-3"
                        style={{ width: 45, height: 45 }}
                      >
                        <i className="fa fa-envelope-open text-primary" />
                      </div>
                      <span>{WEBSITE.email}</span>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-6 col-lg-4 wow fadeIn"
                  data-wow-delay="0.5s"
                >
                  <div className="bg-light rounded p-3">
                    <div
                      className="d-flex align-items-center bg-white rounded p-3"
                      style={{ border: "1px dashed rgba(0, 185, 142, .3)" }}
                    >
                      <div
                        className="icon me-3"
                        style={{ width: 45, height: 45 }}
                      >
                        <i className="fa fa-phone-alt text-primary" />
                      </div>
                      <span>{WEBSITE.phone}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <iframe
                className="position-relative rounded w-100 h-100"
                src="https://maps.google.com/maps?q=30.9010,75.8573&hl=es;z=14&output=embed"
                frameBorder={0}
                style={{ minHeight: 400, border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex={0}
              />
            </div>
            <div className="col-md-6">
              <div className="wow fadeInUp" data-wow-delay="0.5s">
                <p className="mb-4">
                  Please Fill the below Contact Us Form !
                </p>
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Your Name"

                          onChange={(e) => setName(e.target.value)}
                        />
                        <label htmlFor="name">Your Name</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Your Email"

                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="email">Your Email</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="subject"
                          placeholder="Subject"

                          onChange={(e) => setSubject(e.target.value)}
                        />
                        <label htmlFor="subject">Subject</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          placeholder="Leave a message here"
                          id="message"
                          style={{ height: 150 }}
                          defaultValue={""}

                          onChange={(e) => setMessage(e.target.value)}
                        />
                        <label htmlFor="message">Message</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button
                        className="btn btn-primary w-100 py-3"
                        type="button"

                        onClick={() => handleSubmit()}
                      >
                        {
                          isSending ? "Sending Message" : "Send Message"
                        }
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact End */}
    </>
  );
}

export default Contact;
