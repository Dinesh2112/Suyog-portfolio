import { useState } from "react";
import "./styles/Work.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Work = () => {
  const [activeCard, setActiveCard] = useState<number>(0);

  useGSAP(() => {
    gsap.fromTo(
      ".accordion-card",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".work-section",
          start: "top 70%",
        },
      }
    );
  }, []);

  const projects = [
    {
      title: "Benfarm Fresh",
      category: "Social Media Management",
      tools: "Instagram, Content Strategy, Meta Business Suite",
      link: "https://www.instagram.com/benfarmm.fresh/",
      image: "/images/benfarm_fresh.png"
    },
    {
      title: "NS Kid Suyog",
      category: "Video Editing & Content",
      tools: "Premiere Pro, After Effects, CapCut",
      link: "https://www.instagram.com/ns_kid_suyog/",
      image: "/images/ns_kid_suyog.png"
    },
    {
      title: "Fund My Case",
      category: "Social Media Management",
      tools: "Instagram, Content Strategy",
      link: "https://www.instagram.com/fundmycase_/",
      image: "/images/fundmycase.png"
    },
    {
      title: "Design Portfolio",
      category: "Graphic Design & UI/UX",
      tools: "Photoshop, Canva, Figma",
      link: "https://www.behance.net/suyogpatil13",
      image: "/images/design_portfolio.png"
    }
  ];

  return (
    <div className="work-section" id="work">
      <div className="section-container">
        <div className="work-layout">
          <h2 className="work-title-side">
            My <br /><span>Work</span>
          </h2>
          <div className="accordion-container">
          {projects.map((project, index) => {
            const isActive = activeCard === index;
            return (
              <div 
                className={`accordion-card ${isActive ? 'active' : ''}`} 
                key={index}
                onClick={() => setActiveCard(index)}
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <div className="accordion-overlay"></div>
                <div className="accordion-content">
                  <div className="accordion-header">
                    <h3>0{index + 1}</h3>
                    {!isActive && <h4 className="rotated-title">{project.title}</h4>}
                  </div>
                  
                  <div className="accordion-details">
                    <div>
                      <h4>{project.title}</h4>
                      <p className="category">{project.category}</p>
                    </div>
                    <div className="tools-section">
                      <h5>Tools and features</h5>
                      <p>{project.tools}</p>
                    </div>
                    <a href={project.link} target="_blank" rel="noreferrer" className="view-btn">
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
