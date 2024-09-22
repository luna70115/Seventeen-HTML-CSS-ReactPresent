
import "./style/style.scss"
import {Header} from "./header/header"
import {FrontPage} from "./frontPage/frontPage"
import {Introduce} from"./introduce/introduce"
import{ThreeDetachment} from "./threeDetachment/threeDetachment"
import{Bss}from"./Bss/Bss"
import{JW}from"./JxW/JxW"
import{Single} from"./single/single"
import{Show} from"./show/show"
import{Fans} from"./fans/fans"
import{Footer} from"./footer/footer"

function App() {

  return (
    <>
   <Header></Header>
   <FrontPage></FrontPage>
   <Introduce></Introduce>
   <ThreeDetachment></ThreeDetachment>
   <Bss></Bss>
   <JW></JW>
   <Single></Single>
   <Show></Show>
   <Fans></Fans>
   <Footer></Footer>
</>
  )
}

export default App
