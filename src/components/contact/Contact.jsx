import React, { Component } from 'react';
import './contact.css';
import contactPic from '../images/contact.jpg'

export default class Contact extends Component {
    render() {
        return (
            <div className="contact-container">
               <section className="contact-pic">
                <img src={contactPic} alt="cpic"/>
               </section>
               <section className="contact-and-form">
                   <h1 className="contact-info">CONTACT INFORMATION</h1>
                   <hr/>

                   <p id="contact-txt"> If you'd like to talk about a project, or my work, you can contact me at</p>

                   <ul className="contact-list-info">
                       <li>Email: <br/> mailexample@mailexample.com </li>
                       <li>Phone: <br/> +0038765 000 000 +0038750 000 000 </li>
                       <li>Adress: <br/> John Doe street 20 </li>
                   </ul>

                   <h2 className="contact-subh"> Or send a direct message here</h2>

                   <form>
                       <input type="text" placeholder="Enter your name"/>
                       <input type="text" placeholder="Enter your e-mail" />
                       <textarea name="message" placeholder="Enter message" id="txtarea" cols="30" rows="10"></textarea>
                       <input type="button" value="Send Message"/>
                   </form>
               </section>
            </div>
        )
    }
}
