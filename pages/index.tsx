import type { GetStaticProps, NextPage } from "next";

import AppHead from "@/components/AppHead";
import Loader from "@/components/Loader";
import SkipToMain from "@/components/SkipToMain";
import Header from "@/components/Header";
import SocialLinks from "@/components/SocialLinks";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import ProjectSection from "@/sections/ProjectSection";
import ContactSection from "@/sections/ContactSection";
import Footer from "@/components/Footer";

export const meta = {
  description:
    "Vyom Nikhra is a full-stack developer passionate about writing codes and developing web applications to solve real-life challenges.",
  author: "Vyom Nikhra",
  type: "website",
  ogImage: `${process.env.NEXT_PUBLIC_URL}/vyom-nikhra-dev-og-new.png`,
  siteName: "Vyom Nikhra",
  imageAlt: "Vyom Nikhra portfolio website",
};

const Home: NextPage = () => {
  return (
    <>
      <AppHead
        title="Vyom Nikhra - A Full-stack Developer"
        url={`${process.env.NEXT_PUBLIC_URL}`}
        meta={meta}
      />
      <Loader>VyomNikhra.dev</Loader>
      <div className="bg-bglight dark:bg-bgdark overflow-hidden">
        <div className="selection:bg-marrsgreen selection:text-bglight dark:selection:bg-carrigreen dark:selection:text-bgdark">
          <SkipToMain />
          <Header />
          <main id="main">
            <HeroSection />
            <AboutSection />
            <ProjectSection />
            <ContactSection />
          </main>
          <SocialLinks page="index" />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
