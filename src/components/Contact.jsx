import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch(
        "https://my-backend-875y26k6e-madanu-stanys-projects.vercel.app//send-email",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();
      if (response.ok) {
        setStatus("Email sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus(data.error || "Failed to send email.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Error sending email.");
    }
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
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="form-label ms-2">
                    Your Name
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
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
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
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
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mt-5 text-end">
                  <button type="submit" className="text-uppercase">
                    submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
