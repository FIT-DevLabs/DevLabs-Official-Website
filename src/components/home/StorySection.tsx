import Image from "next/image";
import StorySectionCarousel from "./StorySectionCarousel";
import Button from "../common/Button";
export default function StorySection() {

  const scrollVertically = (e: any) => {
    e.preventDefault();
    const location = (document.querySelector("#projectsection") as HTMLElement)?.offsetTop;
    window.scrollTo({
      top: location,
      behavior: "smooth",
    });
  }

  return (
    <div>
      <section className="grid mx-1 lg:grid-cols-8 my-5 lg:ml-10">
        <div className="sm:col-span-8 lg:col-span-4">
          <div className="w-full  bg-yellow-800 bg-gradient-to-r from-black pt-4 rounded-t-[30px] md:bg-yellow-800 md:bg-gradient-to-b md:from-black md:pl-6 md:pt-0 md:rounded-l-[70px] relative">
            <Image
              src={"/story_section/carousel_images/facultyPicCover2.jpg"}
              alt="alt"
              width={0}
              height={0}
              sizes="100vw"
              style={{ minWidth: "100%", height: "auto" }}
              className="rounded-t-[30px] md:rounded-l-[70px] md:rounded-r-[0px] z-10"
            />
          </div>
        </div>
        <div className="font-display pl-10 pr-10 pt-7 pb-10 lg:p-14 md:col-span-5 lg:col-span-4">
          <div className="grid grid-rows-1 pb-10 text-3xl ">Our Story</div>
          <div className="text-justify grid grid-rows-1 lg:text-xl md:text-sm text-xs mb-5 lg:mb-5 xl:mb-5 ">
            <p>
              Discover our innovative projects that showcase the intersection of
              creativity and technology. Explore how we're shaping industries
              and pushing boundaries through our transformative solutions.
              Discover our innovative projects that showcase the intersection of
              creativity and technology. Explore how we're shaping industries
              and pushing boundaries through our transformative
              solutions.Discover our innovative projects that showcase the
              intersection of creativity and technology. Explore how we're
              shaping industries and pushing boundaries through our
              transformative solutions.
            </p>
          </div>
          <div className="flex justify-center md:justify-start ">
            <Button link="Explore..." color="orange" iconName="" click={() => scrollVertically({ preventDefault: () => { } })} />
          </div>
        </div>
      </section>
      <section className="grid mx-1">
        <StorySectionCarousel />
      </section>
    </div>
  );
}
