import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

import { fas } from "@fortawesome/free-solid-svg-icons";
import "../styles/Video.css";

function Video() {
  library.add(fas);
  return (
    <section className="video">
      <h3 className="video__title">Grow Your Child's Future</h3>
      <p className="video__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique.
      </p>
      <div className="video__controls">
        <button className="video__button">
          <FontAwesomeIcon icon="fa-solid fa-book" /> Learn More
        </button>
        <button className="video__button">
          <FontAwesomeIcon icon="fa-solid fa-circle-play" /> Watch Video
        </button>
      </div>
      <div className="video__container"></div>
    </section>
  );
}

export default Video;
