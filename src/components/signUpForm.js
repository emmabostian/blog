import React, { useState } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import "./signUpForm.css"

const SignUpForm = () => {
  const [email, setEmail] = useState("")
  const [listFields, setListFields] = useState({
    FNAME: "",
    LNAME: "",
  })
  const [subscribed, setSubscribed] = useState(false)
  const emailValidation = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

  const handleEmailChange = e => {
    setEmail(e.currentTarget.value)
  }

  const handleNameChange = e => {
    const { target } = e
    const { value, id } = target

    if (id === "sign-up-first-name") {
      setListFields({ FNAME: formatName(value), LNAME: listFields.LNAME })
    } else if (id === "sign-up-last-name") {
      setListFields({ FNAME: listFields.FNAME, LNAME: formatName(value) })
    } else {
      return
    }
  }

  const formatName = name => {
    if (name.length === 0) return ""

    let letters = name.split("")
    return letters.shift().toUpperCase() + letters.join("")
  }

  const handleSubmit = e => {
    e.preventDefault()
    addToMailchimp(email, listFields)
      .then(data => {
        if (data.result === "success") {
          setSubscribed(true)
        }
      })
      .catch(error => {
        document
          .querySelector(".signUpForm__error")
          .classList.add("signUpForm__error--visible")
      })
  }

  return (
    <div className="signUp">
      <h1>Newsletter</h1>
      {subscribed === false ? (
        <Form
          handleSubmit={handleSubmit}
          handleEmailChange={handleEmailChange}
          handleNameChange={handleNameChange}
          active={
            email.length > 0 &&
            email.match(emailValidation) &&
            listFields.FNAME.length > 0 &&
            listFields.LNAME.length > 0
          }
        />
      ) : (
        <SubscribedMessage />
      )}
    </div>
  )
}

const Form = ({
  handleSubmit,
  handleEmailChange,
  handleNameChange,
  active,
}) => (
  <form className="signUpForm" onSubmit={handleSubmit}>
    <div className="signUpForm__group">
      <label htmlFor="sign-up-email">Email</label>
      <input
        className="signUpForm__input"
        id="sign-up-email"
        type="email"
        onChange={handleEmailChange}
        required={true}
      />
    </div>
    <div className="signUpForm__group">
      <label htmlFor="sign-up-first-name">First Name</label>
      <input
        className="signUpForm__input"
        id="sign-up-first-name"
        type="text"
        onChange={handleNameChange}
        required={true}
      />
    </div>
    <div className="signUpForm__group">
      <label htmlFor="sign-up-last-name">Last Name</label>
      <input
        className="signUpForm__input"
        id="sign-up-last-name"
        type="text"
        onChange={handleNameChange}
        required={true}
      />
    </div>
    <p className="signUpForm__error">
      Oops something went wrong, please try again!
    </p>
    <button aria-disabled={!active} className="" type="submit">
      Submit
    </button>
  </form>
)

const SubscribedMessage = () => (
  <div>
    <p>You were subscribed</p>
  </div>
)

export default SignUpForm
