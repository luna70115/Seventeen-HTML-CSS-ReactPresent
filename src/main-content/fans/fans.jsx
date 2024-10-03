import MarqueeEffect from "react-fast-marquee";

import { fansData } from "./fansData";
import "./style.scss";
export function Fans() {
  return (
    <MarqueeEffect
      className="mt-16 fans__block"
      pauseOnHover
      speed={90}
      direction="right"
    >
      {fansData.map((item) => (
        <div className="fans" key={item.id}>
          <p className="fans__text">
            {item.text} <span className="fans__person">{item.person}</span>
          </p>
        </div>
      ))}
    </MarqueeEffect>
  );
}
