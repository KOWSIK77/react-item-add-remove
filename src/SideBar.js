import React from 'react'

function SideBar({ cartItems, removeFromCart }) {
    return (
        <>{
            cartItems.length === 0 ? <div>No Items in Cart</div> :
                <>
                    <ol className="list-group list-group-numbered">
                        {
                            cartItems.map((items) => {
                                return <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">{items.name}</div>
                                        Rs.{items.price}
                                    </div>
                                    <button onClick={() => {
                                        removeFromCart(items.id)
                                    }} className="badge bg-primary rounded-pill">X</button>
                                </li>
                            })
                        }
                    </ol>
                    <h3>Total Price : Rs.{
                        cartItems.reduce((prev, curr) => {
                            return prev = prev + curr.price;

                        }, 0)
                    }</h3>
                </>
        }
        </>
    )
}

export default SideBar;