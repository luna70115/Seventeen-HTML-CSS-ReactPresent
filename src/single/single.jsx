import coups from "../assets/sketchbook/coups.jpg";
import JeongHan from "../assets/sketchbook/JeongHan.jpg";
import Joshu from "../assets/sketchbook/Joshu.png";
import Jun from "../assets/sketchbook/Jun.jpg";
import Hoshi from "../assets/sketchbook/Hoshi.jpg";
import Wonwoo from "../assets/sketchbook/Wonwoo.jpg";
import Woozi from "../assets/sketchbook/Woozi.jpg";
import DK from "../assets/sketchbook/DK.jpg";
import Mingyu from "../assets/sketchbook/Mingyu.jpg";
import The8 from "../assets/sketchbook/The8.jpg";
import Boo from "../assets/sketchbook/Boo.jpg";
import Vernon from "../assets/sketchbook/Vernon.jpg";
import Dino from "../assets/sketchbook/Dino.jpg";

export function Single() {
  return (
    <>
      <section className="single">
        <div className="single__list">
          <div className="single__titleBar">
            <h2 className="single__title">seventeen</h2>
            <h2 className="single__title">single music</h2>
          </div>
          <p className="single__text">S.COUPS(Me)</p>
          <p className="single__text">Jeonghan(Dream)</p>
          <p className="single__text">Joshua(SHINGIRU)</p>
          <p className="single__text">Jun(LIMBO )</p>
          <p className="single__text">Hoshi(Spider)</p>
          <p className="single__text">WonWoo( last night )</p>
          <p className="single__text">Woozi(Ruby)</p>
          <p className="single__text">DK(The Reasons of My Smiles)</p>
          <p className="single__text"> MinGyu(Bittersweet )</p>
          <p className="single__text"> THE8(Side By Side)</p>
          <p className="single__text"> SeungKwan(Still You)</p>
          <p className="single__text"> Vernon(Black Eye)</p>
          <p className="single__text"> Dino(Wait)</p>
        </div>
        <div className="single__person">
          <a
            target="_blank"
            href="https://www.youtube.com/watch?v=D4l6sLLNs-c&ab_channel=SEVENTEEN"
          >
            <img className="single__img" src={coups} alt="S.COUPS" />
          </a>
          <a
            target="_blank"
            href="https://www.youtube.com/watch?v=BIfjbX6hJBc&ab_channel=SEVENTEEN"
          >
            <img className="single__img" src={JeongHan} alt="Jeong Han" />
          </a>
          <a
            target="_blank"
            href="https://www.youtube.com/watch?v=7b-xfhmhl0g&list=RDEMVpAR8BhnaNDEaUf-H6Vjjg&start_radio=1&ab_channel=Release-Topic"
          >
            <img className="single__img" src={Joshu} alt="Joshua" />
          </a>
          <a
            target="_blank"
            href="https://www.youtube.com/watch?v=k0sKWlEhVRk&ab_channel=HYBELABELS"
          >
            <img className="single__img" src={Jun} alt="Jun" />
          </a>
          <a
            target="_blank"
            href="https://www.youtube.com/watch?v=eOOsAeOx5a0&list=RDEMx-tGc31YPPyteayfVAijcQ&start_radio=1&ab_channel=HYBELABELS"
          >
            <img className="single__img" src={Hoshi} alt="Hoshi" />
          </a>
          <a
            target="_blank"
            href="https://www.youtube.com/watch?v=EJF2PV3BQtQ&ab_channel=HYBELABELS"
          >
            <img className="single__img" src={Wonwoo} alt="Wonwoo" />
          </a>
          <a
            target="_blank"
            href="https://www.youtube.com/results?search_query=woozi+ruby"
          >
            <img className="single__img" src={Woozi} alt="Woozi" />
          </a>
          <a
            target="_blank"
            href="https://www.youtube.com/watch?v=ucpb4BYNJ6s&ab_channel=SUPERSOUNDBugs%21"
          >
            <img className="single__img" src={DK} alt="DK" />
          </a>
          <a
            target="_blank"
            href="https://www.youtube.com/watch?v=gvdACvfuGFA&ab_channel=HYBELABELS"
          >
            <img className="single__img" src={Mingyu} alt="Mingyu" />
          </a>
          <a
            target="_blank"
            href="https://www.youtube.com/watch?v=e5bqgvfz84E&list=RDEMyFmVFNrToN8n9zIXvLi1mQ&start_radio=1&ab_channel=HYBELABELS"
          >
            <img className="single__img" src={The8} alt="The8" />
          </a>
          <a
            target="_blank"
            href="https://www.youtube.com/watch?v=vJ_lSpA8p4U&ab_channel=1theK%28%EC%9B%90%EB%8D%94%EC%BC%80%EC%9D%B4%29"
          >
            <img className="single__img" src={Boo} alt="Boo" />
          </a>
          <a
            target="_blank"
            href="https://www.youtube.com/watch?v=AJIzboxLYKk&ab_channel=SEVENTEEN"
          >
            <img className="single__img" src={Vernon} alt="Vernon" />
          </a>
          <a
            target="_blank"
            href="https://www.youtube.com/watch?v=J--BukW5BfQ&ab_channel=HYBELABELS"
          >
            <img className="single__img" src={Dino} alt="Dino" />
          </a>
        </div>
      </section>
    </>
  );
}
