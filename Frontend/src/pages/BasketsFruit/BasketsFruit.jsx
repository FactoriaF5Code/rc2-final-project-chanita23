import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { NewsLetter } from '../../components/NewsLetter/NewsLetter';
import { NewOrders } from '../../components/NewOrders/NewOrders'
import "./BasketsFruit.css"
import { Dropdown } from '../../components/Dropdown/Dropdown';


export default function BasketsFruit() {

  return (

    <div>
      <Header />
      <div className="fruit-bowl">
        <img src="../../../src/assets/banner 2.jpg" alt="frutas" />
      </div>
      <Dropdown />
      <NewOrders />
      <NewsLetter />
      <Footer />

    </div>



  )
}


