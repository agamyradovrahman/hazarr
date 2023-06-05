import "./Contact.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import { useTranslation } from "react-i18next";

const Contactus = () => {

  const { t } = useTranslation();

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
        <h1 className="hat">{t("ContactUs.5")}</h1> 
      </div>
      <div className="containere ">
        <form className="formstylee" ref={form} onSubmit={sendEmail}>
          <div className="salamma">
            <div className="pepep">
              <label className="labelstylee">{t("ContactUs.1")}</label>
              <input className="inputstylee" type="text" name="user_name" />
            </div>
            <div className="kakak">
              <label className="labelstylee">{t("ContactUs.2")}</label>
              <input className="inputstylee" type="text" name="user_email" />
            </div> 
          </div> 
          <label className="labelstylee">{t("ContactUs.3")}</label>
          <textarea className="textareastylee" name="message" />
          <input className="inputstylee" type="submit" value={t("ContactUs.4")} />
        </form>
      </div>
    </div>
  );
};

export default Contactus;
