import coups from "../assets/coups.jpg"
import JeongHan from "../assets/JeongHan.jpg"
import Joshu from "../assets/Joshu.jpg"
import Jun from "../assets/Jun.jpg"
import Hoshi from "../assets/Hoshi.jpg"
import Wonwoo from "../assets/Wonwoo.jpg"
import Woozi from "../assets/Woozi.jpg"
import DK from "../assets/DK.jpg"
import Mingyu from "../assets/Mingyu.jpg"
import The8 from "../assets/The8.jpg"
import Boo from "../assets/Boo.jpg"
import Vernon from "../assets/Vernon.jpg"
import Dino from "../assets/Dino.jpg"


export function FrontPage() {
  return (
    <section className="frontPage">
      <p className="frontPage__title"> Seventeen Right Here</p>
      <section className="frontPage__circleBar">
        <div className="frontPage__circle">
          <a target="_blank" href="https://www.instagram.com/sound_of_coups/">
            <img
              className="frontPage__img"
              src={coups}
              alt="崔勝哲"
            />
          </a>
        </div>
        <div className="frontPage__circle">
          <a target="_blank" href="https://www.instagram.com/jeonghaniyoo_n/">
            <img
              className="frontPage__img"
              src={JeongHan}
              alt="尹淨漢"
            />
          </a>
        </div>
        <div className="frontPage__circle">
          <a target="_blank" href="https://www.instagram.com/joshu_acoustic/">
            <img
              className="frontPage__img"
              src={Joshu}
              alt="洪知秀"
            />
          </a>
        </div>
        <div className="frontPage__circle">
          <a target="_blank" href="https://www.instagram.com/junhui_moon/">
            <img className="frontPage__img" src={Jun} alt="文俊輝" />
          </a>
        </div>
        <div className="frontPage__circle">
          <a target="_blank" href="https://www.instagram.com/ho5hi_kwon/">
            <img
              className="frontPage__img"
              src={Hoshi}
              alt="權順榮"
            />
          </a>
        </div>
        <div className="frontPage__circle">
          <a href="https://www.instagram.com/everyone_woo/">
            <img
              className="frontPage__img"
              src={Wonwoo}
              alt="全圓佑"
            />
          </a>
        </div>
        <div className="frontPage__circle">
          <a
            target="_blank"
            href="https://www.instagram.com/woozi_universefactory/"
          >
            <img
              className="frontPage__img"
              src={Woozi}
              alt="李知勳"
            />
          </a>
        </div>
        <div className="frontPage__circle">
          <a target="_blank" href="https://www.instagram.com/dk_is_dokyeom/">
            <img
              className="frontPage__img"
              src={DK}
              alt="李碩珉"
            />
          </a>
        </div>
        <div className="frontPage__circle">
          <a target="_blank" href="https://www.instagram.com/min9yu_k/">
            <img
              className="frontPage__img"
              src={Mingyu}
              alt="金珉奎"
            />
          </a>
        </div>
        <div className="frontPage__circle">
          <a target="_blank" href="https://www.instagram.com/xuminghao_o/">
            <img
              className="frontPage__img"
              src={The8}
              alt="徐明浩"
            />
          </a>
        </div>
        <div className="frontPage__circle">
          <a target="_blank" href="https://www.instagram.com/pledis_boos/">
            <img className="frontPage__img" src={Boo} alt="夫勝寛" />
          </a>
        </div>
        <div className="frontPage__circle">
          <a target="_blank" href="https://www.instagram.com/vernonline/">
            <img
              className="frontPage__img"
              src={Vernon}
              alt="崔瀚率"
            />
          </a>
        </div>
        <div className="frontPage__circle">
          <a target="_blank" href="https://www.instagram.com/feat.dino/">
            <img className="frontPage__img" src={Dino} alt="李燦" />
          </a>
        </div>
      </section>
      <p className="frontPage__title">Going Seventeen !</p>
      <div className="marquee frontPage__marquee">
        <p className="marquee__content">
          Say the name Seventeen！안녕하세요~ 세븐틴입니다!{" "}
        </p>
      </div>
    </section>
  );
}
