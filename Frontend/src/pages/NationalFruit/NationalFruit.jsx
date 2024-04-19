import { Header } from "../../components/Header/Header"
import { Footer } from "../../components/Footer/Footer"
import "./NationalFruit.css"

export default function  NationalFruit()  {
  return (
    <div>
    <Header />
    <div className="national">
        <h3>FRUTAS NACIONALES</h3>
        <div className="national-item">

            <div className="card-item"></div> 
            <div className="card-item"></div>
            <div className="card-item"></div>

            <div className="card-item"></div> 
            <div className="card-item"></div>
            <div className="card-item"></div>
            
        </div>
    </div>
    <Footer />
    </div>
  )
}

