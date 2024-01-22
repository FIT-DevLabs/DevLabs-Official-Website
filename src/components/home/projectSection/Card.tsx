import React from "react";
import useFetch from "./useFetch";
import styles from "@/styles/ProjectSection.module.css";
import Image from "next/image";

const arrow = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
    id="arrow"
    width={20}
  >
    <path
      d="M1 26h43.586l-6.293 6.293 1.414 1.414L48.414 25l-8.707-8.707-1.414 1.414L44.586 24H1z"
      stroke="#FF7723"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
);

export default function Card({
  Id,
  name,
  description,
  url,
}: {
  readonly Id: number;
  readonly name: string;
  readonly description: string;
  readonly url: string;
}) {
  // const { loading, error } = useFetch(
  //   "http://localhost:1337/api/blogs?populate=*"
  // );
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error!</p>;
  const Lasturl = url;


  return (
    <div className={styles.project_card_outer}>
      <div className={styles.project_image}>
        <Image src={Lasturl} alt="blog_card_image" width="1200" height="400" />
      </div>
      <div className ={styles.project_disc}>
        <div className = {styles.project_name}>
          {name}
        </div>
        <div className ={styles.project_description}>
          {description}
        </div>
        <button className={styles.project_read_button} >See More</button>
      </div>
    </div>
  );
}
