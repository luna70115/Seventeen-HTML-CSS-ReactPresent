import BSS from "../../assets/Team/BSS-Team.jpg";
import JxW from "../../assets/Team/JxW.jpg";
import Hiphop from "../../assets/Team/Hiphop.jpg";
import Performance from "../../assets/Team/Performance.jpg";
import Vocal from "../../assets/Team/Vocal.jpg";
import "./style.scss";
export function Team() {
  return (
    <>
      <>
        <div className="marquee squodBss__marquee">
          <p className="marquee__content">
            BSS、JW、Hiphop、Performance、Vocal
          </p>
        </div>

        <section className="team ">
          {/*  bss */}
          <div className=" team__block">
            <h2 className="team__title squodBss__title  ">BSS</h2>
            <img className=" team__img " src={BSS} alt="" />
            <p className="team__text  squodBss__text">
              夫碩順（BSS）是韓國男子組合SEVENTEEN的子團體，該小分隊由三位成員組成，分別是Hoshi（權順榮）、DK（李碩珉）、以及
              勝寛（夫勝寛），而隊長則是 DK。
              <br />
              <br />
              組合名稱：由三位成員的本名組成：
              <br />
              Boo（勝寛，Boo SeungKwan）
              <br />
              Seok（DK，Lee SeokMin）
              <br />
              Soon（Hoshi，Kwon SoonYoung）
              <br />
              <br />
              出道：2018年3月21日，夫碩順以數位單曲《Just do it》出道。
              <br />
              出道前的經歷： 在練習生時期，勝寛、DK 和
              Hoshi,經常聚在一起搞笑、娛樂，三人也曾一同翻跳同公司前輩 **Orange
              Caramel**
              的《Catallena》，展現出他們充滿趣味的一面。粉絲們因為他們的搞笑互動，開始稱呼他們為「夫碩順」，這個名稱也因此流行起來，最終成為他們正式的團體名稱。
            </p>
          </div>
          {/*  jw */}
          <div className=" team__block">
            <h2 className="team__title squodJxW__title  ">JxW</h2>
            <img className=" team__img " src={JxW} alt="" />
            <p className="team__text">
              JxW是韓國男子組合SEVENTEEN的子團體。該小分隊由兩位成員組成，分別是Jeong
              Han（尹淨漢）、Won Woo（全圓佑）。
              <br /> <br />
              組合名稱：由兩位成員的本名組成：
              <br />
              J（Jeong Han，尹淨漢）
              <br />
              W（Won Woo，全圓佑）
              <br />
              <br />
              出道：2024年5月20日， JxW以數位單曲《THIS MAN》出道。主打歌〈Last
              night（어젯밤）（Guitar by
              박주원）MV公開，淨漢、圓佑分別發行個人單曲音源〈Beautiful
              Monster〉及〈Leftover（휴지통）〉。首日銷量為53萬7000張，首週銷量為78萬7046張，成為韓國史上首週專輯銷量最高的團體小分隊。
              <br />
            </p>
          </div>
          {/*  Hiphop */}
          <div className=" team__block">
            <h2 className="team__title squodBss__title  ">Hiphop</h2>
            <img className=" team__img " src={Hiphop} alt="" />
            <p className="team__text  squodBss__text">
              Hip-hop Team成員: S.Coups(隊長)、圓佑、珉奎、Vernon
              四人組成。代表歌曲❰기대❱、❰Check-In❱、❰TRAUMA❱、❰LOTTO
              REMIX❱、❰Monday To Saturday❱、❰GAM3 BO1❱、❰그리워하는
              것까지❱、❰Monster❱。
            </p>
          </div>
          {/*  Performance */}
          <div className=" team__block">
            <h2 className="team__title squodBss__title  ">Performance</h2>
            <img className=" team__img " src={Performance} alt="" />
            <p className="team__text  squodBss__text">
              Performance Team成員:Hoshi(隊長)、Jun、The8、Dino
              四人組成。代表歌曲❰HIGHLIGHT❱、❰MOONWALKER❱、❰Wave❱、❰OMG❱、❰Who❱、❰Pang❱、❰가사❱、❰I
              Don`t Understand But I Luv U❱、❰BACK 2 BACK❱。
            </p>
          </div>
          {/*  Vocal */}
          <div className=" team__block">
            <h2 className="team__title squodBss__title  ">Vocal</h2>
            <img className=" team__img " src={Vocal} alt="" />
            <p className="team__text  squodBss__text">
              Vocal Team成員:Woozi(隊長)、 淨漢、Joshua、DK、勝寬
              五人組成。代表歌曲❰Drift Away❱、❰Don`t listen in
              secret❱、❰아낀다❱、❰어른이 되면❱、❰Hug❱、❰Come To Me ❱、❰Adore
              U❱、❰Pinwheel❱、❰하품 ❱。
            </p>
          </div>
        </section>
      </>
    </>
  );
}
