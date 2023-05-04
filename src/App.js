import "./style/landing.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Navigationbar from "./components/Layouts/navigation.layouts";
import { BrowserRouter as Router } from "react-router-dom";
import { useEffect, useState } from "react";
import ScrollToTop from "react-scroll-to-top";
import { ThreeDots } from "react-loader-spinner";
import AnimatedRoute from "./components/Utilities/AnimatedRoute";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 600);
    AOS.init({
      easing: "ease-in-out-back",
      duration: "1000",
    });

    return () => {
      clearTimeout(timeout);
      AOS.refresh();
    };
  }, []);

  return (
    <>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
          className='content'
        >
          <ThreeDots
            height="120"
            width="120"
            radius="9"
            color="#0dad8e"
            ariaLabel="three-dots-loading"
            visible={true}
          />
        </div>
      ) : (
        <Router>
          <Navigationbar />
          <AnimatedRoute />
          <ScrollToTop
            data-aos="fade-up"
            viewBox="0 96 960 960"
            svgPath="m283 711-43-43 240-240 240 239-43 43-197-197-197 198Z"
            style={{ padding: "5px" }}
            smooth
          />
        </Router>
      )}
    </>
  );
}

export default App;
