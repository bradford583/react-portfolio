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
    <section>
            <h2>Contact</h2>
            <form id="contact-form" onSubmit={handleSubmit}>
                {errorMessage && (
                    <div>
                        <p className="error-text alert alert-warning">{errorMessage}</p>
                    </div>
                )}

                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" className="form-control" defaultValue={name} onBlur={handleFormChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="email" className="form-control" defaultValue={email} onBlur={handleFormChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" className="form-control" defaultValue={message} onBlur={handleFormChange} />
                </div>

                <button type="submit" className="btn primary-button">Submit</button>
            </form>
        </section>
  );
}

export default Contact;
