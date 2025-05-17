
import { useRef, useEffect } from 'react';

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
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

  const experiences = [
    {
      company: "SNS Innovation Hub",
      role: "Junior software associate Intern",
      period: "Aug - Dec 2024",
      location: "Onsite",
      description: [
        "Worked as Full stack developer with frontend specification.",
        "Also worked in Github repository collaboration."
      ]
    },
    {
      company: "Altitudes IT Solutions",
      role: "Web Development Intern",
      period: "July 2024",
      location: "Onsite",
      description: [
        "Hands on learning experience in web development and API Testing."
      ]
    }
  ];

  return (
    <section 
      id="experience" 
      ref={sectionRef}
      className="py-24 bg-white opacity-0"
    >
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="relative inline-block">
            Work Experience
            <span className="absolute bottom-0 left-0 w-full h-1 bg-portfolio-pink transform origin-left"></span>
          </span>
        </h2>
        
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="relative pl-8 pb-12 border-l-2 border-portfolio-purple last:border-0"
            >
              {/* Circle on timeline */}
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-portfolio-pink"></div>
              
              <div 
                className="bg-white p-6 rounded-lg shadow-md border-l-4 border-portfolio-purple animate-fade-right"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <div className="flex flex-col sm:flex-row sm:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{exp.company}</h3>
                    <p className="text-portfolio-purple font-medium">{exp.role}</p>
                  </div>
                  <div className="mt-2 sm:mt-0">
                    <span className="bg-portfolio-lightPurple/30 text-portfolio-purple text-sm px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                    <p className="text-gray-600 text-sm mt-1 text-right">{exp.location}</p>
                  </div>
                </div>
                
                <ul className="mt-3 space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-portfolio-purple mt-2 mr-2"></span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
