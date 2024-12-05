import React from "react";


export default function About() {
  return (
    <div>
      <h1 className="page-title">Contact</h1>

      <form id="contact-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
        <br />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <br />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>
        <br />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
