import Intro from "./intro.home";
import ShortIntro from "./shortintro.home";
import Project from "./project.home";
import Contact from "./contact.home";
import Footer from "../Layouts/footer.layouts";
import Differenttitle from "../Utilities/Differenttitle";

const Home = () => {
  Differenttitle("Mahadi Saputra: Beranda");

  return (
    <>
      <div className="header">
        <Intro />
      </div>
      <div className="content">
        <ShortIntro />
        <Project />
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default Home;
