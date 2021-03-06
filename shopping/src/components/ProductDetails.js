import React,{useContext} from 'react';
import  {Link} from "react-router-dom";
//context
import { ProductContext } from '../context/ProductContextProvider';
 
const ProductDetails = (props) => {
    const data = useContext (ProductContext);
    const id= props.match.params.id;
    const product = data[id - 1];
    const {image, title, price, category,description} = product;
    return (
        <div>
            <img src={image} alt="product" />
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <p><span>Category:</span>{category}</p>
                <div>
                    <span>{price} $</span>
                    <Link to="/product">Back to shop</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;