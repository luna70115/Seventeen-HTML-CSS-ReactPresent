import { singleData } from "./singleData";
import "./style.scss";
export function Single() {
  return (
    <>
      <section className="single">
        <div className="single__list">
          <div className="single__titleBar">
            <h2 className="single__title">seventeen</h2>
            <h2 className="single__title">single music</h2>
          </div>
          <SongName data={singleData} />
        </div>
        <div className="single__person">
          <SongImg data={singleData} />
        </div>
      </section>
    </>
  );
}

function SongName({ data }) {
  return (
    <>
      {data.map((item) => (
        <p className="single__text" id={item.text} key={item.text}>
          {item.text}
        </p>
      ))}
    </>
  );
}

function SongImg({ data }) {
  return (
    <>
      {data.map((item) => (
        <a target="_blank" href={item.url} id={item.text} key={item.text}>
          <img className="single__img" src={item.img} alt={item.text} />
        </a>
      ))}
    </>
  );
}
