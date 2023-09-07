import Image from "next/image";

function ListComponent({title , items} ){
  return(
    <div className="font-sans p-4 flex justify-center items-center">
      <div>
        <div><h2 className="text-2xl">{title}</h2></div>
        <div className=" bg-orange-400 h-1 w-full"></div>
      </div>
      
      <div>
        {items.map((item,index) =>(
          <div className="flex flex-row">
            <div className="flex items-center justify-center"><Image alt = "Bullet" width={7} height = {7}  src="/Ellipse 5.png" ></Image></div>
            <div><li className="list-none text-xl leading-loose" key={index}>{item}</li></div>
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

  return (
    <div className="bg-black flex flex-col w-full h-[550px] font-sans text-white px-[68px] py-[20px] ">
      <div className="flex flex-row mb-16 justify-between">
        <div className="flex flex-col ">
          <div>
          <Image alt ="DevLabs LOGO" width={250} height = {250}  src="/devlabs_logo.png"></Image>
          </div>
          <div className="w-[338px]">
          <p className="text-sm font-normal text-justify ">Empowering Businesses with Complete IT Solutions. Discover the Possibilities at DevLabs.
             Unleash the potential of technology with our comprehensive software services, ranging from development to seamless integration.
             Your success, our commitment.
          </p>
          </div>
          
        </div>
        <div className="flex flex-row justify-around items-center">

          <div><ListComponent title = 'Pages' items={PagesList}/></div>
          <div><ListComponent title = 'Services' items={ServiceList}/></div>
        </div>
        
      </div>
      <div className="h-1 w-full flex justify-center items-center  bg-orange-400"></div>
      <div></div>
      <div></div>
    </div>
  )
}
