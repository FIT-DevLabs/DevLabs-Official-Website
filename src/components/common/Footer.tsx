import Image from "next/image";
import Link from "next/link";

function ListComponent({title , items} ){
  return(
    <div className="font-sans lg:p-4 px-8 flex  flex-col ">
      <div className="mb-2">
        <h2 className="lg:text-2xl text-xl relative inline-block pb-1">
          {title}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-black"></div>
        </h2>
      </div>
      <div className="pt-4 flex flex-col w-full items-start">
        {items.map((item,index) =>(
          <div className="flex flex-row pt-[25px]">
            <div className="flex items-center justify-center"><Image alt = "Bullet" width={7} height = {7}  src="/footer/Ellipse 5.png" ></Image></div>
            <div key={index} className="list-none lg:text-xl md:text-base sm:text-sm leading-loose px-3 ">{item}</div>
          </div>
        ))}
      </div>
      <div>

      </div>
    </div>
  )
}
export default function Footer() {

  const PagesList = ['Home','Services','Work','Blogs','About Us'];
  
  const ServiceList = ['Software Engineering Solutions','Quality Engineering Solutions','Data Science, AI and ML Services','IOT & IOB','DevOps'];

  const SocialMediaLinks = [
    {
      id:1, smlink:"", imfPath:"/footer/social icons/fb.png"
    },
    {
      id:2, smlink:"", imfPath:"/footer/social icons/insta.png"
    },
    {
      id:3, smlink:"", imfPath:"/footer/social icons/Vector.png"
    },
    {
      id:4, smlink:"", imfPath:"/footer/social icons/linkedIn.png"
    },
  ]
   
  return (
    <div className="bg-black flex flex-col w-full  font-sans text-white md:px-[50px] px-[30px] lg:pt-[60px] pb-1 lg:rounded-t-[50px] rounded-t-[30px] pt-[30px]">
      <div className="flex lg:flex-row flex-col mb-16">
        <div className="flex flex-col lg:w-1/3 w-full">
          <div>
          <Image alt ="DevLabs LOGO" width={215} height = {215}  src="/footer/devlabs_logo_new.png"></Image>
          </div>
          <div>
          <p className="text-sm font-normal text-justify px-8 ">Empowering Businesses with Complete IT Solutions. Discover the Possibilities at DevLabs.
             Unleash the potential of technology with our comprehensive software services, ranging from development to seamless integration.
             Your success, our commitment.
          </p>
          </div> 
        </div>
        <div className="flex flex-row lg:w-3/5 w-full lg:mt-0 mt-8 ">

          <div className="flex w-2/5 lg:justify-center"><ListComponent title = 'Pages' items={PagesList}/></div>
          <div className="flex w-3/5 lg:justify-center"><ListComponent title = 'Services' items={ServiceList}/></div>
        </div> 
      </div>
      <div className="h-[2px] flex justify-center items-center  bg-orange-400 "></div>
      <div className="flex flex-row justify-center lg:justify-normal gap-8 py-8">
          {SocialMediaLinks.map((item)=>(
            <div > <Link href= {item.smlink}><Image src={item.imfPath} alt="social media icon" width = {20} height={20}></Image> </Link></div>
          ))}
      </div>
      <div><p className="flex justify-center py-2 text-xs">© Copyright 2023 by DevLabs. All Rights Reserved.</p></div>
    </div>
  )
}
