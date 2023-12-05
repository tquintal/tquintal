import { IconType } from "react-icons";
import { GrMysql as sql } from "react-icons/gr";
import {
  SiAdobe as adobeSuite,
  SiCsharp as csharp,
  SiCss3 as css,
  SiGit as git,
  SiHtml5 as html,
  SiJavascript as javasSript,
  SiNextdotjs as nextJS,
  SiPrisma as prisma,
  SiReact as react,
  SiTailwindcss as tailwind,
  SiTrpc as trpc,
  SiTypescript as typeScript,
} from "react-icons/si";

import Container from "../components/container";
import { useRefs } from "../context/refs";

interface SkillProps {
  icon: IconType;
  percentage: string;
  description: string;
}

const Skill = ({ icon: Icon, description, percentage }: SkillProps) => {
  return (
    <div className="flex items-end gap-2">
      <Icon size={25} className="text-zinc-300" />
      <div className="flex flex-col items-end gap-1">
        <p className="text-sm text-right text-zinc-300">{description}</p>
        <div className="w-20 h-2 bg-zinc-700">
          <div style={{ width: percentage + "%" }} className="h-2 bg-zinc-300" />
        </div>
      </div>
    </div>
  );
};

const Technologies = () => {
  const { techRef } = useRefs();

  return (
    <Container id="TECH" forwardRef={techRef} title="technologies">
      <div className="flex w-full gap-3 max-sm:flex-col-reverse">
        <div className="w-full p-1 border border-zinc-700">
          What truly excites me are these technologies, but I am not afraid to learn new things. I love writing clean and optimized
          code, always striving to follow the best practices and adopt the latest technologies.
        </div>
        <div className="flex flex-wrap justify-end gap-5 p-5 border max-sm:justify-between border-zinc-700">
          <Skill icon={typeScript} description="typeScript" percentage="80" />
          <Skill icon={react} description="reactJS" percentage="80" />
          <Skill icon={nextJS} description="nextJS" percentage="80" />
          <Skill icon={tailwind} description="tailwindCSS" percentage="80" />
          <Skill icon={trpc} description="tRPC" percentage="70" />
          <Skill icon={prisma} description="prisma" percentage="70" />
          <Skill icon={sql} description="sql" percentage="65" />
          <Skill icon={git} description="git" percentage="80" />
          <Skill icon={javasSript} description="javaScript" percentage="80" />
          <Skill icon={html} description="html5" percentage="80" />
          <Skill icon={css} description="css3" percentage="75" />
          <Skill icon={adobeSuite} description="adobe suite" percentage="55" />
          <Skill icon={csharp} description="c#" percentage="55" />
        </div>
      </div>
    </Container>
  );
};

export default Technologies;
