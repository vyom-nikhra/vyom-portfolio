import Image from "next/image";
import { useEffect, useRef } from "react";
import { RoughNotation } from "react-rough-notation";
import { useTheme } from "next-themes";

import ProjectCard from "@/components/ProjectCard";
import { useSection } from "context/section";
import useOnScreen from "hooks/useOnScreen";
import useScrollActive from "hooks/useScrollActive";

import demeterAi from "public/projects/Chatbot.png";

const ProjectSection: React.FC = () => {
  const { theme } = useTheme();

  const sectionRef = useRef<HTMLDivElement>(null);

  const elementRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(elementRef);

  // Set active link for project section
  const projectSection = useScrollActive(sectionRef);
  const { onSectionChange } = useSection();
  useEffect(() => {
    projectSection && onSectionChange!("projects");
  }, [onSectionChange, projectSection]);

  return (
    <section ref={sectionRef} id="projects" className="section">
      <div className="project-title text-center">
        <RoughNotation
          type="underline"
          color={`${theme === "light" ? "rgb(0, 122, 122)" : "rgb(5 206 145)"}`}
          strokeWidth={2}
          order={1}
          show={isOnScreen}
        >
          <h2 className="section-heading">Featured Projects</h2>
        </RoughNotation>
      </div>
      <span className="project-desc text-center block mb-4" ref={elementRef}>
        “Talk is cheap. Show me the code”? I got you. <br />
        Here are some of my projects you shouldn't misss
      </span>
      <div className="flex flex-wrap">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} index={index} project={project} />
        ))}
      </div>
      <div className="others text-center mb-16">
        Other projects can be explored in{" "}
        <a
          href="https://github.com/vyom-nikhra"
          className="font-medium underline link-outline text-marrsgreen dark:text-carrigreen whitespace-nowrap"
        >
          my github profile
        </a>
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Demeter AI",
    type: "Full Stack / AI",
    image: (
      <Image
        src={demeterAi}
        sizes="100vw"
        fill
        alt="Demeter AI"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Demeter AI provides smart farming solutions by analyzing soil, weather, and crop data. Features include crop recommendation, fertilizer suggestions, disease detection via image recognition, real-time weather integration, and a multilingual AI chatbot for farming advice. Built with Flask, TensorFlow, and scikit-learn.",
    tags: ["Python", "Flask", "TensorFlow", "scikit-learn", "AI", "Machine Learning", "Smart Farming"],
    liveUrl: "", // Add live demo if available
    codeUrl: "https://github.com/patelatwork/DemeterAi-Project",
    bgColor: "bg-[#D0F0C0]",
    githubApi: "https://api.github.com/repos/patelatwork/DemeterAi-Project",
  },
  {
    title: "Adobe Hackathon Project",
    type: "Full Stack / AI",
    image: (
      <div className="w-full h-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
        <span className="text-white text-2xl font-bold">ADOBE</span>
      </div>
    ),
    desc: "Developed a containerized solution for Adobe Challenge 1B with integrated Round 1A PDF heading extraction. Processes PDFs to extract hierarchical headings (titles, H1, H2, H3) and performs semantic analysis to generate ranked, structured outputs based on persona and job requirements. Designed for offline use with Docker deployment.",
    tags: ["Python", "Docker", "PDF Parsing", "JSON", "AI", "Machine Learning"],
    liveUrl: "",
    codeUrl: "https://github.com/vyom-nikhra/Adobe-Challenge-1-B",
    bgColor: "bg-[#FFF3E6]",
    githubApi: "https://api.github.com/repos/vyom-nikhra/Adobe-Challenge-1-B",
  },
];


export default ProjectSection;
