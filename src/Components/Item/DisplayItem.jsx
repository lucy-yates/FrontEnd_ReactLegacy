import React, { useEffect, useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

function DisplayItem() {
  const [items, setItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    quantity: ""
  });

function getItem() {
  axios
      .get("http://localhost:8082/item/get")
      .then((response) => {
        setItems(response.data);
      })
      .catch(console.error);
};
   
  // getItem = function () {
  //   axios
  //     .get("http://localhost:8082/item/get")
  //     .then((response) => {
  //       setItems(response.data);
  //     })
  //     .catch(console.error);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .patch(`http://localhost:8082/cart/update/${editingItem.id}`, formData)
      .then(() => {
        getItem();
        setEditingItem(null);
        setFormData({
          name: "",
          price: "",
          quantity: "",
        });

      })
      .catch(console.error);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleEdit = (item) => {
    setEditingItem(item);
    setFormData({
      name: singleItem.name,
      price: singleItem.price,
      quantity: singleItem.quantity,
    })
  };

  const handleCancel = () => {
    setEditingItem(null);
    setFormData({
      name: "",
      price: "",
      quantity: "",

    });
  }

  function deleteItem(itemId) {
    axios
      .delete(`http://localhost:8082/item/remove/${itemId}`)
      .then(() => {
        getItem();
      })
      .catch(console.error);
  }

  useEffect(() => {
    getItem();
  }, []);

  return (
    <div className="container mt-4">
      <h1>Item List</h1>
      <div className="row">
        {items.map((singleItem) => (
          <div key={singleItem.id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{singleItem.name}</h5>
                <p className="card-text">ID: {singleItem.id}</p>
                <p className="card-text">Price: £{parseFloat(singleItem.price).toFixed(2)}</p>
                <p className="card-text">Quantity: {singleItem.quantity}</p>
                {editingItem && editingItem.id === singleItem.id ? (
                  <form onSubmit={handleSubmit}>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                    <input type="text" name="price" value={formData.price} onChange={handleChange} />
                    <input type="text" name="quantity" value={formData.quantity} onChange={handleChange} />
                    <button type="submit">Save</button>
                    <button type="button" onClick={handleCancel}>Cancel</button>
                  </form>
                ) : (
                  <>
                    <button  onClick={() => handleEdit(singleItem)}>Edit</button>
                    <button  onClick={() => deleteItem(singleItem.id)}>Delete</button>
                  </>
                )}


              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DisplayItem;
