import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Socialmedia = () => {
  return (
    <>
      <div className="socialMedia me-3">
        <a
          href="https://www.facebook.com/DodePersie"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon className="socialMediaIcon p-2" icon={faFacebook} />
        </a>
      </div>
      <div className="socialMedia me-3">
        <a
          href="https://instagram.com/mahadisptr"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon className="socialMediaIcon p-2" icon={faInstagram} />
        </a>
      </div>
      <div className="socialMedia">
        <a
          href="https://github.com/DodePersie"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon className="socialMediaIcon p-2" icon={faGithub} />
        </a>
      </div>
    </>
  );
};

export default Socialmedia;
