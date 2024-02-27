import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Footer.module.css";

function ListComponent(footerlist: { title: string; items: string[] }) {
  return (
    <div className="font-sans lg:p-4 md:px-8 pl-6 flex  flex-col ">
      <div className="mb-2">
        <div className={styles.title} id="title">
          <div>
            {footerlist.title}
            <div className={styles.underlineDiv} id="underline"></div>
          </div>
        </div>
      </div>
      <div className="pt-4 flex flex-col w-full items-start">
        {footerlist.items.map((item) => (
          <div className="flex flex-row pt-[25px]">
            <div className="flex items-center justify-center ">
              <Image
                alt="Bullet"
                width={7}
                height={7}
                src="/footer/Ellipse 5.png"
              ></Image>
            </div>
            <div
              key={item}
              className="list-none lg:text-xl md:text-base text-xs  leading-loose px-3 "
            >
              {item}
            </div>
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
}
export default function Footer() {
  const PagesList = ["Home", "Services", "Work", "Blogs", "About Us"];

  const ServiceList = [
    "Software Engineering Solutions",
    "Quality Engineering Solutions",
    "Data Science, AI and ML Services",
    "IOT & IOB",
    "DevOps",
  ];

  const SocialMediaLinks = [
    {
      id: 1,
      smlink: "",
      imfPath: "https://img.icons8.com/ios-filled/100/FFFFFF/linkedin.png",
    },
    {
      id: 2,
      smlink: "",
      imfPath: "https://img.icons8.com/ios-glyphs/100/FFFFFF/facebook-new.png",
    },
    // {
    //   id: 3,
    //   smlink: "",
    //   imfPath: "https://img.icons8.com/ios/100/FFFFFF/instagram-new--v1.png",
    // },
    // {
    //   id: 4,
    //   smlink: "",
    //   imfPath: "https://img.icons8.com/ios/100/FFFFFF/x.png",
    // },
  ];

  return (
    <div className="bg-black flex flex-col w-full  font-[redHat-r] text-white md:px-[50px] px-[4px] lg:pt-[60px] pb-1 lg:rounded-t-[50px] rounded-t-[30px] pt-[30px]">
      <div className="flex md:flex-row flex-col mb-8 items-center">
        <div className="flex flex-col lg:w-1/3 w-full">
          <div>
            <Image
              alt="DevLabs LOGO"
              width={215}
              height={215}
              src="/footer/devlabs_logo_new.png"
            ></Image>
          </div>

        </div>
        <div className="">
          <p className="text-sm font-normal text-justify px-6 ">
            Empowering Businesses with Complete IT Solutions. Discover the
            Possibilities at DevLabs. Unleash the potential of technology with
            our comprehensive software services, ranging from development to
            seamless integration. Your success, our commitment.
          </p>
        </div>
        {/* <div className="flex flex-row lg:w-3/5 w-full lg:mt-0 mt-8 ">
          <div className="flex md:w-2/5 w-2/7 lg:justify-center">
            <ListComponent title="Pages" items={PagesList} />
          </div>
          <div className="flex md:w-3/5 w-5/7 lg:justify-center">
            <ListComponent title="Services" items={ServiceList} />
          </div>
        </div> */}
      </div>
      <div className="h-[2px] flex justify-center items-center  bg-orange-400 mx-4 md:m-0"></div>
      <div className="flex flex-row justify-center lg:justify-normal gap-4 py-8 ">
        {SocialMediaLinks.map((item) => (
          <div className="inline-block p-1 rounded-lg transition duration-300 ease-in-out hover:bg-orange-500">
            {" "}
            <Link href={item.smlink}>
              <Image
                src={item.imfPath}
                style={{ height: "auto" }}
                alt="social media icon"
                width={35}
                height={35}
              ></Image>{" "}
            </Link>
          </div>
        ))}
      </div>
      <div>
        <p className="flex justify-center py-2 text-xs">
          © Copyright 2023 by DevLabs. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
