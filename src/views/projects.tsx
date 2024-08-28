import "react-lazy-load-image-component/src/effects/opacity.css";

import { LuMousePointerClick } from "react-icons/lu";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

import Container from "../components/container";
import { useRefs } from "../context/refs";
import { projects } from "../data/projects";

const Projects = () => {
  const { projectsRef } = useRefs();

  return (
    <Container id="PROJECTS" forwardRef={projectsRef} title="projects & experience" defaultView description="what I've been doing">
      <div className="flex gap-2 max-lg:flex-col">
        {projects.map((project) => (
          <Card key={project.id} id={project.id} logo={project.logo} name={project.name} />
        ))}
      </div>
    </Container>
  );
};

export default Projects;

const Card = ({ id, logo, name }: { id?: string; logo?: string; name: string }) => {
  return (
    <div className="relative w-1/2 transition bg-zinc-900 hover:bg-zinc-800 max-md:w-full h-72">
      <Link to={`/project/${id}`}>
        {logo && (
          <div className="flex items-center justify-center h-full">
            <LazyLoadImage src={logo} className="w-[35%] h-[35%]" />
          </div>
        )}
        {!logo && (
          <div className="flex items-center justify-center h-full p-10">
            <span className="text-2xl font-semibold text-center">{name}</span>
          </div>
        )}
        <div className="absolute flex items-center gap-1 text-xs transition cursor-pointer bottom-1 right-1 text-zinc-500">
          <LuMousePointerClick />
          <span>click to learn more</span>
        </div>
      </Link>
    </div>
  );
};
