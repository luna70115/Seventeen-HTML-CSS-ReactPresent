import "./assets/style/global.scss";
import "./assets/style/_reset.scss";
import "./assets/style/style.scss";
import { Header } from "./main-content/header/header";
import { FrontPage } from "./main-content/frontpage/frontPage";
import { Introduce } from "./main-content/introduce/introduce";
import { Team } from "./main-content/team/team";
import { Single } from "./main-content/single/single";
import { Show } from "./main-content/show/show";
import { Fans } from "./main-content/fans/fans";
import { Footer } from "./main-content/footer/footer";

function App() {
  return (
    <>
      <Header></Header>
      <FrontPage></FrontPage>
      <Introduce></Introduce>
      <Team></Team>
      <Single></Single>
      <Show></Show>
      <Fans></Fans>
      <Footer></Footer>
    </>
  );
}

export default App;
