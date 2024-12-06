
import React from "react";

const Contact = () => {
  return (
    <>
      <span id="contact"></span>
      <div data-aos="zoom-in" className="dark:bg-black dark:text-white py-14">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-gray-800 py-8 px-6">
            {/* Left Section */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl font-bold text-white">
                Let's collaborate on your upcoming car rental venture
              </h1>
              <p className="text-gray-400">
                Have questions or need assistance? Feel free to get in touch using the form below.
              </p>
            </div>
            {/* Contact Form */}
            <div>
              <form
                action="https://formsubmit.co/shivam2003golu@gmail.com"
                method="POST"
                className="space-y-6"
              >
                {/* Name Input */}
                <label className="input input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0 1a5.978 5.978 0 0 0-4.665 2.338C4.272 13.52 6.072 14 8 14s3.728-.48 4.665-1.662A5.978 5.978 0 0 0 8 9Z" />
                  </svg>
                  <input
                    type="text"
                    name="name"
                    className="grow bg-gray-900 text-white rounded-lg p-2"
                    placeholder="Name"
                    required
                  />
                </label>

                {/* Email Input */}
                <label className="input input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70"
                  >
                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                  </svg>
                  <input
                    type="email"
                    name="email"
                    className="grow bg-gray-900 text-white rounded-lg p-2"
                    placeholder="Email"
                    required
                  />
                </label>

                {/* Message Input */}
                <textarea
                  name="message"
                  className="input input-bordered w-full bg-gray-900 text-white rounded-lg p-2 h-32"
                  placeholder="Message"
                  required
                ></textarea>

                {/* Submit Button */}
                <input
                  className="btn mt-6 btn-secondary bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary/80 duration-200"
                  type="submit"
                  value="Submit"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
