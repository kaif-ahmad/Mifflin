import React from 'react';
function Awards() {
    return (  
        <div className='container mt-5 mb-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src="media/images/largestBroker.svg" alt="" />
                </div>
                <div className='col-6 p-5 mt-5'>
                    <h1>A Broker in India</h1>
                    <p className='mb-4'>This is just a practice project to study working of Zerodha website</p>
                    <div className='row'>
                        <div className='col-6'>
                            <ul>
                                <li>Future and Options</li>
                                <li>Commodity and Derivatives</li>
                                <li>Currency Derivatives</li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li>Commodity and Derivatives</li>
                                <li>Future and Options</li>
                                <li>Currency Derivatives</li>
                            </ul>
                        </div>
                    </div>
                    <img src="media/images/pressLogos.png" alt="" style={{width:"90%"}}/>
                </div>
            </div>
        </div>
    );
}

export default Awards; 