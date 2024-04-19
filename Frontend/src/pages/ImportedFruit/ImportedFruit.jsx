import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import "./ImportedFruit.css"

export default function ImportedFruit() {
  const imageFolder = "../../assets/";
  let imagesUrl = [`${imageFolder}granadilla.jpg`, `${imageFolder}chirimoya.png`, `${imageFolder}FEIJOA.jpg`, `${imageFolder}guanabana.jpg`, `${imageFolder}moras.jpg`, `${imageFolder}manzanaroyal.jpg`]
  const items = [];
  if (imagesUrl) {
    imagesUrl.forEach((product, index) => {
      items.push(<div key={index} className="card-item" style={{ backgroundImage: "url(" + product + ")" }}>
      </div>)
    })
  }

  return (
    <div>
      <Header />
      <div className="fruit-imported">
        <h3 className='basket-title'>FRUTAS IMPORTADAS</h3>
        <div className="imported">
          {items}
        </div>
      </div>
      <Footer />
    </div>





  )



}





