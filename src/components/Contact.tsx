import { MdArrowOutward } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:psuyog0331@gmail.com" data-cursor="disable">
                psuyog0331@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+9184529912884" data-cursor="disable">
                +91 845299 12884
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://www.behance.net/suyogpatil13"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Behance <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/ns_kid_suyog/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
            <a
              href="https://www.youtube.com/watch?v=-uawIsnYZdo&feature=youtu.be"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              YouTube <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Suyog Patil</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
