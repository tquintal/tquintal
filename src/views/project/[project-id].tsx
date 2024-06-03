import { Fragment, useEffect, useState } from "react";
import { MdArrowOutward as LinkIcon } from "react-icons/md";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useParams } from "react-router";

import Container from "../../components/container";
import { LinkTag } from "../../components/link";
import { projects } from "../../data/projects";
import Loading from "../loading";
import { FaPaw, FaRegLightbulb as Bulb, FaHeart } from "react-icons/fa";
import { GiWhaleTail } from "react-icons/gi";

const icons = [
  <FaPaw className="text-[#3F66EE]" />,
  <GiWhaleTail className="text-[#2A4464]" />,
  <Bulb className="text-[#FFB81C]" />,
  <FaHeart className="text-[#435E26]" />,
];

const Project = () => {
  const { id } = useParams();

  const project = projects.find((project) => project.id === id);

  useEffect(() => window.scrollTo(0, 0), []);

  if (!project) return <Loading />; // ! Implement later

  return (
    <Fragment>
      <Container title={project.name} description={project.smallDescription} getBack defaultView link={project.link}>
        {project.projects && (
          <div className="flex flex-col gap-6 mb-6">
            {project.projects.map((p, index) => (
              <div key={p.id} className="flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {icons[index]}
                    <div className="flex items-center gap-1">
                      <span className="text-lg font-bold">{p.name}</span>
                      {p.international && (
                        <div className="flex items-center gap-1">
                          <div className="w-1 h-1 rounded-full bg-zinc-600" />
                          <span className="text-xs text-zinc-300">International</span>
                        </div>
                      )}
                    </div>
                  </div>
                  {p.link && (
                    <LinkTag
                      className="flex items-center gap-1 text-sm font-semibold text-white transition-colors hover:text-zinc-300"
                      href={p.link}
                    >
                      Learn more
                      <LinkIcon size={18} />
                    </LinkTag>
                  )}
                </div>
                <div>
                  <span className="font-semibold">contribution/learning: </span>
                  <span className="text-zinc-200">{p.contribution}</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  <span className="font-semibold">tech:</span>
                  {p.tech.map((t, i) => (
                    <span key={t} className="text-zinc-200">
                      {t}
                      {i !== p.tech.length - 1 && ","}
                    </span>
                  ))}
                </div>
                <div>
                  <span className="font-semibold">about: </span>
                  <span className="text-zinc-200">{p.description}</span>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="flex gap-2">
          <div className="flex gap-4 max-sm:flex-wrap">
            <span className="whitespace-pre-line text-zinc-200">{project?.description}</span>
            {!project.hideImage && project.image && <Monitor imgSrc={project.image} link={project.link} />}
          </div>
        </div>
      </Container>
    </Fragment>
  );
};

export default Project;

const Monitor = ({ imgSrc, link }: { imgSrc: string; link?: string }) => {
  const [isOn, setIsOn] = useState(true);

  return (
    <div className="flex flex-col items-center">
      <div className="p-1 border border-b-0 rounded-md rounded-b-none max-sm:w-64 max-sm:h-32 w-96 h-52 border-zinc-700">
        <LinkTag href={link}>
          <div
            className={`overflow-y-scroll object-cover object-top w-full h-full transition-opacity duration-500 ${
              isOn ? "opacity-100" : "opacity-0"
            }`}
          >
            <LazyLoadImage effect="blur" src={imgSrc} alt="project" />
          </div>
        </LinkTag>
      </div>
      <div className="flex justify-end w-full gap-1 pb-1 pr-3 border border-t-0 rounded-md rounded-t-none border-zinc-700">
        <div className="w-1 h-1 bg-zinc-700" />
        <div className="w-1 h-1 bg-zinc-700" />
        <div className="w-1 h-1 bg-zinc-700" />
        <div className={`w-1 h-1 cursor-pointer ${isOn ? "bg-zinc-400" : "bg-zinc-700"}`} onClick={() => setIsOn(!isOn)} />
      </div>
      <div className="w-6 h-10 border border-t-0 border-b-0 border-zinc-700" />
      <div className="w-24 h-1 border rounded-md border-zinc-700" />
    </div>
  );
};
