import React, { createContext, useContext, useRef, ReactNode } from "react";

type Refs = {
  aboutRef: React.RefObject<HTMLDivElement>;
  projectsRef: React.RefObject<HTMLDivElement>;
  techRef: React.RefObject<HTMLDivElement>;
  interestsRef: React.RefObject<HTMLDivElement>;
  linksRef: React.RefObject<HTMLDivElement>;
};

type RefsProviderProps = {
  children: ReactNode;
};

const RefsContent = createContext<Refs | undefined>(undefined);

export const RefsProvider: React.FC<RefsProviderProps> = ({ children }) => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);
  const interestsRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  const contextValue: Refs = {
    aboutRef,
    projectsRef,
    techRef,
    interestsRef,
    linksRef,
  };

  return <RefsContent.Provider value={contextValue}>{children}</RefsContent.Provider>;
};

export const useRefs = () => {
  const context = useContext(RefsContent);
  if (!context) throw new Error();
  return context;
};
