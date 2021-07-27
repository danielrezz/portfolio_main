import "./contact.scss";
import { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {

    const [message, setMessage] = useState(false)

    const handleSubmit = () => {
        setMessage(true)
    }


    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_dareza', 'template_dareza', e.target, 'user_CUHAlG3rzUgQaNloXFuWc')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

          handleSubmit();
      }


    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/paperPlane.png" alt="" />
            </div>
            <div className="right">
                <h2>Send me a message</h2>
                <form onSubmit={sendEmail}>
                    <input type="text" name="user_name" placeholder="Name" required/>
                    <input type="email" name="user_email" placeholder="Email" required/>
                    <textarea name="message" placeholder="Message"></textarea>
                    <button type="submit" value="Send">Send</button>
                    {message && <span><b>Thanks for your message! I will reply ASAP.</b></span>}
                </form>
            </div>
        </div>
    )
}
