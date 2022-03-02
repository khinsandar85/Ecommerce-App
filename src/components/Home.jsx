import React from 'react';
import backgroundImg from '../image/bb.jpg';
import { Products } from './Products';

export const Home = () => {
  return (
    <div className='hero'>
        <div className="card bg-dark text-white border-0">
            <img src={backgroundImg} className="card-img" height='670px' alt="Background" />
            <div className="card-img-overlay d-flex flex-column justify-content-center">
                <div className='container'>
                    <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVAL</h5>
                    <p className="card-text lead fs-2">
                        CHECK OUT ALL THE TREND
                    </p>
                </div>
            </div>
        </div>
        <Products />
    </div>
  )
}
