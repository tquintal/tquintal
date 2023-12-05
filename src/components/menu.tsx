import { useEffect, useState } from "react";

import { useRefs } from "../context/refs";
import { scrollTo } from "../utils/scroll-to";

enum SectionKeys {
  ABOUT = "ABOUT",
  PROJECTS = "PROJECTS",
  TECH = "TECH",
  INTERESTS = "INTERESTS",
  LINKS = "LINKS",
}

const Menu = () => {
  const { aboutRef, interestsRef, projectsRef, techRef, linksRef } = useRefs();

  const [current, setCurrent] = useState<SectionKeys>(SectionKeys.ABOUT);

  const scrollToHandler = (to: SectionKeys) => {
    let targetRef: React.RefObject<HTMLDivElement> | null = null;

    switch (to) {
      case SectionKeys.ABOUT:
        targetRef = aboutRef;
        break;
      case SectionKeys.PROJECTS:
        targetRef = projectsRef;
        break;
      case SectionKeys.TECH:
        targetRef = techRef;
        break;
      case SectionKeys.INTERESTS:
        targetRef = interestsRef;
        break;
      case SectionKeys.LINKS:
        targetRef = linksRef;
        break;
      default:
        return;
    }

    scrollTo(targetRef);
  };

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("ABOUT");
      const projectsSection = document.getElementById("PROJECTS");
      const techSection = document.getElementById("TECH");
      const interestsSection = document.getElementById("INTERESTS");
      const linksSection = document.getElementById("LINKS");

      const sections: Record<SectionKeys, number | undefined> = {
        [SectionKeys.ABOUT]: aboutSection?.offsetTop,
        [SectionKeys.PROJECTS]: projectsSection?.offsetTop,
        [SectionKeys.TECH]: techSection?.offsetTop,
        [SectionKeys.INTERESTS]: interestsSection?.offsetTop,
        [SectionKeys.LINKS]: linksSection?.offsetTop,
      };

      const scrollPosition = window.scrollY + window.innerHeight / 1.11;

      let currentSection: SectionKeys = SectionKeys.ABOUT;
      for (const section in sections) {
        if (sections[section as SectionKeys] !== undefined && sections[section as SectionKeys]! <= scrollPosition) {
          currentSection = section as SectionKeys;
        }
      }

      setCurrent(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed z-50 flex justify-center w-full gap-3 p-2 border-b border-b-zinc-700 bg-[#121212]">
      <NavItem onClick={() => scrollToHandler(SectionKeys.ABOUT)} content="about" isCurrent={current === SectionKeys.ABOUT} />
      <NavItem
        onClick={() => scrollToHandler(SectionKeys.PROJECTS)}
        content="experience"
        isCurrent={current === SectionKeys.PROJECTS}
      />
      <NavItem onClick={() => scrollToHandler(SectionKeys.TECH)} content="tech" isCurrent={current === SectionKeys.TECH} />
      <NavItem
        onClick={() => scrollToHandler(SectionKeys.INTERESTS)}
        content="interests"
        isCurrent={current === SectionKeys.INTERESTS}
      />
      <NavItem onClick={() => scrollToHandler(SectionKeys.LINKS)} content="get in touch" isCurrent={current === SectionKeys.LINKS} />
    </div>
  );
};

export default Menu;

interface NavItemProps {
  content: string;
  onClick: () => void;
  isCurrent?: boolean;
}

const NavItem = ({ onClick, content, isCurrent }: NavItemProps) => {
  return (
    <div
      onClick={onClick}
      className={`flex flex-col max-sm:text-sm text-md transition-colors duration-300 items-end cursor-pointer hover:text-white
    ${isCurrent ? "" : "text-zinc-400"}`}
    >
      <div className="flex flex-col items-center gap-1">{content}</div>
      <div
        className={`w-6 max-sm:w-4 max-sm:mt-1 h-[1px] transition-colors duration-300 ${isCurrent ? "bg-zinc-300" : "bg-transparent"}`}
      />
    </div>
  );
};
