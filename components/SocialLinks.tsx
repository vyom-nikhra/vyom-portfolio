import { useSection } from "context/section";

const SocialLinks: React.FC<{ page?: string }> = ({ page }) => {
  const { currentSection } = useSection();
  return (
    <>
      {page === "index" ? (
        <div className="hidden fixed left-10 bottom-1/3 md:flex flex-col w-6 h-52 items-center justify-between">
          {navLinks.map((nav) => {
            return (
              <a
                title={nav.text}
                href={nav.url}
                key={nav.url}
                className={`transition-all outline-marrsdark dark:outline-textlight hover:bg-marrsgreen dark:hover:bg-carrigreen ${
                  currentSection === nav.text.toLowerCase()
                    ? "bg-marrsgreen dark:bg-carrigreen rotate-0"
                    : "opacity-50 focus-visible:opacity-100 hover:opacity-80 rotate-45 hover:rotate-12"
                } w-3 h-3 border-2 border-marrsgreen dark:border-carrigreen`}
              ></a>
            );
          })}
        </div>
      ) : (
        <div className="hidden fixed left-10 bottom-0 md:flex flex-col w-6 h-56 items-center justify-between">
          <div className="-rotate-90 text-lg tracking-widest">
            <a
              href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
              className="link-outline hover:text-marrsgreen dark:hover:text-carrigreen"
            >
              {process.env.NEXT_PUBLIC_EMAIL}
            </a>
          </div>
          <div className="w-40 h-1 bg-bgdark dark:bg-bglight rotate-90"></div>
        </div>
      )}
      <div className="hidden fixed right-10 bottom-0 md:flex flex-col w-6 h-[17rem] items-center justify-between">
        <div className="flex flex-col space-y-6">
          {socialLinks.map((social) => (
            <a
              key={social.id}
              title={social.title}
              href={social.link}
              className="scale-110 rounded link-outline"
            >
              {social.svg}
            </a>
          ))}
        </div>
        <div className="w-40 h-1 bg-bgdark dark:bg-bglight rotate-90"></div>
      </div>
    </>
  );
};

const socialLinks = [
  {
    id: 1,
    title: "Vyom Nikhra's Github Profile",
    link: "https://github.com/vyom-nikhra",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        className="dark:fill-bglight hover:fill-marrsgreen dark:hover:fill-carrigreen"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Vyom Nikhra's LinkedIn Profile",
    link: "https://www.linkedin.com/in/vyom-nikhra/",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="dark:fill-bglight hover:fill-marrsgreen dark:hover:fill-carrigreen"
      >
        <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"></path>
      </svg>
    ),
  },
  {
    id: 4,
    title: "Vyom Nikhra's Profile on Instagram",
    link: "https://www.instagram.com/vyom_nikhra/ ",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        className="dark:fill-bglight hover:fill-marrsgreen dark:hover:fill-carrigreen"
      >
        <path d="M12.017 0C8.396 0 7.989.016 6.756.071 5.526.126 4.74.302 4.045.57c-.738.285-1.365.662-1.988 1.285C1.434 2.478 1.057 3.105.772 3.843c-.268.695-.444 1.481-.499 2.711C.216 7.787.2 8.194.2 11.815s.016 4.028.071 5.261c.055 1.23.231 2.016.499 2.711.285.738.662 1.365 1.285 1.988.623.623 1.25 1 1.988 1.285.695.268 1.481.444 2.711.499 1.233.055 1.64.071 5.261.071s4.028-.016 5.261-.071c1.23-.055 2.016-.231 2.711-.499.738-.285 1.365-.662 1.988-1.285.623-.623 1-1.25 1.285-1.988.268-.695.444-1.481.499-2.711.055-1.233.071-1.64.071-5.261s-.016-4.028-.071-5.261c-.055-1.23-.231-2.016-.499-2.711-.285-.738-.662-1.365-1.285-1.988C19.42 1.434 18.793 1.057 18.055.772c-.695-.268-1.481-.444-2.711-.499C14.011.016 13.604 0 9.983 0h2.034zm-.05 2.188c3.539 0 3.959.014 5.353.069 1.292.059 1.994.274 2.461.456.619.24 1.061.527 1.527.993.466.466.753.908.993 1.527.182.467.397 1.169.456 2.461.055 1.394.069 1.814.069 5.353 0 3.539-.014 3.959-.069 5.353-.059 1.292-.274 1.994-.456 2.461-.24.619-.527 1.061-.993 1.527-.466.466-.908.753-1.527.993-.467.182-1.169.397-2.461.456-1.394.055-1.814.069-5.353.069-3.539 0-3.959-.014-5.353-.069-1.292-.059-1.994-.274-2.461-.456-.619-.24-1.061-.527-1.527-.993-.466-.466-.753-.908-.993-1.527-.182-.467-.397-1.169-.456-2.461-.055-1.394-.069-1.814-.069-5.353 0-3.539.014-3.959.069-5.353.059-1.292.274-1.994.456-2.461.24-.619.527-1.061.993-1.527.466-.466.908-.753 1.527-.993.467-.182 1.169-.397 2.461-.456 1.394-.055 1.814-.069 5.353-.069zm0 3.701a5.928 5.928 0 1 0 0 11.856 5.928 5.928 0 0 0 0-11.856zm0 9.778a3.85 3.85 0 1 1 0-7.7 3.85 3.85 0 0 1 0 7.7zm7.554-10.009a1.384 1.384 0 1 1-2.768 0 1.384 1.384 0 0 1 2.768 0z" />
      </svg>
    ),
  },
];

const navLinks = [
  {
    url: "#",
    text: "Welcome",
  },
  {
    url: "#whoami",
    text: "Who am i?",
  },
  {
    url: "#projects",
    text: "Projects",
  },
  {
    url: "#skills",
    text: "Skills",
  },
  {
    url: "#achievements",
    text: "Achievements",
  },
  {
    url: "#resume",
    text: "Resume",
  },
  {
    url: "#contact",
    text: "Contact",
  },
];

export default SocialLinks;
