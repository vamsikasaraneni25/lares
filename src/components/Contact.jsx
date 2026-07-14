import "./contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Us</h2>
      <p>We'd love to hear from you. Send us a message!</p>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Lares Dynamics Innovations Pvt. Ltd.</h3>

          <p>📍 Hyderabad, Telangana, India</p>
          <p>📞 +91 98765 43210</p>
          <p>📧 info@laresdynamics.com</p>
        </div>

        <form className="contact-form">
          <input
            type="text"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            required
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;