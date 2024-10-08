import ig from "../../assets/icon-ig.png";
import youtube from "../../assets/icon-youtube.png";
import w from "../../assets/icon-W.png";
import carat from "../../assets/icon-carat.png";
import { Link } from "react-router-dom";
import "./style.scss";
export function Header() {
  return (
    <header className="header">
      <div className="header__title" href="./index.html">
        <img className="header__icon" src={carat} alt="Carat" />
        <Link to={"/"} className="header__seventeen">
          Seventeen
        </Link>
      </div>
      <nav className="header__listBar">
        <a className=" header__list header__seventeen" href="#introduce">
          introduce
        </a>
        <a className=" header__list header__seventeen" href="#team">
          team
        </a>
        <a className=" header__list header__seventeen" href="#show">
          Show
        </a>
        <a className=" header__list header__seventeen" href="#fans">
          To Carat
        </a>
      </nav>
      <div className="header__iconBar">
        <a target="_blank" href="https://www.instagram.com/saythename_17/">
          <img className="header__icon" src={ig} alt="IG" />
        </a>
        <a target="_blank" href="https://weverse.io/seventeen/artistpedia">
          <img className="header__icon" src={w} />
        </a>
        <a target="_blank" href="https://www.youtube.com/@pledis17">
          <img className="header__icon" src={youtube} alt="YouTube" />
        </a>
      </div>
    </header>
  );
}
