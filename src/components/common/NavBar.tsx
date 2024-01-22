"use client";

import { useState } from "react";
import styles from "@/styles/NavBar.module.css";

const NavBar2 = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.navbar_outer}>
        {/* Left side: Logo */}
        <div className={styles.nav_logo}>
          <a href="#" className={styles.logo_link}>
            <img
              src="../navbar/devlabs_logo.png"
              className={styles.logo_image}
              alt="Logo"
            />
          </a>
        </div>

        {/* Center: Navigation Links (hidden in mobile view) */}
        <div className={styles.nav_links}>
          <a href="#" className={styles.nav_item}>
            Services
          </a>
          <a href="#" className={styles.nav_item}>
            Work
          </a>
          <a href="#" className={styles.nav_item}>
            Blogs
          </a>
          <a href="#" className={styles.nav_item}>
            About Us
          </a>
        </div>

        {/* Right side: Collapsible Button and Additional Button */}
        <div className={styles.col_add_btn}>
          <button className={styles.col_btn} onClick={toggleMobileMenu}>
            <svg
              className="w[20px] h-[20px]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="#ffffff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          {!isMobileMenuOpen && (
            <div className={styles.contact_btn_outer}>
              <a href="#">
                <button className={styles.contact_btn}>Contact</button>
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu (visible in mobile view) */}
      {isMobileMenuOpen && (
        <div className={styles.mobile_menu}>
          <button
            className={styles.mobile_menu_close_btn}
            onClick={closeMobileMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              width="16"
              viewBox="0 0 384 512"
              style={{ margin: "6px" }}
            >
              <path
                fill="#ffffff"
                d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
              />
            </svg>
          </button>
          <div className={styles.mobile_nav_items}>
            <div className={styles.mobile_nav_item_outer}>
              <a href="#" className={styles.mobile_nav_item}>
                Services
              </a>
            </div>
            <div className={styles.mobile_nav_item_outer}>
              <a href="#" className={styles.mobile_nav_item}>
                Work
              </a>
            </div>
            <div className={styles.mobile_nav_item_outer}>
              <a href="#" className={styles.mobile_nav_item}>
                Blogs
              </a>
            </div>
            <div className={styles.mobile_nav_item_outer}>
              <a href="#" className={styles.mobile_nav_item}>
                About Us
              </a>
            </div>
            <div className={styles.mobile_nav_item_outer}>
              <a href="#" className={styles.mobile_nav_item}>
                Contact
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar2;
