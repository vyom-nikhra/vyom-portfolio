import { useEffect, useRef } from "react";
import { RoughNotation } from "react-rough-notation";
import { useTheme } from "next-themes";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { useSection } from "context/section";
import useOnScreen from "hooks/useOnScreen";
import useScrollActive from "hooks/useScrollActive";

const skills = [
  { name: "Python", category: "Programming", icon: "/skills/python-icon.svg" },
  { name: "TensorFlow", category: "ML Framework", icon: "/skills/tensorflow-icon.svg" },
  { name: "PyTorch", category: "ML Framework", icon: "/skills/pytorch-icon.svg" },
  { name: "Scikit-Learn", category: "ML Library", icon: "/skills/scikit-learn.svg" },
  { name: "SQL", category: "Database", icon: "/skills/sqlite-icon.svg" },
  { name: "Pandas & NumPy", category: "Data Science", icon: "/skills/Pandas.svg" },
  { name: "Matplotlib & Seaborn", category: "Visualization", icon: "/skills/Matplotlib.svg" },
  { name: "Docker", category: "DevOps", icon: "/skills/Docker.svg" },
];

const SkillsSection: React.FC = () => {
  const { theme } = useTheme();
  const sectionRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(skillsRef);

  // Set active link for skills section
  const skillsSection = useScrollActive(sectionRef);
  const { onSectionChange } = useSection();
  useEffect(() => {
    skillsSection && onSectionChange!("skills");
  }, [onSectionChange, skillsSection]);

  // Animations
  useEffect(() => {
    const q = gsap.utils.selector(sectionRef);

    gsap.registerPlugin(ScrollTrigger);

    // Skills grid animation
    gsap.fromTo(
      q(".skill-card"),
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        scrollTrigger: {
          trigger: q(".skills-grid"),
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="section">
      <div className="text-center">
        <RoughNotation
          type="underline"
          color={`${theme === "light" ? "rgb(0, 122, 122)" : "rgb(5 206 145)"}`}
          strokeWidth={2}
          order={1}
          show={isOnScreen}
        >
          <h2 className="section-heading" ref={skillsRef}>
            Technical Skills
          </h2>
        </RoughNotation>
      </div>
      
      <div className="mt-8 mb-16">
        <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
          Technologies and tools I work with
        </p>
        
        <div className="skills-grid grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="skill-card bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700"
            >
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <Image
                    src={skill.icon}
                    alt={`${skill.name} icon`}
                    width={48}
                    height={48}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <h3 className="font-semibold text-lg text-gray-800 dark:text-white mb-2">
                  {skill.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {skill.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
