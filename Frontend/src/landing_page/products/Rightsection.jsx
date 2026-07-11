import React from 'react';

function RightSection({imageURL, productName, productDescription, learnMore=""}) {
    return (  
        <div className='container'>
            <div className="row border-top p-3">
                <div className="col-6 mt-5 p-5">
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div className=''><a href={learnMore} style={{textDecoration:"none"}} className='fw-semibold'>Learn More →</a></div><br />
                </div>
                <div className="col-6"><img src={imageURL} alt="" className='w-75'/></div>
            </div>
        </div>
    );
}

export default RightSection;