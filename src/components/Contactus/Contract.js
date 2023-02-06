import "./Contact.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contactus = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k7iqmvj",
        "template_wymnr1b",
        form.current,
        "iDLze1PQoTKhQidH5"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="bigg" id="contact">
      <div className="gpt3__footer-headint">
        <h1 className="hat">Contact Us</h1>
      </div>
      <div className="containere ">
        <form className="formstylee" ref={form} onSubmit={sendEmail}>
          <div className="salamma">
            <div className="pepep">
              <label className="labelstylee">Name</label>
              <input className="inputstylee" type="text" name="user_name" />
            </div>
            <div className="kakak">
              <label className="labelstylee">Email</label>
              <input className="inputstylee" type="text" name="user_email" />
            </div>
          </div>
          <label className="labelstylee">Message</label>
          <textarea className="textareastylee" name="message" />
          <input className="inputstylee" type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contactus;
