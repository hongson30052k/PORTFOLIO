import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="heading">
        Contact <span>Me!</span>
      </h2>
      <form action="#">
        <div className="input-box">
          <input type="text" placeholder="FullName" />
          <input type="email" placeholder="Email Adress" />
        </div>
        <div className="input-box">
          <input type="number" placeholder="Mobile Number" />
          <input type="text" placeholder="Email Subject" />
        </div>
        <textarea
          name=""
          id=""
          cols={30}
          rows={10}
          placeholder="Your Message"
        ></textarea>
        <input type="submit" value="Send Messaage" className="btn" />
      </form>
    </section>
  );
};

export default Contact;
