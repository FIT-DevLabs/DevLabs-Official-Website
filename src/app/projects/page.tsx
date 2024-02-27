import React from 'react'
import { Red_Hat_Display } from "next/font/google";
import Card from "@/app/projects/ProjectCard"
import Projects from "@/content/projects.json"

const redhat = Red_Hat_Display({
  subsets: ["latin"],
});

function page() {
  return (
    <div className={`${redhat.className} ${"flex flex-col  mt-10 lg:m-20"} `}>
      <div className="w-10/12 pl-10 mb-10">
        <h1 className="font-bold text-4xl pb-5">Projects</h1>
        <p className="text-justify text-xl">
          Discover our innovative projects that showcase the intersection of
          creativity and technology. Explore how we're shaping industries and
          pushing boundaries through our transformative solutions.
        </p>
      </div>

      <div className="md:flex flex-col items-stretch  align-middle lg:grid grid-cols-2  gap-y-10 gap-20 px-5 lg:pl-10 mb-10">
        {Projects.projects.map(
          (project => (
            <Card
              name={project.name}
              key={project.id}
              Id={project.id}
              description={project.description}
              url={project.url}
              projectlink={project.projectlink}
              status={project.status}
            />
          )
          ))}
      </div>
    </div>
  )
}

export default page