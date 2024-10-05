import { Link } from "react-router-dom";
import IG from "../../../../assets/icon-ig.png";
import Youtube from "../../../../assets/icon-youtube.png";
import W from "../../../../assets/icon-W.png";
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
          <img className="personHeader__icon" src={IG} alt="IG" />
        </a>
        <a target="_blank" href="https://weverse.io/seventeen/artistpedia">
          <img className="personHeader__icon" src={W} alt="Weverse" />
        </a>
        <a target="_blank" href="https://www.youtube.com/@pledis17">
          <img className="personHeader__icon" src={Youtube} alt="YouTube" />
        </a>
      </div>
    </header>
  );
}
