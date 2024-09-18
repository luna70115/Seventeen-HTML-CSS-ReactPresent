import Hiphop from "../assets/Team/Hiphop.jpg"
import Performance from "../assets/Team/Performance.jpg"
import Vocal from "../assets/Team/Vocal.jpg"
import Musicplay  from "../assets/icons-musicplay .png"

export function ThreeDetachment() {
  return (
    <section className="threeDetachment" id="threeDetachment">
    <div className="threeDetachment__temaBar ">
      <h3 className="threeDetachment__tema">Team</h3>
      <a
        target="_blank"
        href="https://www.youtube.com/watch?v=dvBOAeLr0dY&ab_channel=SEVENTEEN-Topic"
        className="threeDetachment__title"
      >
        <img
          className="threeDetachment__icon"
          src={Musicplay}
          alt=""
        />
        Hiphop
      </a>
      <a
        target="_blank"
        href="https://www.youtube.com/watch?v=P8KdeQrQ4vQ&ab_channel=SEVENTEEN-Topic"
        className="threeDetachment__title"
      >
        {" "}
        <img
          className="threeDetachment__icon"
          src={Musicplay}
          alt=""
        />
        Performance
      </a>
      <a
        target="_blank"
        href="https://www.youtube.com/watch?v=lPSGFS0HvOo&ab_channel=SEVENTEEN-Topic"
        className="threeDetachment__title"
      >
        {" "}
        <img
          className="threeDetachment__icon"
          src={Musicplay}
          alt=""
        />
        Vocal
      </a>
    </div>
    <div className="threeDetachment__list">
      <img
        className="threeDetachment__img"
        src={Hiphop}
        alt=""
      />
    </div>
    <div className="threeDetachment__list">
      <img
        className="threeDetachment__img"
        src={Performance}
        alt=""
      />
    </div>
    <div className="threeDetachment__list">
      <img
        className="threeDetachment__img"
        src={Vocal}
        alt=""
      />
    </div>
  </section>
  
  );
}
