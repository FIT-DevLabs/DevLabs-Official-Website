import * as React from "react";

function Services() {
  return (
    <span className="flex flex-col items-stretch px-5 md:m-20 mt-10">
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
      <div className="w-full mt-16 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
            <span className="bg-neutral-100 flex grow flex-col items-stretch w-full px-12 py-9 rounded-3xl max-md:max-w-full max-md:mt-8 max-md:px-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/72ad7566dd743562616b67c75fa5c0ac49bd33a9d79744b98b5b6b73b7f00176?apiKey=0f1c56ca544b4243bdfa468c47ca1777&"
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
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f7a1ec87630d6d88baeef9fe4b72f6087a5869be7227855c3462ce6977970e7f?apiKey=0f1c56ca544b4243bdfa468c47ca1777&"
                className="aspect-square object-contain object-center w-[70px] overflow-hidden self-center max-w-full"
              />
              <div className="text-black md:text-lg text-lg font-medium self-center whitespace-nowrap mt-10">
                Data Science, AI and ML Service
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
      <div className="w-full mt-8 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
            <span className="bg-neutral-100 flex grow flex-col items-stretch w-full px-12 py-9 rounded-3xl max-md:max-w-full max-md:mt-8 max-md:px-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/72ad7566dd743562616b67c75fa5c0ac49bd33a9d79744b98b5b6b73b7f00176?apiKey=0f1c56ca544b4243bdfa468c47ca1777&"
                className="aspect-square object-contain object-center w-[70px] overflow-hidden self-center max-w-full"
              />{" "}
              <div className="text-black md:text-lg text-lg font-medium leading-4 self-center whitespace-nowrap mt-9">
                Software Engineering Solutions
              </div>{" "}
              <div className="text-neutral-500 text-justify  md:text-xl text-sm mt-10 max-md:max-w-full">
                At DevLabs, we firmly believe that exceptional software
                solutions are born from strong partnerships. Our commitment goes
                beyond the ordinary, as we invest wholeheartedly in fostering
                trust and transparency with every client. Your success is the
                cornerstone of ours.
              </div>
            </span>
          </div>{" "}
          <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <span className="bg-neutral-100 flex grow flex-col items-stretch w-full px-12 py-9 rounded-3xl max-md:max-w-full max-md:mt-8 max-md:px-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f7a1ec87630d6d88baeef9fe4b72f6087a5869be7227855c3462ce6977970e7f?apiKey=0f1c56ca544b4243bdfa468c47ca1777&"
                className="aspect-square object-contain object-center w-[70px] overflow-hidden self-center max-w-full"
              />{" "}
              <div className="text-black tmd:text-lg text-lg font-medium self-center whitespace-nowrap mt-10">
                Data Science, AI and ML Service
              </div>{" "}
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
      </div>
    </span>
  );
}

export default Services;


