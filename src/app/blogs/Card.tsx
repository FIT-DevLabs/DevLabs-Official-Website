import React from "react";
import useFetch from "./useFetch";
import styles from "@/styles/BlogCard.module.css";
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
  date,
  owner,
  title,
  url,
}: {
  readonly Id: number;
  readonly date: string;
  readonly owner: string;
  readonly title: string;
  readonly url: string;
}) {
  const Lasturl = url;


  return (
    <div className={styles.Blog_card_outer}>
      <div key={Id}>
        <div className={styles.Blog_card_image}>
          <Image src={Lasturl} alt="blog_card_image" width="300" height="500" />
        </div>
        <div className={styles.Blog_date}>{date}</div>
        <div className={styles.Blog_title}>{title}</div>
        <div className={styles.Blog_owner}>{owner}</div>
        <div className={styles.Blog_read_button_outer}>
          <button className={styles.Blog_read_button}>Read More{arrow}</button>
        </div>
      </div>
    </div>
  );
}
