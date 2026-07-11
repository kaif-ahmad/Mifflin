import React from 'react';

function Hero() {
    return ( 
        <div className='container'>
            <div className='row p-5 mt-5 mb-5 text-center'>
                <div className='p-2 fs-1'>Mifflin Products</div>
                <div className='p-1 fw-dark fs-4 text-muted'>Sleek, modern, and intuitive trading platforms</div>
                <div className='p-1 fw-dark fs-5'>Check out our <a href="" style={{textDecoration:"none"}}>investment offerings →</a></div>
            </div>
        </div>
    );
}

export default Hero;