import { fansData } from "./fansData";
import "./style.scss";
export function Fans() {
  return (
    <section className="fans" id="fans">
      <Word data={fansData} />
    </section>
  );
}

function Word({ data }) {
  return (
    <>
      {data.map((item) => {
        return (
          <div className="fans__blcok" key={item.id}>
            <p className="fans__text">{item.text}</p>
            <p className="fans__person">{item.person}</p>
          </div>
        );
      })}
    </>
  );
}
