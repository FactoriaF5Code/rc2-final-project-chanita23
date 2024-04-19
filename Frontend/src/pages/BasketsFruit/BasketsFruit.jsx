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
      <h3 className='basket-title'>ANCHETAS Y CANASTAS</h3>
      <NewOrders />
      <NewsLetter />
      <Footer />

    </div>



  )
}


