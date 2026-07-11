import React from 'react';

function Hero() {
    return ( 
        <div className="conatiner">
            <div className="row border-bottom p-5 mt-5 text-center">
                <h1>Pricing</h1>
                <h3 className='text-muted mb-5 mt-3'>List of all charges and taxes</h3>
            </div>
            <div className="row p-5 text-center border-bottom">
                <div className="col-4 p-5">
                    <img src="media/images/pricingEquity.svg" alt="" style={{width:"80%"}}/>
                    <h2>Free equity delivery</h2>
                    <p className='text-muted mt-3'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col-4 p-5">
                    <img src="media/images/intradayTrades.svg" alt="" style={{width:"80%"}}/>
                    <h2>Intraday and F&O trades</h2>
                    <p className='text-muted mt-3'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className="col-4 p-5">
                    <img src="media/images/pricingEquity.svg" alt="" style={{width:"80%"}} />
                    <h2>Free direct MF</h2>
                    <p className='text-muted mt-3'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;