import React from "react";
import "../stylesheets/Contact.css";
import { useInView } from "react-intersection-observer";

function Contact() {
  const inputField = document.getElementsByClassName("input-field");
  const submitBtn = document.getElementById("btn-submit");
  const { ref, inView } = useInView({
    root: null,
    rootMargin: "-200px 0px",
    threshold: 0,
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
        <form action="submit">
          {/* <div className="input-fields"> */}
          <div className="name input-field">
            <label htmlFor="name">Name</label>
            <input type="text" />
          </div>
          <div className="email input-field">
            <label htmlFor="Email">Email</label>
            <input type="email" />
          </div>
          <div className="subject input-field">
            <label htmlFor="Subject">Subject</label>
            <input type="text" />
          </div>
          <div className="message input-field">
            <label htmlFor="message">Your Message</label>
            <textarea name="message" id="message" rows="5"></textarea>
          </div>
          {/* </div> */}
          <button id="btn-submit" className="btn btn-submit" type="submit">
            Send
          </button>
        </form>
      </div>
    </>
  );
}

export default Contact;
