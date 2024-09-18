import ig from "../assets/icon-ig.png";
import youtube from "../assets/icon-youtube.png";
import w from "../assets/icon-w.png";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__iconBar">
        <a target="_blank" href="https://www.instagram.com/saythename_17/">
          <img className="footer__icon" src={ig} alt="IG" />
        </a>
        <a target="_blank" href="https://weverse.io/seventeen/artistpedia">
          <img className="footer__icon" src={w} alt="Weverse" />
        </a>
        <a target="_blank" href="https://www.youtube.com/@pledis17">
          <img className="footer__icon" src={youtube} alt="YouTube" />
        </a>
      </div>
      <div className="footer__textBar">
        <p className="footer__text">Author:ins@hx.o.15</p>
        <p className="footer__text">Image source: saythename_17 </p>
        <p className="footer__text">Introduce:Wikipedia</p>
        <p className="footer__text">Audio :Youtube</p>
        <p className="footer__text">show : ins@yucc.uy</p>
      </div>
    </footer>
  );
}
