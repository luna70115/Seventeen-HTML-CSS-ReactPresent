import { introduceData } from "./introduceData";
import { Link } from "react-router-dom";
import "./style.scss";
export function Introduce() {
  return (
    <section className="introduce" id="introduce">
      <Tmi carat={introduceData.carat} data={introduceData.members} />
    </section>
  );
}
function Tmi({ data, carat }) {
  return (
    <>
      {data.map((item) => {
        return (
          <div className="introduce__card" key={item.name}>
            <div className="introduce__idBar">
              <img className="introduce__icon" src={carat} alt="carat" />
              <p> Seventeen</p>
            </div>

            <div className="introduce__imgBar">
              <img className="introduce__img" src={item.img} alt={item.name} />
            </div>

            <div className="introduce__tmiBar">
              <div className="introduce__issue">
                <p className="introduce__contentSpace">Name: </p>
                <p className="introduce__contentSpace">BIRTH: </p>
                <p className="introduce__contentSpace">TEAM:</p>
              </div>
              <div className="introduce__answer">
                <p className="introduce__contentSpace">{item.name}</p>
                <p className="introduce__contentSpace">{item.birth}</p>
                <p className="introduce__contentSpace">{item.team}</p>
              </div>
            </div>

            <div className="button">
              <Link
                className="button__button introduce__button"
                target="_blank"
                to={item.url}
              >
                know me
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
}
