import React from 'react';

function Team() {
    return (
        <div className="container">
            <div className="row p-3 border-top">
                <h1 className='text-center'>People</h1>
            </div>
            <div className="row mb-5 p-3">
                <div className="col-6 fs-5 fw-light text-center">
                    <img src="media/images/eren.jpg" alt="founder" style={{borderRadius:"100%",width:"55%"}}/>
                    <h4 className='mt-3 fw-light'>Eren Yeager</h4>
                    <h5 className='fw-light'>Founder, CEO</h5>
                </div>
                <div className="col-6 fs-5 fw-light mt-5">
                    <p className=''>Eren bootstrapped and founded Mifflin in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p>Playing basketball is his zen.</p>
                    <p>Connect on <a href="" style={{textDecoration:"none"}}>TradingQ&A</a> / <a href="" style={{textDecoration:"none"}}>Twitter</a></p>
                </div>
            </div>
        </div>
    );
}

export default Team;