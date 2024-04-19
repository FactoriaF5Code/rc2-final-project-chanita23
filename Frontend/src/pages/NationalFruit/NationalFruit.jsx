import { Header } from "../../components/Header/Header"
import { Footer } from "../../components/Footer/Footer"
import "./NationalFruit.css"

export default function NationalFruit() {

  const imageFolder = "../../assets/";
  let imagesUrl = [`${imageFolder}cocos.jpg`, `${imageFolder}granada.jpg`, `${imageFolder}piñas.jpg`, `${imageFolder}sandia.jpg`, `${imageFolder}kiwi-verde.jpg`, `${imageFolder}uvaroja.jpg`]
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
      <div className="national">
        <h3 className='basket-title'>FRUTAS NACIONALES</h3>
        <div className="national-item">
          {items}
        </div>
      </div>
      <Footer />
    </div>
  )
}

