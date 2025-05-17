
import { useRef, useEffect } from 'react';

const Education = () => {
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

  const educations = [
    {
      institution: "SNS College of Engineering",
      degree: "B.E Electronics and communication engineering",
      year: "2022-2026",
      grade: "CGPA: 8.94"
    },
    {
      institution: "Vimal Jyothi Convent Matric Higher Secondary school",
      degree: "SSLC and HSC",
      year: "2020-2022",
      grade: "Percentage: 84%"
    }
  ];

  return (
    <section 
      id="education" 
      ref={sectionRef}
      className="py-24 bg-portfolio-lightPink/10 opacity-0"
    >
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="relative inline-block">
            Education
            <span className="absolute bottom-0 left-0 w-full h-1 bg-portfolio-pink transform origin-left"></span>
          </span>
        </h2>
        
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-portfolio-purple/30 rounded"></div>
          
          {educations.map((edu, index) => (
            <div 
              key={index}
              className={`relative mb-16 md:ml-0 ${
                index % 2 === 0 ? 'md:ml-auto md:mr-[50%] md:pr-12' : 'md:ml-[50%] md:pl-12'
              }`}
            >
              <div 
                className={`bg-white p-6 rounded-lg shadow-lg border-l-4 border-portfolio-purple 
                  ${index % 2 === 0 ? 'animate-fade-right' : 'animate-fade-left'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="absolute top-6 md:top-1/2 md:transform md:-translate-y-1/2 w-4 h-4 rounded-full bg-portfolio-pink z-10
                  left-[-10px] md:left-auto
                  ${index % 2 === 0 ? 'md:right-[-10px]' : 'md:left-[-10px]'}">
                </div>
                
                <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-portfolio-purple rounded-full mb-3">
                  {edu.year}
                </span>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{edu.institution}</h3>
                <p className="text-gray-700 mb-2">{edu.degree}</p>
                <p className="text-portfolio-purple font-medium">{edu.grade}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
