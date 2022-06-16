import React from "react";
import "../stylesheets/Contact.css";
import { useInView } from "react-intersection-observer";

function Contact() {
  const inputField = document.getElementsByClassName("input-field");
  const submitBtn = document.getElementById("btn-submit");
  const { ref, inView } = useInView({
    root: null,
    rootMargin: "0px 0px",
    threshold: 0.4,
    triggerOnce: true,
  });
  if (inView) {
    let i = 0;
    const interval = setInterval(() => {
      inputField[i].classList.add("input-field-animation");
      i++;
      if (i === inputField.length) {
        clearInterval(interval);
      }
    }, 300);
    setTimeout(() => {
      submitBtn.classList.add("btn-submit-animation");
    }, 1500);
  }

  return (
    <>
      <div ref={ref} id="contact" className="contact">
        <h1
          className={
            inView ? "contact-title contact-title-animation" : "contact-title"
          }
        >
          Leave a message
        </h1>
        <form
          action="https://formsubmit.co/zawwar.ahmed12@gmail.com"
          method="POST"
        >
          <div className="name input-field">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className="email input-field">
            <label htmlFor="Email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className="subject input-field">
            <label htmlFor="Subject">Subject</label>
            <input type="text" name="subject" />
          </div>
          <div className="message input-field">
            <label htmlFor="message">Your Message</label>
            <textarea name="message" id="message" rows="5"></textarea>
          </div>
          <input
            type="hidden"
            name="_next"
            value="https://zawwarahmed.netlify.app/thanks.html"
          />
          <input type="hidden" name="_captcha" value="false" />
          <button id="btn-submit" className="btn btn-submit" type="submit">
            Send
          </button>
        </form>
      </div>
    </>
  );
}

export default Contact;
