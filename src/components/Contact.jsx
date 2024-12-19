import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wz99j71", // Replace with your EmailJS service ID
        "template_v7uloao", // Replace with your EmailJS template ID
        form.current,
        "sFMHep8h2pP0p59m8" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSubmitted(true);
        },
        (error) => {
          console.error(error.text);
        }
      );

    e.target.reset(); // Reset the form fields after submission
  };

  return (
    <div id="contact" className="py-2 py-lg-6 my-5 my-lg-6">
      <div className="row justify-content-center align-items-center row-gap-2">
        <div className="col-xl-5 col-lg-5 col-md-6 col-sm-10 col-11">
          <div className="card">
            <div className="card-body p-4 p-lg-5">
              <h2 className="primary-color text-uppercase text-center py-4 heading-font">
                Contact Me
              </h2>
              {isSubmitted ? (
                <p className="text-center">
                  🎉 Thank you! Your message has been sent 🎉
                </p>
              ) : (
                <form ref={form} onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="form-label ms-2">
                      Your Name
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="name"
                      placeholder="Enter your name"
                      name="from_name"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="mail" className="form-label ms-2">
                      Your Email
                    </label>
                    <input
                      className="form-control"
                      type="mail"
                      id="mail"
                      name="user_email"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="mb-5">
                    <label htmlFor="message" className="form-label ms-2">
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      type="text"
                      rows="4"
                      cols="50"
                      id="message"
                      name="message"
                      placeholder="Enter your message"
                      required
                    />
                  </div>
                  <div className="mt-5 text-end">
                    <button type="submit" className="text-uppercase">
                      submit
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
