import AboutMe from "./myComponents/AboutMe";
import Education from "./myComponents/Education";
import Header from "./myComponents/Header";
import Skills from "./myComponents/Skills";

const SectionOne = () => {
  return (
    <div>
      <Header />
      <AboutMe />
      <Education />
      <Skills />
    </div>
  );
};

export default SectionOne;
