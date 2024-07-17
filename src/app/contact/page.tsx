"use client";

import { useState } from 'react';
import emailjs from 'emailjs-com';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });

  const validateForm = () => {
    let valid = true;
    let errors = { name: '', email: '', message: '' };

    if (!name) {
      errors.name = 'Name is required';
      valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      errors.email = 'Valid email is required';
      valid = false;
    }

    if (!message) {
      errors.message = 'Message is required';
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    emailjs.send(
      'service_14abt1a', // Replace with your EmailJS service ID
      'template_m9yegg4', // Replace with your EmailJS template ID
      { name, email, message },
      'TKn5d_cTfdi_UEwlQ' // Replace with your EmailJS user ID
    )
      .then((response) => {
        console.log('Email sent successfully:', response.status, response.text);
        setSubmitted(true);
      })
      .catch((err) => {
        console.error('Error sending email:', err);
      });
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-br from-gray-800 via-gray-700 to-black">
      <div className="w-full max-w-3xl p-10 bg-gray-800 bg-opacity-90 rounded-lg shadow-xl">
        <h2 className="text-5xl font-bold text-white mb-6 text-center">Contact Me</h2>
        {submitted ? (
          <p className="text-xl text-gray-300 text-center">Thank you for your message!</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
            <div>
              <input
                className="border border-gray-600 bg-gray-800 p-4 rounded text-white w-full"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              {errors.name && <p className="text-red-500">{errors.name}</p>}
            </div>
            <div>
              <input
                className="border border-gray-600 bg-gray-800 p-4 rounded text-white w-full"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>
            <div>
              <textarea
                className="border border-gray-600 bg-gray-800 p-4 rounded text-white w-full h-40"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
              {errors.message && <p className="text-red-500">{errors.message}</p>}
            </div>
            <button className="bg-blue-500 text-white py-3 px-6 rounded hover:bg-blue-600 transition duration-300 self-center">
              Send
            </button>
          </form>
        )}
      </div>
    </section>
  );
}