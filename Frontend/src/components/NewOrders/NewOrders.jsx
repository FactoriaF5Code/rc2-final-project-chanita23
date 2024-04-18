
import './NewOrders.css';
import { useFetch } from "./useFetch";

export const NewOrders = () => {
  const { data } = useFetch("http://localhost:8080/api/product");

  console.log(data);
  const items = [];
  if (data) {
    data.forEach(product => {
      items.push(<div key={product.id} className="card-item">
        <img src={product.img} alt={product.name}></img>
      </div>)
    })
  }

  return (
    <div className="new-orders">
      <h3>Anchetas o Cestas de frutas</h3>
      <div className="orders">
        {items}
      </div>
    </div>
  );
};


