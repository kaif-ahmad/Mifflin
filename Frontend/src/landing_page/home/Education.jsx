import React from 'react';
function Education() {
    return (  
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-6'>
                    <img src="media/images/education.svg" alt="" style={{width:"70%"}}/>
                </div>
                <div className='col-6 mt-5'>
                    <h1 className='mb-4'>Free and open market education</h1>
                    <p className='text-hidden'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.<br/><a href="" className='' style={{textDecoration:"none"}}>Varsity  <i class="fa fa-arrow-right" aria-hidden="true"></i></a></p>
                    <p className='text-hidden'>TradingQ&A, the most active trading and investment community in India for all your market related queries.<br /><a href="" className='' style={{textDecoration:"none"}}>TradingQ&A  <i class="fa fa-arrow-right" aria-hidden="true"></i></a></p>
                </div>
            </div>
        </div>
    );
}

export default Education;