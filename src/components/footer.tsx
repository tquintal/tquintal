import { GrMail as EMail } from "react-icons/gr";
import { SiGithub as GitHub, SiLinkedin as LinkedIn, SiCodewars as CodeWars } from "react-icons/si";
import Tooltip from "./tooltip";
import { LinkTag } from "./link";
import { useRefs } from "../context/refs";

const Footer = () => {
  const { linksRef } = useRefs();
  const year = new Date().getFullYear();

  return (
    <div id="LINKS" ref={linksRef} className="flex flex-col items-center justify-center w-full h-24 gap-3 max-sm:mt-8">
      <div className="flex items-center gap-4">
        <Tooltip text="LinkedIn" width={10} bottom="30px">
          <a href="https://www.linkedin.com/in/tpquintal/" target="_blank" rel="noopener noreferrer">
            <LinkedIn size={24} />
          </a>
        </Tooltip>
        <Tooltip text="GitHub" width={10} bottom="30px">
          <LinkTag href="https://github.com/tquintal">
            <GitHub size={24} />
          </LinkTag>
        </Tooltip>
        <Tooltip text="CodeWars" width={10} bottom="30px">
          <LinkTag href="https://www.codewars.com/users/tquintal">
            <CodeWars size={24} />
          </LinkTag>
        </Tooltip>
        <Tooltip text="tomas.quintal@gmail.com" width={9} bottom="30px">
          <LinkTag href="mailto:tomas.quintal@gmail.com">
            <EMail size={24} />
          </LinkTag>
        </Tooltip>
      </div>
      <span className="text-xs cursor-default text-zinc-500">Tomás Quintal © {year}</span>
    </div>
  );
};

export default Footer;
