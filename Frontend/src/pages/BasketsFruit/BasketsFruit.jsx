import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { NewsLetter } from '../../components/NewsLetter/NewsLetter';
import { NewOrders } from '../../components/NewOrders/NewOrders'
import "./BasketsFruit.css"


export default function BasketsFruit() {

  return (

    <div>
      <Header />
      <div className="fruit-bowl">
        <img src="../../../src/assets/banner 2.jpg" alt="frutas" />
      </div>
      <NewOrders />
      <NewsLetter />
      <Footer />

    </div>



  )
}


