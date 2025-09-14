import { useEffect, useRef } from "react";
import { RoughNotation } from "react-rough-notation";
import { useTheme } from "next-themes";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { useSection } from "context/section";
import useOnScreen from "hooks/useOnScreen";
import useScrollActive from "hooks/useScrollActive";

const ResumeSection: React.FC = () => {
  const { theme } = useTheme();
  const sectionRef = useRef<HTMLDivElement>(null);
  const resumeRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(resumeRef);

  // Set active link for resume section
  const resumeSection = useScrollActive(sectionRef);
  const { onSectionChange } = useSection();
  useEffect(() => {
    resumeSection && onSectionChange!("resume");
  }, [onSectionChange, resumeSection]);

  // Animations
  useEffect(() => {
    const q = gsap.utils.selector(sectionRef);

    gsap.registerPlugin(ScrollTrigger);

    // Resume card animation
    gsap.fromTo(
      q(".resume-card"),
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        scrollTrigger: {
          trigger: q(".resume-card"),
          start: "top 80%",
        },
      }
    );

    // Button animations
    gsap.fromTo(
      q(".resume-btn"),
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.4,
        stagger: 0.2,
        scrollTrigger: {
          trigger: q(".resume-buttons"),
          start: "top 85%",
        },
      }
    );
  }, []);

  const handleDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/documents/Vyom_Nikhra_Resume.pdf';
    link.download = 'Vyom_Nikhra_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleView = () => {
    // Open PDF in new tab
    window.open('/documents/Vyom_Nikhra_Resume.pdf', '_blank');
  };

  return (
    <section ref={sectionRef} id="resume" className="section">
      <div className="text-center">
        <RoughNotation
          type="underline"
          color={`${theme === "light" ? "rgb(0, 122, 122)" : "rgb(5 206 145)"}`}
          strokeWidth={2}
          order={1}
          show={isOnScreen}
        >
          <h2 className="section-heading" ref={resumeRef}>
            Resume
          </h2>
        </RoughNotation>
      </div>
      
      <div className="mt-8 mb-16 max-w-4xl mx-auto">
        <div className="resume-card bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="text-center mb-8">
            <div className="mb-4">
              <svg 
                className="w-16 h-16 mx-auto text-marrsgreen dark:text-carrigreen"
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              My Professional Resume
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Download or view my complete professional resume with detailed experience, 
              education, skills, and achievements.
            </p>
          </div>

          <div className="resume-buttons flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleDownload}
              className="resume-btn bg-marrsgreen dark:bg-carrigreen text-white px-8 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Download PDF
            </button>
            
            <button
              onClick={handleView}
              className="resume-btn border-2 border-marrsgreen dark:border-carrigreen text-marrsgreen dark:text-carrigreen px-8 py-3 rounded-lg font-medium hover:bg-marrsgreen dark:hover:bg-carrigreen hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
              </svg>
              View Online
            </button>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Last updated: {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long' 
              })}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
