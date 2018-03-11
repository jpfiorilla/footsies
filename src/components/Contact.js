import * as React from 'react';
import { email } from '../data';

export default function Contact() {
  return (
    <div id="contact">
      <form method="POST" action={`https://formspree.io/${email}`}>
        <input type="email" name="email" placeholder="Your email" />
        <textarea name="message" placeholder="Your message" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
