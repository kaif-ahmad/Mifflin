import React from 'react';
import { Link } from 'react-router-dom';

function Universe() {
    return ( 
        <div className='container'>
            <div className="row text-center mt-5">
                <h1>The Mifflin Universe</h1>
                <p className='mt-3'>Extend your trading and investment experience even further with our partner platforms</p>
            </div>
            <div className="row text-center mt-4 p-4">
                <div className="col-4 p-3">
                    <img src="media/images/smallcaseLogo.png" alt="" className='w-50'/><p className='text-small text-muted p-3'>Thematic Investment Platforms</p>
                    <img src="media/images/streakLogo.png" alt=""  className='w-50'/><p className='text-small text-muted p-3'>Algo & Strategy Platform</p>
                </div>
                <div className="col-4 p-4">
                    <img src="media/images/sensibullLogo.svg" alt="" className='w-50'/><p className='text-small text-muted p-3'>Options Trading Platform</p>
                    <img src="media/images/zerodhaFundhouse.png" alt="" className='w-50 mt-4'/><p className='text-small text-muted p-3'>Asset Management</p>
                </div>
                <div className="col-4 p-3">
                    <img src="media/images/smallcaseLogo.png" alt="" /><p className='text-small text-muted p-3'>Bonds Trading Platform</p>
                    <img src="media/images/dittoLogo.png" alt="" className='w-50'/><p className='text-small text-muted p-3'>Another Platform</p>
                </div>
                <div className="row text-center">
                    <Link to='/signup'>
                        <button className='p-2 btn btn-warning fs-5 text-white mb-4' style={{width:"20%",margin:"0 auto"}}>SignUp Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Universe;