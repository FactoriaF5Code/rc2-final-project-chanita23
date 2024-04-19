
import './NewOrders.css';
import { useFetch } from "./useFetch";

export const NewOrders = () => {
  const { data } = useFetch("http://localhost:8080/api/product");
  const items = [];
  if (data) {
    data.forEach(product => {
      items.push(<div key={product.id} className="card-item" style={{backgroundImage: "url(" + product.img + ")"}}>
      </div>)
    })
  }

  return (
    <div className="new-orders">
      <h3 className='basket-title'>Anchetas o Cestas de frutas</h3>
      <div className="orders">
        {items}
      </div>
    </div>
  );
};


