import React from 'react'
import { useNavigate } from 'react-router-dom';

const ToolDetails = ({ tool }) => {
  const { _id, name, img, description, min_order_quantity, available_quantity, per_unit_price } = tool;
  const navigate = useNavigate();

  const handleOrder = id => {
    navigate(`/tool/${id}`)
  }

  return (
    <div className='g-3 col-sm-12 col-md-6 col-lg-4'>
      <div className='card'>
        <img src={img} className="card-img-top" alt="images_name" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h6 className="card-title">Unit Price: ${per_unit_price}</h6>
          <p className="card-text">{description}</p>
          <p className="card-text">MOQ: {min_order_quantity}</p>
          <p className="card-text">Stock: {available_quantity}</p>
          <button onClick={() => handleOrder(_id)} className='btn btn-warning'>Order Now</button>
        </div>
      </div>
    </div>
  )
}

export default ToolDetails
