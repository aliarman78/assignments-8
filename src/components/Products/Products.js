import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import './Products.css'
const Products = (props) => {
    const {name, img, brand, storage, price} = props.product;
    const {handleItems} = props;

    return ( 
        <div className = "card-group products">
        <div className = "product">
        <img src = {img} className = "card-img-top" alt = "..."/>
        <div className = "card-body product-details">
        <h5 className = "card-title">{name}</h5> 
        <h5 className = "card-title">Brand: {brand}</h5> 
        <h5 className = "card-title">Storage: {storage}</h5> 
        <p className = "fs-4">Price: ${price}</p> 
        </div> 
        <button type = "button" onClick = {() => handleItems(props.product)}
        className = "btn btn-primary text-center bg-primary cart-btn py-2" > Add to Cart 
        <span className = 'ms-2'></span>
        <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
        </button>
        </div> 
        </div>
    );
};

export default Products;