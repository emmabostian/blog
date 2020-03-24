import React, { useState } from "react"
import send from "../../content/assets/send.svg"
import "./contact.css"

export default () => {
  const [bodyText, setBodyText] = useState("")
  return (
    <div className="contact">
      <h2 className="page__subHeader">Write To Me</h2>
      <form className="contact__form">
        <div className="contact__formGroup">
          <label className="contact__label" htmlFor="email">
            Email
          </label>
          <input className="contact__textField" type="email" id="email" />
        </div>

        <div className="contact__formGroup">
          <label className="contact__label" htmlFor="message">
            Message
          </label>
          <textarea
            className="contact__textArea"
            id="message"
            onInput={e => setBodyText(e.target.value)}
          />
        </div>
        <a
          href={`mailto:emma.j.bostian@gmail.com?subject=Website%20Message&body=${bodyText
            .split(" ")
            .join("%20")}`}
          className="contact__submit"
        >
          <img
            className="contact__submitIcon"
            src={send}
            alt=""
            aria-hidden="true"
          />
          Send
        </a>
      </form>
    </div>
  )
}
