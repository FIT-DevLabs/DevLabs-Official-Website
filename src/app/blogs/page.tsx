"use client";
import React, { useRef, useEffect } from "react";
import styles from "@/styles/BlogSection.module.css";
import BlogCard from "./BlogCard";
import useFetch from "@/app/blogs/useFetch";
import { Inter ,Red_Hat_Display} from '@next/font/google';
import Button from "@/components/common/Button";

const redhat = Red_Hat_Display({
  subsets: ['latin'],
});

function BlogSection() {
  const brokenArrow: any = (
    <svg
      width="20px"
      height="20px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.33938 14.5896C1.44846 11.2534 2.31164 7.54623 4.92893 4.92893C8.83418 1.02369 15.1658 1.02369 19.0711 4.92893C22.9763 8.83418 22.9763 15.1658 19.0711 19.0711C16.4538 21.6884 12.7466 22.5515 9.41045 21.6606M15.0001 15.0001V9.0001M15.0001 9.0001H9.00014M15.0001 9.0001L4.99995 19"
        stroke="#FFFFFF"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
  
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (sectionRef.current?.contains(event.target as Node)) {
        event.preventDefault();
      }
    };

    document.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      document.removeEventListener("wheel", handleWheel);
    };
  }, []);
  return (
    <div className={`${redhat.className} ${styles.Blog_section}`}>
      <div className={styles.Blog_Outer}>
        <div className={styles.Blog_left}>
          <h1 className={styles.Our_Blogs}>Our Blogs</h1>
          <p className={styles.intro}>
            Uncover Insights, Tutorials, and Industry Trends on the DevLabs
            Company Website Blog. Join us in a journey through in-depth
            articles, practical tutorials, and thought-provoking discussions as
            we delve into the latest advancements, coding intricacies, and
            software development strategies. Our blog is your gateway to staying
            informed and inspired in the dynamic realm of technology and
            innovation
          </p>
          <div className="my-7">
          {/* <button className={styles.Blog_button}>
            Read more blogs{brokenArrow}
          </button> */}
            <Button navigate="" iconName="broken-arrow" color="orange" link="Read more blogs" />
          </div>
        </div>
        <div className={styles.Blog_right} ref={sectionRef}>
          <BlogCard />
        </div>
        <button className={styles.Blog_button_2}>
          Read more blogs{brokenArrow}
        </button>
      </div>
    </div>
  );
}

export default BlogSection;
