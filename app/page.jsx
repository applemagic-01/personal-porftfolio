import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from 'react-icons/fi';

const Home = () => {
  return <section className="h-full">
    <div className="container h-full mx-auto">
      <div className="flex flex-col items-center justify-between xl:flex-row xl:pt-8 xl:pb-24">
        {/* Text */}
        <div className="order-2 text-center xl:text-left xl:order-none">
          <span className="text-xl ">Master of Computer Applications Student</span>
          <h1 className="mb-6 h1">Hello, I'm<br />
            <span className="text-accent">Ankith</span></h1>
          <p className="max-w-[500px] mb-9 text-white/80 ">Master's student with a passion for Web and App development. I'm seeking opportunities to apply my knowledge and contribute to innovative software development projects.</p>
          {/* Button and social account  */}
          <div className="flex flex-col items-center gap-8 xl:flex-row">
            <Button asChild variant="outline" size="lg" className="flex items-center gap-2 uppercase">
              <a href="/assets/resume/ANKITH_RESUME.pdf" download>
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </a>
            </Button>
            {  /* Social Icons */}
            <div className="mb-8 xl:mb-0">
              <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duraton-500" />
            </div>
          </div>
        </div>
        {/* Photo */}
        <div className="w-[298px] h-[298px] xl:w-[400px] xl:h-[400px] mt-8 xl:mt-0 order-1 xl:order-none mb-8 xl:mb-0">
          <Photo />
        </div>
      </div>
    </div>
    <Stats />
  </section>
}

export default Home
