import React from 'react'
import{Link,Outlet} from 'react-router-dom'
const Product = () => {
    return (
        <div>
            <h1>Product</h1>
            <Link to="new-product">New Product</Link>
           <Outlet/>
        </div>
    )
}

export default Product
