import { Link } from "react-router-dom";
import "./style.scss";
export function PersonHeader() {
  return (
    <header className="personHeader">
      <div className="personHeader__title" href="../index.html">
        <img
          className="personHeader__icon"
          src="../src/assets/icon-carat.png"
          alt="Carat"
        />
        <Link to={"/"} className="personHeader__seventeen">
          Seventeen
        </Link>
      </div>

      <div className="personHeader__iconBar">
        <a target="_blank" href="https://www.instagram.com/saythename_17/">
          <img
            className="personHeader__icon"
            src="../src/assets/icon-ig.png"
            alt="IG"
          />
        </a>
        <a target="_blank" href="https://weverse.io/seventeen/artistpedia">
          <img
            className="personHeader__icon"
            src="../src/assets/icon-W.png"
            alt="Weverse"
          />
        </a>
        <a target="_blank" href="https://www.youtube.com/@pledis17">
          <img
            className="personHeader__icon"
            src="../src/assets/icon-youtube.png"
            alt="YouTube"
          />
        </a>
      </div>
    </header>
  );
}
