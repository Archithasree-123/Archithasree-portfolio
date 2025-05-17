
import { useRef, useEffect } from 'react';
import { Progress } from "@/components/ui/progress";

const Skills = () => {
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

  const skills = {
    languages: ["Java", "C", "Javascript", "HTML", "CSS"],
    libraries: ["ReactJs"],
    tools: ["VSCode", "Git", "Github", "Postman", "Codepin"],
    databases: ["MongoDB", "Firebase", "Relational Database(mySQL)"],
    softSkills: ["Problem Solving", "Communication", "Presentation", "Adaptability"]
  };

  const certifications = [
    "Salesforce- 2x certified",
    "Oracle-2x certified",
    "Python for data science- NPTEL",
    "C programming, JavaScript- Udemy",
    "Enterprise Design Thinking Course- IBM",
    "Introduction to Internet Of Things- NPTEL"   
  ];

  const achievements = [
    "All Round Performer- Gold level 2024",
    "State level Hackathon- Qualified to final round",
    "State and district rank holder- English Proficiency test by Bharath Institute of English",
    "Got selected for II round of EY hackathon"
  ];

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-24 bg-white opacity-0"
    >
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="relative inline-block">
            Skills & Certifications
            <span className="absolute bottom-0 left-0 w-full h-1 bg-portfolio-pink transform origin-left"></span>
          </span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Technical Skills */}
          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
            <h3 className="text-xl font-bold mb-6 text-portfolio-purple">Technical Skills</h3>
            
            <div className="space-y-8">
              {Object.entries(skills).map(([category, skillList], index) => (
                <div key={category} className="animate-fade-right" style={{ animationDelay: `${index * 0.2}s` }}>
                  <h4 className="text-lg font-medium mb-3 capitalize">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, i) => (
                      <span 
                        key={i} 
                        className="bg-portfolio-lightPurple/20 text-portfolio-purple px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Certifications & Achievements */}
          <div className="flex flex-col gap-10">
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 animate-fade-left" style={{ animationDelay: `0.2s` }}>
              <h3 className="text-xl font-bold mb-6 text-portfolio-purple">Certifications</h3>
              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-portfolio-pink mr-3"></div>
                    <span className="text-gray-700">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 animate-fade-left" style={{ animationDelay: `0.4s` }}>
              <h3 className="text-xl font-bold mb-6 text-portfolio-purple">Achievements</h3>
              <ul className="space-y-3">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-portfolio-pink mr-3"></div>
                    <span className="text-gray-700">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
