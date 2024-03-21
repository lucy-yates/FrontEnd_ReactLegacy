import { useEffect, useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

function DisplayCart() {
  const [carts, setCarts] = useState([]);
  let cartTotal = 0;

  function getCarts() {
    axios
      .get("http://localhost:8082/cart/get")
      .then((response) => {
        setCarts(response.data);
      })
      .catch(console.log);
  }

  const handleEditCart = (cartId, newCustomerName) => {
    axios
      .patch("http://localhost:8082/cart/update/" + cartId, { customer: newCustomerName })
      .then(() => {

        
      })
      .catch(console.log);
  };

  function RemoveFromCart(id) {
    axios
      .patch("http://localhost:8082/item/updateCartItem/" + id)
      .then((response) => {
        getCarts();
      })

      .catch((err) => console.error(err));
  }

  function deleteCart(cartId) {
    axios
      .delete(`http://localhost:8082/cart/remove/${cartId}`)
      .then(() => {
        getCarts();
      })
      .catch((err) => console.error(err));

  }

  function deleteButton(cartId,cartItems) {

    if (cartItems.length !== 0) {
      return (
        <button type="button" className="btn btn-danger" disabled> Delete cart </button>
      )
    }
    else {
      return (
        <button class="btn btn-danger" onClick={() => { deleteCart(cartId) }} > Delete cart</button>
      )
    }


  }


  const calculateTotal = (cart) => {
    let total = 0;
    cart.item.forEach((item) => {
      total += item.price * 1.0725;
    });
    return total;
  };

  useEffect(() => {
    getCarts();
  }, []);

  return (
    <div className="container mt-4" style={{ marginTop: "10px" }}>
      <div className="row">
        {carts.map((singleCart) => (
          <div key={singleCart.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{singleCart.id}: {singleCart.customer}</h5>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <b>Items</b>
                  </li>
                  {singleCart.item.map((item) => (
                    <li key={item.id} className="list-group-item">
                      {item.id} - {item.name} - £{parseFloat(item.price).toFixed(2)}

                      <button type="button" class="btn btn-danger" style={{ marginLeft: "20px" }} onClick={() =>
                        RemoveFromCart(item.id)
                      }>Remove</button>
                    </li>

                  ))}

                  <li className="list-group-item">
                    <button
                      type="button"
                      className="btn btn-warning"
                      onClick={() => {
                        const newCustomerName = prompt("Enter new customer name:");
                        if (newCustomerName !== null) {
                          handleEditCart(singleCart.id, newCustomerName);
                        }
                      }}
                    >
                      Edit Customer
                    </button>
                  </li>
                  <li className="list-group-item">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => {
                        cartTotal = calculateTotal(singleCart);
                        alert(`Total for ${singleCart.customer}'s cart: £${cartTotal.toFixed(2)}`);
                      }}
                    >
                      Calculate Total (inc. service charge)
                    </button>
                  </li>
                  <li className="list-group-item" >
                      {deleteButton(singleCart.id, singleCart.item)}
                  </li>

                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DisplayCart;
