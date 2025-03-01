import React from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'

const ProductDisplay = (props) => {
    const { product } = props;
    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={product.image} alt="" />
                </div>

            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-start">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(123)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <p className="productdisplay-right-prices-old">${product.old_price}</p>
                    <p className="productdisplay-right-prices-new">${product.new_price}</p>
                </div>
                <div className="productdisplay-right-discription">
                    A lightwight, usually knitted, pullover shirt, close-fitting and
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select size</h1>
                    <div className="productdisplay-right-size">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXl</div>
                    </div>
                </div>
                <button>ADD TO CART</button>
                <div className="productdisplay-right-category"><span>Category :</span>Women, T-shirt, Crop Top</div>
                <div className="productdisplay-right-category"><span>Tags :</span>Modern, Latest</div>
            </div>

        </div>
    )
}

export default ProductDisplay
