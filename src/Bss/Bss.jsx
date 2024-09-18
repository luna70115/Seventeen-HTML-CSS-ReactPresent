import Hoshi from "../assets/Team/Hoshi.jpg";
import DK from "../assets/Team/DK.jpg";
import Boo from "../assets/Team/Boo.jpg";

export function Bss() {
  return (
    <>
      <div className="marquee squodBss__marquee">
        <p className="marquee__content">
          행복은 성적순이 아니라 부석순! 안녕하세요 부석순입니다.{" "}
        </p>
      </div>
      <section className=" squad squodBss">
        <div className=" squad__block">
          <div className=" squad__titleBar">
            <h2 className=" squad__title squodBss__title">BSS</h2>
          </div>
          <div className=" squad__imgList  ">
            <img
              className=" squad__person  squodBss__person"
              src={Boo}
              alt=""
            />
            <img className="squad__person squodBss__person" src={DK} alt="" />
            <img
              className="squad__person squodBss__person"
              src={Hoshi}
              alt=""
            />
          </div>
        </div>
        <p className="squad__text  squodBss__text">
          夫碩順（BSS）成員介紹：
          <br />
          <br />
          夫碩順（韓語：부석순，英語：BSS）是韓國男子組合SEVENTEEN的子團體，由PLEDIS娛樂
          所屬。該小分隊由三位成員組成，分別是Hoshi（權順榮）、DK（李碩珉）、以及
          勝寛（夫勝寛），而隊長則是 DK。
          <br />
          組合名稱：由三位成員的本名組成：
          <br />
          <br />
          Boo（勝寛，Boo SeungKwan）
          <br />
          Seok（DK，Lee SeokMin）
          <br />
          Soon（Hoshi，Kwon SoonYoung）
          <br />
          出道：2018年3月21日，夫碩順以數位單曲《Just do it》出道。
          <br />
          問候語：
          <br />
          <br />
          「행복은 성적순이 아니라 부석순! 안녕하세요
          부석순입니다.」，意思為：「幸福不是成績順，是夫碩順！大家好，我們是夫碩順。」
          <br />
          <br />
          出道前的經歷： 在練習生時期，勝寛、DK 和
          Hoshi,經常聚在一起搞笑、娛樂，三人也曾一同翻跳同公司前輩 **Orange
          Caramel**
          的《Catallena》，展現出他們充滿趣味的一面。粉絲們因為他們的搞笑互動，開始稱呼他們為「夫碩順」，這個名稱也因此流行起來，最終成為他們正式的團體名稱。
        </p>
        <iframe
          className="video"
          src="https://www.youtube.com/embed/_HT5-1gRDjQ?si=wHuDTjtlAvDRgOMH"
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen=""
        />
      </section>
    </>
  );
}
