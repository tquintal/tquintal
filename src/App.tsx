import "react-lazy-load-image-component/src/effects/blur.css";

import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";
import { Route, Routes, useLocation } from "react-router";

import Footer from "./components/footer";
import Menu from "./components/menu";
import { RefsProvider } from "./context/refs";
import ErrorPage from "./views/404";
import Home from "./views/home";
import Interests from "./views/interests";
import Project from "./views/project/[project-id]";
import Projects from "./views/projects";
import Technologies from "./views/technologies";

const App = () => {
  return (
    <Routes>
      <Route path="*" element={<ErrorPage />} />
      <Route
        path="/"
        element={
          <RefsProvider>
            <Animate>
              <Menu />
              <Home />
              <Projects />
              <Technologies />
              <Interests />
              <Footer />
            </Animate>
          </RefsProvider>
        }
      />
      <Route
        path="/project/:id"
        element={
          <RefsProvider>
            <Animate children={<Project />} />
          </RefsProvider>
        }
      />
    </Routes>
  );
};

export default App;

const Animate = ({ children }: { children: ReactNode }) => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <motion.div key={location.pathname} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
