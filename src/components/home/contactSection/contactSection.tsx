"use client";

import Image from "next/image";
import React from "react";
import styles from "@/styles/contact.module.css";

import { facebookIcon, instagramIcon, linkedinIcon, twitterIcon } from "@/components/home/contactSection/icon"
import Button from "@/components/common/Button";

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
    <div id="contactus" className='bg-white w-screen flex items-center justify-center relative sm:mt-6 mb-10 rounded'>
      <div className="bg-white w-4/5 rounded-t-[90px] lg:mt-[-100px] md:mt-[-100px] mt-[-30px] shadow-2xl">
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-6 ">
            <div className="px-10 md:px-14 lg:px-28 mt-20 md:mt-20 lg:mt-30">
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
                <div className="flex justify-start gap-8 md:gap-5 sm:gap-12">
                  <Image
                    src={facebookIcon}
                    alt="Facebook Logo"
                    className={`${styles.socialIcons} w-5 sm:w-10 `}
                  />
                  <Image
                    src={twitterIcon}
                    alt="Twitter Logo"
                    className={`${styles.socialIcons} w-6 sm:w-10`}
                  />

                  <Image
                    src={linkedinIcon}
                    alt="LinkedIn Logo"
                    className={`${styles.socialIcons} w-6 sm:w-10`}
                  />

                  <Image
                    src={instagramIcon}
                    alt="Instagram Logo"
                    className={`${styles.socialIcons} w-6 sm:w-10`}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6">
            <div className="formDiv text-center px-10 md:px-14 lg:px-28 mt-10 md:mt-20 lg:mt-30">
              <input
                className={`${styles.formInput1} w-full mt-2`}
                placeholder="Your Full Name"
                id="name"
              />
              <input
                className={`${styles.formInput1} w-full mt-2`}
                placeholder="Your Email"
                id="email"
              />
              <textarea
                className={`${styles.formInput2} w-full mt-2`}
                placeholder="Your Message"
                id="msg"
              ></textarea>
              <div className="px-10 py-3 mb-10 md:mt-5" onClick={onSubmit}>
                <Button navigate="" iconName="" color="orange" link="Submit" />
              {/* <button
                type="submit"
                className={`${styles.formSubmitBtn} px-10 py-3 mb-10 md:mt-5`}
                onClick={onSubmit}
              >
                Submit
              </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
