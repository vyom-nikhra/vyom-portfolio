import { useEffect, useRef } from "react";
import { RoughNotation } from "react-rough-notation";
import { useTheme } from "next-themes";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { useSection } from "context/section";
import useOnScreen from "hooks/useOnScreen";
import useScrollActive from "hooks/useScrollActive";

const achievements = [
  {
    position: "1st Place",
    event: "Chakravyuh 2025",
    description: "Secured the top position in the largest event organized by GDG and IOTA.",
    icon: "🏆",
    color: "text-yellow-600 dark:text-yellow-400"
  },
  {
    position: "3rd Place", 
    event: "Global Game Jam (GGJ) 2025",
    description: "Achieved a podium finish, competing against over 50+ teams.",
    icon: "🥉",
    color: "text-amber-600 dark:text-amber-400"
  },
  {
    position: "4th Place",
    event: "Agri AI Hackathon",
    description: "Placed among the top teams in a competitive hackathon focused on AI in agriculture.",
    icon: "🌾",
    color: "text-green-600 dark:text-green-400"
  }
];

const AchievementsSection: React.FC = () => {
  const { theme } = useTheme();
  const sectionRef = useRef<HTMLDivElement>(null);
  const achievementsRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(achievementsRef);

  // Set active link for achievements section
  const achievementsSection = useScrollActive(sectionRef);
  const { onSectionChange } = useSection();
  useEffect(() => {
    achievementsSection && onSectionChange!("achievements");
  }, [onSectionChange, achievementsSection]);

  // Animations
  useEffect(() => {
    const q = gsap.utils.selector(sectionRef);

    gsap.registerPlugin(ScrollTrigger);

    // Achievement cards animation
    gsap.fromTo(
      q(".achievement-card"),
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.2,
        scrollTrigger: {
          trigger: q(".achievements-container"),
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} id="achievements" className="section">
      <div className="text-center">
        <RoughNotation
          type="underline"
          color={`${theme === "light" ? "rgb(0, 122, 122)" : "rgb(5 206 145)"}`}
          strokeWidth={2}
          order={1}
          show={isOnScreen}
        >
          <h2 className="section-heading" ref={achievementsRef}>
            Achievements
          </h2>
        </RoughNotation>
      </div>
      
      <div className="mt-8 mb-16">
        <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
          Recognition and accomplishments in competitive events
        </p>
        
        <div className="achievements-container max-w-4xl mx-auto space-y-6">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.event}
              className="achievement-card bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-start space-x-4">
                <div className="text-4xl flex-shrink-0">
                  {achievement.icon}
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="font-bold text-xl text-gray-800 dark:text-white">
                      {achievement.event}
                    </h3>
                    <span className={`font-semibold text-lg ${achievement.color}`}>
                      {achievement.position}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
