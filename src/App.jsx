import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import TechStackIcons from "./components/TechStackIcons";
import ProjectsInProgress from "./components/ProjectsInProgress";

export default function Hero() {
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(titleRef.current, { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1 });
  }, []);

  const headings = [
    "I am a Frontend Developer",
    "I love building web apps",
    "Let's create something amazing!",
    "I create responsive designs",
    "I enjoy Tailwind CSS, HTML, CSS, and JavaScript",
    "I am a React developer",
    "I am Computer Science Student",
  ];
  const h2Ref = useRef(null);
  const headingIndex = useRef(0);
  useEffect(() => {
    const animateH2 = () => {
      gsap.to(h2Ref.current, {
        opacity: 0,
        y: 30,
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: () => {
          headingIndex.current = (headingIndex.current + 1) % headings.length;
          h2Ref.current.textContent = headings[headingIndex.current];
          gsap.fromTo(
            h2Ref.current,
            { opacity: 0, y: -30 },
            { opacity: 1, y: 0, duration: 1.5, ease: "power2.inOut" }
          );
        }
      });
    };

    const interval = setInterval(() => {
      animateH2();
    }, 1750);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col min-h-screen items-center justify-center ">
      <h1 ref={titleRef} className="mt-42 flex text-8xl font-bold text-black mb-4">
        Hello, I'm Shreyas <img src="smiley.png" className="mt-1 ml-8 h-24 w-24"></img>
      </h1>
      <h2 ref={h2Ref} className="text-4xl font-semibold text-blue-500 mb-4">
        {headings[0]}
      </h2>

  <div className="flex space-x-4 mt-4">

  <a href="https://www.instagram.com/hardly_shreyas/">  <img src="./instagram-svgrepo-com.svg" alt="Instagram Logo" className="w-8 h-8" /></a>
  <a href="https://www.linkedin.com/in/shreyas-anand-040492331/"><img src="./linkedin-svgrepo-com.svg" alt="LinkedIn Logo" className="w-8 h-8" /></a>
  <a href="https://x.com/shreyas56975116">  <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50">
  <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
  </svg></a>
  <a href="https://github.com/shreyas20060" className="w-8 h-8" target="_blank" rel="noopener noreferrer">
   <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 30 30">
   <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
   </svg>
  </a>

  </div>

     <TechStackIcons />
     <div className="mt-24"> 
         <ProjectsInProgress/>
     </div>
    
  
    </section>
  );
}
