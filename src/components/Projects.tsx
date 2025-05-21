
import { useRef, useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeFilter, setActiveFilter] = useState('all');
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const projects = [
    {
      title: "Modern Periodic Table Program",
      description: "A program to know about the element in periodic table. Search elements by atomic number and get detailed information.",
      tech: ["C"],
      link: "https://github.com/architha",
      category: "software"
    },
    {
      title: "E-Commerce Website",
      description: "A webpage of ticket booking system styled with contact form and storage database.",
      tech: ["Frontend"],
      link: "https://github.com/architha",
      category: "web"
    },
    {
      title: "Event Management Webpage",
      description: "A Simple Fashion store webpage managing events with all necessary details of fashion store.",
      tech: ["CSS", "HTML"],
      link: "https://github.com/architha",
      category: "web"
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-24 bg-portfolio-beige/10 opacity-0"
    >
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="relative inline-block">
            Projects
            <span className="absolute bottom-0 left-0 w-full h-1 bg-portfolio-purple transform origin-left"></span>
          </span>
        </h2>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['all', 'web', 'software'].map(filter => (
            <Button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              variant={activeFilter === filter ? "default" : "outline"}
              className={`
                capitalize
                ${activeFilter === filter 
                  ? 'bg-portfolio-darkPurple hover:bg-portfolio-darkPurple/90' 
                  : 'border-portfolio-purple text-portfolio-purple hover:bg-portfolio-purple/10'
                }
              `}
            >
              {filter}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-up bg-white"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="h-48 bg-gradient-to-br from-portfolio-darkPurple to-portfolio-purple flex items-center justify-center">
                <span className="text-white text-xl font-bold">{project.title.charAt(0)}</span>
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-gray-800">{project.title}</CardTitle>
                <CardDescription className="text-gray-500">{project.tech.join(", ")}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{project.description}</p>
              </CardContent>
              <CardFooter className="flex justify-end">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-portfolio-darkPurple hover:bg-portfolio-purple">
                    View Project
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
