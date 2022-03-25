import React, { useState } from "react";
import { validateEmail } from '../../utils/helpers';

function Contact() {
  const [ formState, setFormState ] = useState({ name: '', email: '', message: ''});
  const [ errorMessage, setErrorMessage ] = useState('');
  const { name, email, message } = formState;

  function handleFormChange(e) {
    if(e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);

      if(!isValid) {
        setErrorMessage('You must enter a valid email address!')
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required!`)
      } else {
        setErrorMessage('');
      }
    }

    if(!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <section className="contactForm">
            <h2>Contact Me</h2>
            <a href="mailto:bradford583@gmail.com">Email</a>
            <a href="https://www.linkedin.com/in/chris-bradford-bb0a40212">LinkedIn</a>
            <a href="https://github.com/bradford583">GitHub</a>
    </section>
  );
}

export default Contact;
