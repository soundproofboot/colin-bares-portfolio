import { useState } from 'react';

import { validateEmail } from '../utils/index';

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: ''});

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  };

  return (
    <section id="contact-section">
      <h2 className="heading">Say hello!</h2>
      <p>
        Contact me directly at <a href='mailto:colinedwinbares@gmail.com'>colinedwinbares@gmail.com</a> or through this form.
      </p>
      <form
        action="https://formsubmit.co/5479132c31c3525da4d928ffee3b1796"
        method="POST"
        id="contact-form"
      >
        <div className="form-line">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            defaultValue={name}
            onBlur={handleChange}
          />
        </div>
        <div className="form-line">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            name="email"
            defaultValue={email}
            onBlur={handleChange}
          />
        </div>
        <div className="form-line">
          <label htmlFor="message">Message</label>
          <textarea
            type="text"
            name="message"
            rows="5"
            defaultValue={message}
            onBlur={handleChange}
          />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact
