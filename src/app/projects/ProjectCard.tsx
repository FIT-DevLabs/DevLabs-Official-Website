import React from "react";
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

export default function ProjectCard({
  Id,
  name,
  description,
  url,
  status
}: {
  readonly Id: number;
  readonly name: string;
  readonly description: string;
  readonly url: string;
  readonly status: string;
}) {
  const Lasturl = url;


  return (
    <div className="flex flex-col md:flex-row mt-3 h-[60vh] w-[340px] sm:h-[45vh] md:w-[700px] lg:w-[40vw] md:h-[360px] lg:items-stretch bg-neutral-100  text-black rounded-3xl relative shadow-lg pb-4">
      <div className="align-middle rounded-3xl overflow-hidden m-4">
        <Image src={Lasturl} alt="blog_card_image" width="1200" height="0" />
      </div>
      <div className ="flex flex-col px-3 sm:pt-20 gap-6">
        <div className = "font-semibold text-left text-[35px]">
          {name}
        </div>
        <div className ="font-thin text-[15px]">
          {description}
        </div>
        <span>{status}</span>
      </div>
    </div>
  );
}
