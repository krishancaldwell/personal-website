import React, { Component } from 'react'
import SocialSection from './SocialSection'


class ContactPage extends Component {

  render() {
    return (
      <div className="contact-section">
        <h2>Get in touch</h2>
        <form onSubmit={this.handleSubmit} className="contact-form">
          <input type="text" placeholder="Name" name="name"/>
          <input type="text" placeholder="E-mail" name="email"/>
          <input type="text" placeholder="Message" name="message" className="form-message"/>
          <button>Send</button>
        </form>
        <SocialSection />
      </div>
    )
  }

}

export default ContactPage
