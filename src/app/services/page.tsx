"use client"
import * as React from "react";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Services() {

  useEffect(() => {
    ["servicespage", "item2"].forEach((className) =>
      animateElement(
        `.${className}`,
        { y: 200, opacity: 0, scale: 1 },
        { y: 0, scale: 1, opacity: 1 }
      )
    );
  });

  const animateElement = (
    selector: string,
    from: gsap.TweenVars,
    to: gsap.TweenVars
  ) => {
    const element = document.querySelector(selector);
    gsap.fromTo(
      element,
      { ...from },
      {
        ...to,
        duration: 2,
        ease: "power1.inOut",
        scrollTrigger: getScrollTrigger(selector),
      }
    );
  };

  const getScrollTrigger = (trigger: string) => ({
    trigger,
    start: "top bottom",
    end: "top bottom",
    toggleActions: "play none none none",
    scrub: 1,
  });
  return (
    <span className="servicespage flex flex-col items-stretch px-5 md:m-20 mt-10">
      <div className="text-black md:text-4xl text-2xl font-semibold leading-4 w-full max-md:max-w-full">
        Our services and expertise
      </div>
      <div className="text-black text-justify md:text-xl text-sm w-full mt-14 max-md:max-w-full max-md:mt-10">
        DevLabs is a trailblazing force in Sri Lanka's tech industry,
        specializing in the full product life cycle – from MVP inception to
        ongoing product support and maintenance. Renowned for our industry
        leadership, we've built a formidable reputation that consistently draws
        the top local talent to our ranks.
      </div>
      <div className="item1 w-full mt-16 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
            <span className="bg-neutral-100 flex grow flex-col items-stretch w-full px-12 py-9 rounded-3xl max-md:max-w-full max-md:mt-8 max-md:px-5">
              <img
                loading="lazy"
                src="https://img.icons8.com/ios/120/F98F52/code--v1.png"
                className="aspect-square object-contain object-center w-[70px] overflow-hidden self-center max-w-full"
              />
              <div className="text-black  md:text-lg text-lg font-medium leading-4 self-center whitespace-nowrap mt-9">
                Software Engineering Solutions
              </div>
              <div className="text-neutral-500 text-justify  md:text-xl text-sm mt-10 max-md:max-w-full">
                At DevLabs, we firmly believe that exceptional software
                solutions are born from strong partnerships. Our commitment goes
                beyond the ordinary, as we invest wholeheartedly in fostering
                trust and transparency with every client. Your success is the
                cornerstone of ours.
              </div>
            </span>
          </div>
          <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <span className="bg-neutral-100 flex grow flex-col items-stretch w-full px-12 py-9 rounded-3xl max-md:max-w-full max-md:mt-8 max-md:px-5">
              <img
                loading="lazy"
                src="https://img.icons8.com/ios/100/F98F52/artificial-intelligence.png"
                className="aspect-square object-contain object-center w-[70px] overflow-hidden self-center max-w-full"
              />
              <div className="text-black md:text-lg text-lg font-medium self-center whitespace-nowrap mt-10">
                Data Science, AI and ML Services
              </div>
              <div className="text-neutral-500 text-justify  md:text-xl text-sm mt-10 max-md:max-w-full max-md:mt-10">
                DevLabs excels as a data strategy and implementation authority,
                providing invaluable insights to global players in retail,
                manufacturing, and service industries. Our solutions drive
                measurable ROIs, empowering businesses to thrive in today's
                dynamic landscape.
              </div>
            </span>
          </div>
        </div>
      </div>{" "}
      <div className="item2 w-full mt-8 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
            <span className="bg-neutral-100 flex grow flex-col items-stretch w-full px-12 py-9 rounded-3xl max-md:max-w-full max-md:mt-8 max-md:px-5">
              <img loading="lazy" className="aspect-square object-contain object-center w-[70px] overflow-hidden self-center max-w-full" width="96" height="96" src="https://img.icons8.com/ios/100/F98F52/iot-sensor.png" alt="iot-sensor" />
              <div className="text-black md:text-lg text-lg font-medium leading-4 self-center whitespace-nowrap mt-9">
                IoT and Embedded Systems
              </div>{" "}
              <div className="text-neutral-500 text-justify  md:text-xl text-sm mt-10 max-md:max-w-full">
                DevLabs is a pioneer in IoT and embedded systems, providing
                cutting-edge solutions to a global clientele. Our services
                include hardware design, firmware development, and cloud
                infrastructure, ensuring that our clients are always ahead of the
                curve.
              </div>
            </span>
          </div>{" "}
          <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <span className="bg-neutral-100 flex grow flex-col items-stretch w-full px-12 py-9 rounded-3xl max-md:max-w-full max-md:mt-8 max-md:px-5">
              <img
                loading="lazy"
                src="https://img.icons8.com/ios/100/F98F52/cloud-development.png"
                className="aspect-square object-contain object-center w-[70px] overflow-hidden self-center max-w-full"
              />{" "}
              <div className="text-black tmd:text-lg text-lg font-medium self-center whitespace-nowrap mt-10">
                Cloud Solutions
              </div>{" "}
              <div className="text-neutral-500 text-justify  md:text-xl text-sm mt-10 max-md:max-w-full max-md:mt-10">
                DevLabs is a trusted partner in cloud solutions, offering
                expertise in cloud migration, cloud-native development, and
                cloud security. Our services are designed to empower businesses
                to scale and innovate with confidence.
              </div>
            </span>
          </div>
        </div>
      </div>
    </span>
  );
}

export default Services;


