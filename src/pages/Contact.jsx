import { useState } from 'react'
import { useNavigate } from 'react-router'

function Contact() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
  })

  function handleChange(event) {
    const { name, value } = event.target

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()

    // Pass the captured form values to Home without sending an email.
    navigate('/', { state: { contactSubmission: formData } })
  }

  return (
    <main>
      <h1>Contact Me</h1>
      <p>Interested in my work? Get in touch.</p>

      <section>
        <h2>Contact Information</h2>
        <p>Email: emrberkepeker@gmail.com</p>
      </section>

      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First name</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          value={formData.firstName}
          onChange={handleChange}
          required
        />

        <label htmlFor="lastName">Last name</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          value={formData.lastName}
          onChange={handleChange}
          required
        />

        <label htmlFor="phone">Contact number</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
        />

        <label htmlFor="email">Email address</label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <p>This demo captures your entries but does not send an email.</p>
        <button className="button-link" type="submit">
          Submit message
        </button>
      </form>
    </main>
  )
}

export default Contact