'use client';
import Image from "next/image";
import React from "react";
import styles from "./Contact.module.css";
import "tailwindcss";

// images
import facebook from "../images/facebook.svg";
import instagram from "../images/instagram.svg";
import linkedIn from "../images/linnkedIn.svg";
import twitter from "../images/twitter.svg";
// images

export default function Contact() {
  const onSubmit = () => {
    const nameInput = document.getElementById("name") as HTMLInputElement;
    const emailInput = document.getElementById("email") as HTMLInputElement;
    const messageInput = document.getElementById("msg") as HTMLInputElement;

    console.log("Name:", nameInput.value);
    console.log("Email:", emailInput.value);
    console.log("Message:", messageInput.value);
  };

  return (
    <div className={styles.contactDiv}>
      <div className="bg-slate-50 h-screen">
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-6 h-[45vh] md:h-screen">
            <div className="px-10 md:px-14 lg:px-28 mt-28 md:mt-48 lg:mt-64">
              <span
                className={`${styles.contactText1} text-gray-900 text-3xl md:text-4xl`}
              >
                Get in touch with us!
              </span>
              <p className={`${styles.contactText2} text-gray-500 mt-7`}>
                Can’t find what you need? Feel free to leave us a message and we
                will get back to you as soon as possible.
              </p>
              <div className={`${styles.socialMediaIcons} mt-10`}>
                <div className="flex justify-start gap-8 sm:gap-14">
                  <Image
                    src={facebook}
                    alt="Facebook Logo"
                    className={`${styles.socialIcons} w-6 sm:w-10`}
                  />

                  <Image
                    src={twitter}
                    alt="Twitter Logo"
                    className={`${styles.socialIcons} w-6 sm:w-10`}
                  />

                  <Image
                    src={linkedIn}
                    alt="LinkedIn Logo"
                    className={`${styles.socialIcons} w-6 sm:w-10`}
                  />

                  <Image
                    src={instagram}
                    alt="Instagram Logo"
                    className={`${styles.socialIcons} w-6 sm:w-10`}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 h-[55vh] md:h-screen ">
            <div className="formDiv text-center px-10 md:p-2 lg:p-12 space-y-10 md:mt-40">
              <input
                className={`${styles.formInput1} w-full`}
                placeholder="Your Full Name"
                id="name"
              />
              <input
                className={`${styles.formInput1} w-full`}
                placeholder="Your Email"
                id="email"
              />
              <textarea
                className={`${styles.formInput2} w-full`}
                placeholder="Your Message"
                id="msg"
              ></textarea>
              <button
                type="submit"
                className={`${styles.formSubmitBtn} px-10 py-3`}
                onClick={onSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
