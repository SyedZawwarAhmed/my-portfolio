import React from "react";
import "../stylesheets/Contact.css";

function Contact() {
  return (
    <>
      <div id="contact" className="contact">
        <h1 className="contact-title">Leave a message</h1>
        <form action="submit">
          <div className="input-fields">
            {" "}
            <label htmlFor="name">Name</label>
            <input type="text" />
            <label htmlFor="Email">Email</label>
            <input type="email" />
            <label htmlFor="Subject">Subject</label>
            <input type="text" />
            <label htmlFor="message">Your Message</label>
            <textarea name="message" id="message" rows="5"></textarea>
          </div>
          <button className="btn btn-submit" type="submit">
            Send
          </button>
        </form>
      </div>
    </>
  );
}

export default Contact;
