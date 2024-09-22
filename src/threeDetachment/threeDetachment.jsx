
import Musicplay from "../assets/icons-musicplay .png";
import {threeDetachmentData} from"./threeDetachmentData"
export function ThreeDetachment() {
  return (
    <section className="threeDetachment" id="threeDetachment">
      <div className="threeDetachment__temaBar ">
        <h3 className="threeDetachment__tema">Team</h3>
        <Music data={threeDetachmentData}></Music>
      </div>
      <Img data={threeDetachmentData}></Img>
    </section>
  );
}

function Music({ data }) {
  return (
    <ul>
      {data.map((item) => (
        <li key={item.title}>
          <a target="_blank" href={item.url} className="threeDetachment__title">
            <img
              className="threeDetachment__icon"
              src={Musicplay}
              alt={item.title}
            />
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
}
function Img({ data }) {
  return (
    <>
      {data.map((item) => (
        <div key={item.title} className="threeDetachment__list">
          <img
            className="threeDetachment__img"
            src={item.imgSrc}
            alt={item.title}
          />
        </div>
      ))}
    </>
  );
}
