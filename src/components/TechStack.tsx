import { SiCanva, SiFigma } from "react-icons/si";
import { 
  TbBrandAdobePremier, 
  TbBrandAdobeAfterEffect, 
  TbBrandAdobePhotoshop,
  TbCut
} from "react-icons/tb";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./styles/TechStack.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const skills = [
  { name: "Premiere Pro", icon: <TbBrandAdobePremier size={50} color="#9999ff" /> },
  { name: "After Effects", icon: <TbBrandAdobeAfterEffect size={50} color="#9999ff" /> },
  { name: "Canva", icon: <SiCanva size={50} color="#00C4CC" /> },
  { name: "Figma", icon: <SiFigma size={50} color="#F24E1E" /> },
  { name: "Photoshop", icon: <TbBrandAdobePhotoshop size={50} color="#31A8FF" /> },
  { name: "CapCut", icon: <TbCut size={50} color="#fff" /> },
];

const TechStack = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".skill-card",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".skills-section",
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <div className="skills-section">
      <div className="skills-container section-container">
        <h2 className="skills-title">
          My <span>Skills</span> & Tools
        </h2>
        
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-icon-wrapper">{skill.icon}</div>
              <h3>{skill.name}</h3>
              <div className="skill-accent"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
