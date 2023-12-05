import { LazyLoadImage } from "react-lazy-load-image-component";

import avatar from "../assets/avatar.jpg";
import Container from "../components/container";
import { useRefs } from "../context/refs";

const Home = () => {
  const { aboutRef } = useRefs();

  return (
    <Container id="ABOUT" forwardRef={aboutRef} title="Tomás Quintal" description="web developer" defaultView>
      <div className="flex gap-4 max-sm:flex-col">
        <LazyLoadImage effect="blur" src={avatar} alt="ava" className="max-sm:max-h-40" />
        <span>
          From a young age, I was drawn to keyboards, always curious about experimenting with different video games and technologies.
          This curiosity eventually led me into the world of programming. I actively seek out new challenges in the field of web
          development, constantly expanding and enriching my knowledge, as well as that of those around me.
        </span>
      </div>
    </Container>
  );
};

export default Home;
