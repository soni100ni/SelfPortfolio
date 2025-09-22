import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setStatus("sent");
        setShowPopup(true);
        formRef.current.reset();

        // Hide popup after 3 seconds
        setTimeout(() => setShowPopup(false), 3000);
      })
      .catch(() => {
        setStatus("error");
        setShowPopup(true);
        // Hide popup after 3 seconds
        setTimeout(() => setShowPopup(false), 3000);
      });
  };

  return (
    <section id="contact" className="py-24 bg-gray-900 relative">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4 text-white">Contact</h2>
        <p className="text-gray-400 mb-8">
          Want to work together or have a question? Send a message — I'll reply fast.
        </p>

        <div className="bg-gray-800 rounded-xl shadow-xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300">
          <form ref={formRef} onSubmit={handleSubmit} className="grid grid-cols-1 gap-5">
            <input
              name="from_name"
              type="text"
              required
              placeholder="Your Name"
              className="p-4 rounded-lg bg-gray-900 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
            />
            <input
              name="reply_to"
              type="email"
              required
              placeholder="Your Email"
              className="p-4 rounded-lg bg-gray-900 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
            />
            <input
              name="subject"
              type="text"
              placeholder="Subject"
              className="p-4 rounded-lg bg-gray-900 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
            />
            <textarea
              name="message"
              rows="6"
              required
              placeholder="Message"
              className="p-4 rounded-lg bg-gray-900 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
            ></textarea>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg text-white font-semibold hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>

        
      </div>


      {/* Popup Notification */}
      {showPopup && (
        <div
          className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-lg text-white font-semibold shadow-lg transition-all duration-300 ${status === "sent" ? "bg-green-500" : "bg-red-500"
            }`}
        >
          {status === "sent" ? "Message sent successfully!" : "Failed to send message."}
        </div>
      )}
    </section>
  );
}
