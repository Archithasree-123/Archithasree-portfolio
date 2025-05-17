
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-white via-portfolio-lightPink to-portfolio-lightPurple/20 pt-16"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-portfolio-purple to-portfolio-pink bg-clip-text text-transparent">
            Architha Sree L K
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            Full Stack Developer
          </p>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Electronics & Communication Engineer with expertise in Web Development, 
            Problem Solving, and a passion for creating elegant solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="contact" spy={true} smooth={true} offset={-70} duration={500}>
              <Button className="bg-portfolio-purple hover:bg-portfolio-purple/90 text-white px-6 py-2 rounded-md text-lg">
                Contact Me
              </Button>
            </Link>
            <Link to="projects" spy={true} smooth={true} offset={-70} duration={500}>
              <Button variant="outline" className="border-portfolio-purple text-portfolio-purple hover:bg-portfolio-purple/10 px-6 py-2 rounded-md text-lg">
                View Projects
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <Link to="about" spy={true} smooth={true} offset={-70} duration={500} className="cursor-pointer">
          <ChevronDown className="h-8 w-8 text-portfolio-purple" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
