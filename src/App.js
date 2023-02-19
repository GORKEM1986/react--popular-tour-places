import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import { data } from "./helper/data"
import Card from "./components/card/Card";


function App() {

  return (
    <div className="App">
     <Navbar/>
     <Header/>
     <div className="cardItem">
       {data.map((item)=> {
      const {id, desc, image, title}= item
      return <Card key={id} desc={desc} img={image} title={title} />
      })}
      
     </div>
    </div>
  )
}

export default App
