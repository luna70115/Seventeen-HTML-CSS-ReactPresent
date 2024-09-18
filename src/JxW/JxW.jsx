import JeongHan from "../assets/Team/JxW-JeongHan.jpg";
import Wonwoo from "../assets/Team/JxW-Wonwoo.jpg.jpg";
import JxW from "../assets/Team/JxW.jpg";

export function JW() {
  return (
    <>
      <>
        <div className="marquee squodBss__marquee">
          <p className="marquee__content">
            행복은 성적순이 아니라 부석순! 안녕하세요 부석순입니다.{" "}
          </p>
        </div>
        {/*  JxW分界線 */}
        <section className="squad squodJxW">
          <div className="squad__titleBar">
            <div className=" squad__block">
              <div className=" squad__titleBar">
                <h2 className="squad__title squodJxW__title  ">JxW</h2>
              </div>
              <div className="squad__imgList ">
                <img className="squad__person " src={JeongHan} alt="" />
                <img className=" squad__person " src={JxW} alt="" />
                <img className="squad__person " src={Wonwoo} alt="" />
              </div>
            </div>
          </div>
          <p className="squad__text">
            JxW成員介紹：
            <br />
            <br />
            JxW是韓國男子組合SEVENTEEN的子團體，由PLEDIS娛樂
            所屬。該小分隊由兩位成員組成，分別是Jeong Han（尹淨漢）、Won
            Woo（全圓佑）。
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
            Monster〉及〈Leftover（휴지통）〉。[153]首日銷量為53萬7000張，首週銷量為78萬7046張，成為韓國史上首週專輯銷量最高的團體小分隊。
            <br />
          </p>
          <iframe
            className="video"
            src="https://www.youtube.com/embed/2HfWOZ1DUj4?si=VKAVyL-5zFg2MgmO"
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen=""
          />
        </section>
      </>
    </>
  );
}
