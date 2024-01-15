"use client";
import React from "react";
import { useState } from "react";
import styles from "@/styles/NavBar.module.css";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav style={{ backgroundColor: "black" }}>
      <div className={styles.navbar_outer}>
        <a href="#" className={styles.logo_link}>
          <img
            src="../navbar/devlabs_logo.png"
            className={styles.logo_image}
            alt="Logo"
          />
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className={styles.hamburger_btn}
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen ? "true" : "false"}
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`w-full lg:w-auto ${isMenuOpen ? "block" : "hidden"}`}
          id="navbar-default"
        >
          <ul className={styles.navbar_ul}>
            <li>
              <a href="#" className={styles.ul_list_item} aria-current="page">
                Services
              </a>
            </li>
            <li>
              <a href="#" className={styles.ul_list_item}>
                Work
              </a>
            </li>
            <li>
              <a href="#" className={styles.ul_list_item}>
                Blogs
              </a>
            </li>
            <li>
              <a href="#" className={styles.ul_list_item}>
                About Us
              </a>
            </li>
            <li>
              <a href="#">
                <button className={styles.contact_btn}>Contact</button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
