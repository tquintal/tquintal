import { BsCodeSlash as code, BsMusicNoteBeamed as music } from "react-icons/bs";
import { CgGym as gym } from "react-icons/cg";
import { FaMountain as nature } from "react-icons/fa";
import { GiGuitarHead as guitar, GiMountainRoad as roadTrips, GiRaceCar as cars } from "react-icons/gi";
import { PiMicrophoneStageBold as concerts, PiPottedPlant as plants } from "react-icons/pi";
import { FiBookOpen as books } from "react-icons/fi";

import Container from "../components/container";
import { IconType } from "react-icons";
import { ReactNode } from "react";
import { useRefs } from "../context/refs";

const Interests = () => {
  const { interestsRef } = useRefs();

  return (
    <Container id="INTERESTS" forwardRef={interestsRef} title="interests" description="what I'm passionate about" defaultView>
      <div className="flex flex-col gap-2">
        <Interest icon={code} title="code">
          what I like to do during the day. I love the feeling of seeing a solution grow
        </Interest>
        <Interest icon={cars} title="cars">
          special cars and everything that they involve and provide
        </Interest>
        <Interest icon={roadTrips} title="roadTrips">
          my country is full of amazing roads for special cars to enjoy
        </Interest>
        <Interest icon={nature} title="nature">
          find me outside, at the beach or in the mountains – it doesn't matter
        </Interest>
        <Interest icon={guitar} title="guitar">
          I play the guitar, and Jimi Hendrix is my inspiration
        </Interest>
        <Interest icon={music} title="music">
          I love listening to music from all genres, but especially rock
        </Interest>
        <Interest icon={concerts} title="concerts">
          who doesn't love a good concert or music festival?
        </Interest>
        <Interest icon={plants} title="plants">
          plants fascinate me just like watching a web solution grow - witnessing their natural development is a source of constant
          wonder and joy
        </Interest>
        <Interest icon={books} title="books">
          I'm starting to enjoy and explore the amazing world of books
        </Interest>
        <Interest icon={gym} title="gym">
          this is where I take care of my body
        </Interest>
      </div>
    </Container>
  );
};

export default Interests;

interface Props {
  children: ReactNode;
  icon: IconType;
  title: string;
}

const Interest = ({ children, icon: Icon, title }: Props) => {
  return (
    <div className="flex items-center gap-2">
      <div className="p-1 border 1px solid border-zinc-600">
        <Icon size={28} />
      </div>
      <div>
        <span className="text-zinc-300">{title}: </span>
        <span>{children}</span>
      </div>
    </div>
  );
};
