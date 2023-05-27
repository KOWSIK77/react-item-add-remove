import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Card from "./Card";
import SideBar from "./SideBar"
import { useState } from 'react'

function App() {
  const [pets, setPets] = useState([
    {
      id: "1",
      name: "benz",
      breed: "american",
      
      price: 13000
    },
    {
      id: "2",
      name: "cooper",
      breed: "france",
     
      price: 24000
    },
    {
      id: "3",
      name: "audi",
      breed: "europe",
      
      price: 4300
    },
    {
      id: "4",
      name: "maruthi",
      breed: "japan",
   
      price: 8500
    },
    {
      id: "5",
      name: "mustang",
      breed: "ford ",
     
      price: 32000
    },
    {
      id: "6",
      name: "ceverlot",
      breed: "europe",
      
      price: 20000
    },
    {
      id: "7",
      name: "danzo",
      breed: "rome ",
   
      price: 17500
    },
    {
      id: "8",
      name: "tequila",
      breed: "Scottish Fold ",
    
      price: 13500
    }
    

  ]);

  const [cartItems, setCartItems] = useState([])
  let addToCart = (pet) => {
    setCartItems([...cartItems, pet])
  }
  let removeFromCart = (pet) => {
    const indexVal = cartItems.findIndex(obj => obj.id == pet);
    cartItems.splice(indexVal, 1);
    setCartItems([...cartItems])
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="row">
            {
              pets.map((pet) => {
                return <Card pet={pet} addToCart={addToCart} cartItems={cartItems} />
              })
            }

          </div>
        </div>
        <div className="col-lg-4">
          <h2>Cart Items</h2>
          <SideBar cartItems={cartItems} removeFromCart={removeFromCart} />
        </div>
      </div>
    </div>
  )

}
export default App;
