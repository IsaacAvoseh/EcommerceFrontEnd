import React from 'react'

function CalculateShopping() {
    return (
        <div className="total-checkout">
    
        <input placeholder="Bangladesh" className="mt-4 checkout-input3" type="text"  />
        <input placeholder="Mirpur Dhaka - 1200" className="mt-4 checkout-input3" type="text"  />
        <input placeholder="Postal Code" className="mt-4 checkout-input3" type="text"  />
      
        <button className="calculate-btn mt-4">Calculate Shipping</button>
      </div>
    )
}

export default CalculateShopping
