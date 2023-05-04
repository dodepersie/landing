import Aboutme from "./aboutme.about";
import Differenttitle from "../Utilities/Differenttitle";

const Aboutpage = () => {
  Differenttitle("Mahadi Saputra: Tentang saya");

  return (
    <div className="content">
      <Aboutme />
    </div>
  );
};

export default Aboutpage;
