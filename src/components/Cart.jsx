import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { delCart } from "../redux/action/index";
import { addCart }  from "../redux/action/index"

export const Cart = () => {
    const state = useSelector( (state) => state.handleCart);
    const dispatch = useDispatch();

    const handleMinus = (product) =>{
        dispatch(delCart(product));
    }
    const handlePlus = (product) => {
        dispatch(addCart(product));
    }

    const cartItems = (product)=>{
        return (
            <div className="px-4 my-5 bg-light rounded-3" key={product.id}>
                <div className='container py-4'>
                <div className="row">
                    <div className='col-md-4'>
                        <img src={product.image} height="200px" width="180px" alt={product.title} />
                    </div>
                    <div className="col-md-4">
                        <h3>{product.title}</h3>
                        <p className="lead fw-bold">
                            {product.qty} X ${product.price} = 
                            ${product.qty * product.price }
                        </p>
                        <button className='btn btn-outline-dark me-4' 
                        onClick={() => handleMinus(product)}>
                            <i className="fa fa-minus"></i>
                        </button>
                        <button className='btn btn-outline-dark me-4' 
                        onClick={() => handlePlus(product)}>
                            <i className="fa fa-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        )
    }

    return (
        <>
            {state.length !== 0 && state.map(cartItems)}  
        </>
    )
}
