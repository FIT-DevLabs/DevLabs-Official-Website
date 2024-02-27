"use client";

import Image from "next/image";
import React from "react";
import styles from "@/styles/contact.module.css";
import axios from "axios";

import { facebookIcon, instagramIcon, linkedinIcon, twitterIcon } from "@/components/home/contactSection/icon"
import toast from "react-hot-toast";

export default function Contact() {

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const nameInput = document.getElementById("name") as HTMLInputElement;
    const emailInput = document.getElementById("email") as HTMLInputElement;
    const messageInput = document.getElementById("msg") as HTMLInputElement;
    const data = {
      name: nameInput.value,
      email: emailInput.value,
      message: messageInput.value,
    };
    try {
      const response = await axios.post("http://localhost:3000/api/contact", data);
      if (response.status === 200) {
        toast.success("Message sent successfully");
      }
      console.log(response);
    } catch (error) {
      console.error(error);
      toast.error("Message not sent");
    }
  }

  return (
    <div id="contactus" className='contactussection bg-white w-screen flex items-center justify-center relative sm:mt-6 mb-10 rounded'>
      <div className="bg-white w-4/5 rounded-t-[90px] lg:mt-[-70px] md:mt-[-60px] mt-[-30px] shadow-2xl">
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
              <button
                type="submit"
                className={`${styles.formSubmitBtn} px-10 py-3 mb-10 md:mt-5`}
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
