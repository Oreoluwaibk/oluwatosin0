import React from 'react'
import Headers from '@/reusables/headers';

const CartComponent = () => {
  return (
    <div className="h-screen overflow-y-scroll" style={{ background: `#fff center center/cover no-repeat`}}>
        <Headers active="cart"/>
    </div>
  )
}

export default CartComponent;