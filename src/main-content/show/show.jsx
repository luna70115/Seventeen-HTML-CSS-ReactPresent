import { showData2024 } from "./2024_showData";
import { showData2023 } from "./2023_showData";
import { showData2022 } from "./2022_showData";
import { showData2021 } from "./2021_showData";
import { showData2020 } from "./2020_showData";
import { showData2019 } from "./2019_showData";
import { showData2018 } from "./2018_showData";
import { showData2017 } from "./2017_showData";
import { showData2016 } from "./2016_showData";
import { showData2015 } from "./2015_showData";
import "./style.scss";
export function Show() {
  return (
    <section className="show" id="show">
      <h3 className="show__title">Show</h3>
      <nav className="show__block">
        <ShowList data={showData2024} />
        <ShowList data={showData2023} />
        <ShowList data={showData2022} />
        <ShowList data={showData2021} />
        <ShowList data={showData2020} />
        <ShowList data={showData2019} />
        <ShowList data={showData2018} />
        <ShowList data={showData2017} />
        <ShowList data={showData2016} />
        <ShowList data={showData2015} />
      </nav>
    </section>
  );
}
function ShowList({ data }) {
  return (
    <>
      {data.map((item) => (
        <div key={item.year} className="show__list">
          <h3 className="show__list--title">{item.year}</h3>
          {item.shows.map((show) => (
            <a
              key={show.id} // 確保每個 show 都有唯一的 id
              className="show__button show__link"
              target="_blank"
              href={show.url}
              rel="noopener noreferrer"
            >
              {show.text}
            </a>
          ))}
        </div>
      ))}
    </>
  );
}
