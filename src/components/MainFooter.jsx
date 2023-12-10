import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faYoutube,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const MainFooter = () => {
  return (
    <footer className="main--footer">
      <ul>
        <li>
          <FontAwesomeIcon icon={faFacebookSquare} />
        </li>
        <li>
          <FontAwesomeIcon icon={faInstagram} />
        </li>
        <li>
          <FontAwesomeIcon icon={faYoutube} />
        </li>
        <li>
          <FontAwesomeIcon icon={faXTwitter} />
        </li>
        <li>
          <FontAwesomeIcon icon={faEnvelope} />
        </li>
      </ul>
    </footer>
  );
};

export default MainFooter;
