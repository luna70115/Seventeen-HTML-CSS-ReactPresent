import { frontPageData } from "./frontPageData";
import "./style.scss";
export function FrontPage() {
  return (
    <section className="frontPage">
      <p className="frontPage__title"> Seventeen Right Here</p>
      <section className="frontPage__circleBar">
        <Circle data={frontPageData} />
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

function Circle({ data }) {
  return (
    <>
      {data.map((item) => {
        return (
          <div className="frontPage__circle" key={item.name}>
            <a target="_blank" href={item.instagram}>
              <img className="frontPage__img" src={item.img} alt={item.name} />
            </a>
          </div>
        );
      })}
    </>
  );
}
