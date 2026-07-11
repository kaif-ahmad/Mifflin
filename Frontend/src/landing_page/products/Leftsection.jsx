import React from 'react';

function LeftSection({imageURL, productName, productDescription, tryDemo="", learnMore="", googlePlay="", appStore=""}) {
    return ( 
        <div className='container'>
            <div className="row border-top p-3 mb-5 mt-5">
                <div className="col-6 p-3"><img src={imageURL} alt=""/></div>
                <div className="col-6 mt-5 p-5">
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div className='d-flex gap-5'><a href={tryDemo} style={{textDecoration:"none"}} className='fw-semibold'>TryDemo →</a><a href={learnMore} style={{textDecoration:"none"}} className='fw-semibold'>Learn More →</a></div><br />
                    <div className='d-flex gap-3'><a href={googlePlay}><img src="media/images/googlePlayBadge.svg" alt="" /></a><a href={appStore}><img src="media/images/appstoreBadge.svg" alt="" /></a></div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;