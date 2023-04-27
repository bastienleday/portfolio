import react from "react";
import emailjs from '@emailjs/browser';

import { useState, useRef } from "react";
import "./componentsCSS/Contact.css";
export default function Contact() {

    const form = useRef();

    const [formData, setFormData] = useState({
        subject: "",
        name: "",
        email: "",
        message: "",
    });

   const handleChange = (e) => {
       setFormData({...formData, [e.target.name]: e.target.value})
   }

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_hzcrmdn', 'template_0zgchvh', form.current, 'mSoC3LeQ5UjAXJVBi')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }



        return (
            <div id="contactDiv" className="contact">
                <div className="contactTitle">
                <p className="contactMe">Contact me</p>
                </div>
            <form className="form" onSubmit={handleSubmit} id="contactForm" ref={form}>
                <label>
                    Subject:
                    <input type="text" name="subject" value={formData.subject} onChange={handleChange} />
                </label>
                <label>
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange}/>
                </label>
                <label>
                    Email:
                    <input type="text" name="email" value={formData.email} onChange={handleChange}/>
                </label>
                <label>
                    Message:
                </label>

                    <textarea type="text" name="message" value={formData.message} onChange={handleChange} />

                <input type="submit" value="Submit" className="submit" />

            </form>
            </div>

        )
}