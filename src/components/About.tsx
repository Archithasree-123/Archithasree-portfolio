
import { useEffect, useRef } from 'react';

const About = () => {
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

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-24 bg-white opacity-0"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-portfolio-purple to-portfolio-pink rounded-full mx-auto overflow-hidden shadow-xl">
                {/* This would be where your profile image would go */}
                <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
                  Profile Image
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-portfolio-lightPink rounded-full -z-10"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-portfolio-lightPurple rounded-full -z-10"></div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 inline-block relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-1 after:w-1/3 after:bg-portfolio-pink">
              About Me
            </h2>
            <p className="text-gray-700 mb-4">
              I'm a passionate Full Stack Developer and Electronics & Communication Engineering student with a strong foundation in web development, problem solving, and communication.
            </p>
            <p className="text-gray-700 mb-4">
              With hands-on experience in both frontend and backend technologies, I specialize in creating responsive and user-friendly web applications. My technical skills include C, Python, JavaScript, HTML/CSS, and various frameworks and libraries.
            </p>
            <p className="text-gray-700">
              I enjoy tackling complex problems and continuously expanding my knowledge in web design and development, API testing, and internet technologies.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-portfolio-lightPurple flex items-center justify-center text-portfolio-purple">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-gray-700">archithasree233@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-portfolio-lightPurple flex items-center justify-center text-portfolio-purple">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-gray-700">+91-814887809</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
