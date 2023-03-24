import './Contact.css'
import useInput from '../../hooks/useInput'
import emailjs from '@emailjs/browser'

import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";


import { useRef, useState } from 'react';

const Contact = () => {

    const form = useRef();

    const [popMessage, setPopMessage] = useState(false);


    const {
        value: enteredName,
        hasError: enteredNameHasError,
        isValid: enteredNameIsValid,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetNameInput,
    } = useInput((value) => value.trim() !== "");

    const {
        value: enteredEmail,
        hasError: enteredEmailHasError,
        isValid: enteredEmailIsValid,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmailInput,
    } = useInput((value) => value.includes("@"));

    const {
        value: enteredText,
        hasError: enteredTextHasError,
        isValid: enteredTextIsValid,
        valueChangeHandler: textChangeHandler,
        reset: resetTextInput,
    } = useInput((value) => value.trim() !== "");

    let formIsValid = false;

    if (enteredNameIsValid && enteredEmailIsValid && enteredTextIsValid) {
        formIsValid = true;
    }

    const formSubmit = (event) => {
        event.preventDefault();

        emailjs.sendForm('service_e44inhl', 'template_pv4pnyr', form.current, '0c5vRJGQ8uE3VHQg6')
            .then((result) => {
                console.log(result.text);
                setPopMessage(true)
                const timeOut = setTimeout(() => {
                    setPopMessage(false)
                }, 4300)
                return () => clearTimeout(timeOut)
            }, (error) => {
                console.log(error.text);
            });


        resetTextInput();
        resetEmailInput();
        resetNameInput();
    };

    return <>
        <section>
            <h2>Get In Touch</h2>
            <p>Thank you, for taking the time to visit my portfolio website. Let's work together, use the contact form below and let's get started! I'm excited to hear from you!</p>
            {popMessage && <p className='popUp'>Thanks for the message! I'll get back to you as soon as possible.</p>}
            <div className="row">
                <div className="col-8 col-12-small">
                    <form onSubmit={formSubmit} ref={form}>
                        <div className="row gtr-uniform gtr-50">
                            <div className={enteredNameHasError ? 'col-6 col-12-xsmall invalid' : 'col-6 col-12-xsmall'}>
                                <input type="text" name="name" id="name" placeholder="Name" onChange={nameChangeHandler} onBlur={nameBlurHandler} value={enteredName} />
                                {enteredNameHasError && <p className='error-text'>Name must not be empty.</p>}
                            </div>
                            <div className={enteredEmailHasError ? 'col-6 col-12-xsmall invalid' : 'col-6 col-12-xsmall'}>
                                <input type="email" name="email" id="email" placeholder="Email" onChange={emailChangeHandler} onBlur={emailBlurHandler} value={enteredEmail} />
                                {enteredEmailHasError && <p className='error-text'>Email must contain @.</p>}
                            </div>
                            <div className={enteredTextHasError ? 'col-12 invalid' : 'col-12'}>
                                <textarea name="message" id="message" placeholder="Message" rows="4" onChange={textChangeHandler} value={enteredText}></textarea>
                                {enteredTextHasError && <p className='error-text'>Please, enter some message.</p>}
                            </div>
                        </div>
                        <div className="actions">
                            <button type="submit" className="button primary" disabled={!formIsValid}>SEND MESSAGE</button>
                        </div>
                    </form>
                </div>
                <div className="col-4 col-12-small">
                    <ul className="labeled-icons">
                        <li>
                            <h3 className="icon solid"><span className="label"> <BsTelephone /></span></h3>
                            +64 27 2616 802
                        </li>
                        <li>
                            <h3 className="icon solid"><span className="label"> <HiOutlineMail /></span></h3>
                            posp.petrr@gmail.com
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </>
}



export default Contact