import React from 'react'

function card({ pet, addToCart, cartItems }) {
  return (
    <div className="col-lg-4 border mt-3 p-2" >
      <div className="row">
        <div className="col-lg-12">
        
        </div>
        <div className="col-lg-12">
          <span>Id :{pet.id}</span>
          <h2><strong>{pet.name}</strong></h2>
          <h4>Rs.{pet.price}</h4>
          <button disabled={cartItems.some(obj => obj.id === pet.id)} onClick={() => {
            addToCart(pet)
          }}
            className="btn btn-sm btn-primary">
            {
              cartItems.some(obj => obj.id === pet.id) ? "Added To Cart" : "Add To Cart"
            }
          </button>
        </div>
      </div>
    </div>
  )
}

export default card;