"use client";
import React, { useRef, useEffect } from "react";
import styles from "@/styles/ProjectSection.module.css";
import useFetch from "@/app/blogs/useFetch";
import { Inter, Red_Hat_Display } from "@next/font/google";
import ProjectCard from "./projectCards";

const redhat = Red_Hat_Display({
  subsets: ["latin"],
});

function projectSection() {
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

  //   const { loading, error } = useFetch("http://localhost:1337/api/blogs");
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
  //   if (loading) return <p>Loading...</p>;
  //   if (error) return <p>Error!</p>;

  return (
    <div
      id="projectsection"
      className={`${redhat.className} ${styles.Blog_section} `}
    >
      <div className={styles.Blog_Outer}>
        <div className={styles.Blog_right} ref={sectionRef}>
          <ProjectCard />
        </div>
        <div className={styles.Blog_left}>
          <h1 className={styles.Our_Blogs}>Our Projects</h1>
          <p className={styles.intro}>
            Discover our innovative projects that showcase the intersection of
            creativity and technology. Explore how we're shaping industries and
            pushing boundaries through our transformative solutions.
          </p>
          <a href="/projects">
            <button className={styles.Blog_button}>
              View all projects{brokenArrow}
            </button>
          </a>
          <a href="/projects">
            <button className={styles.Blog_button_2}>
              View all projects{brokenArrow}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default projectSection;
