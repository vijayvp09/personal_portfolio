import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.scss'
import { motion } from 'framer-motion';

function Contact () {

    const xVariant = {
        initial: {
            x: "-100%"
        },
        animate: {
            x: 0,
            transition: {
                duration: 0.20,
                staggerChildren: 0.1,
                type: "spring",
                damping: 15,
                stiffness: 300,
            }
        }
    } 
    
    const revVariant = {
        initial: {
            y: "200%"
        },
        animate: {
            y: 0,
            transition: {
                duration: 0.20,
                staggerChildren: 0.1,
                type: "spring",
                damping: 13,
                stiffness: 300,
            }
        }
    } 
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm('service_6lqt30d', 'template_mmhxf28', form.current, {
            publicKey: '9gcAD5ythZVkn8EH3',
        })
        .then(
            () => {
            console.log('SUCCESS!');
            },
            (error) => {
            console.log('FAILED...', error.text);
            },
        );
    };

  return (
    <div className="containerContact">
        <motion.div className="contentContact" variants={xVariant} initial="initial" whileInView="animate" >
            <motion.p className="title" variants={xVariant} initial="initial" whileInView="animate">
                Let's Work<br/>Together
            </motion.p>
            <motion.div className="contacts" variants={xVariant} initial="initial" whileInView="animate">
                <motion.div className="mail" variants={xVariant} initial="initial" whileInView="animate">
                    <motion.h2 variants={xVariant} initial="initial" whileInView="animate">Email:</motion.h2>
                    <motion.span variants={xVariant} initial="initial" whileInView="animate">vvpillai95@gmail.com</motion.span>
                </motion.div>
                <motion.div className="mail" variants={xVariant} initial="initial" whileInView="animate">
                    <motion.h2 variants={xVariant} initial="initial" whileInView="animate">Phone:</motion.h2>
                    <motion.span variants={xVariant} initial="initial" whileInView="animate">+91 8281307226</motion.span>
                </motion.div>
            </motion.div>
        </motion.div>
        <motion.form ref={form} onSubmit={sendEmail} >
            <motion.input type="text" name="from_name" placeholder="Name" variants={revVariant} initial="initial" whileInView="animate"/>
            <motion.input type="email" name="from_email" placeholder="Email" variants={xVariant} initial="initial" whileInView="animate"/>
            <motion.textarea name="message" placeholder="Message..." variants={revVariant} initial="initial" whileInView="animate"/>
            <motion.input className="button" type="submit" value="Send" variants={xVariant} initial="initial" whileInView="animate"/>
        </motion.form>
    </div>
  );
};

export default Contact;