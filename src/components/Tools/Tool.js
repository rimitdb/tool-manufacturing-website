import React from 'react'

const ToolDetails = ({ tool }) => {
  const { name, img, description, min_order_quantity, available_quantity, per_unit_price } = tool;

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
          <button className='btn btn-success'>Order Now</button>
        </div>
      </div>
    </div>
  )
}

export default ToolDetails
