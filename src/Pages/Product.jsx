import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../Components/Breadcrums/Breadcrum'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'

const Product = () => {
    const { all_product } = useContext(ShopContext)
    console.log("all_product", all_product);

    const { productId } = useParams();
    const product = all_product.find((e) => e.id === Number(productId))
    console.log("product", product);

    return (
        <div>
            {product ? <Breadcrum product={product} /> : <p>Product not found</p>}
            <ProductDisplay product={product} />
        </div>
    )
}

export default Product