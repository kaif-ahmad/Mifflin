import React from 'react';
import { Link } from 'react-router-dom';
function NotFound() {
    return ( 
        <div className='container p-5 text-center'>
            <div className='row'>
                <h1 className='mt-5'>ERROR: 404 Not Found</h1>
                <p>This Page does Not Exist</p>
                <Link to="/">
                    <button className='p-2 btn btn-warning fs-5 text-white' style={{width:"20%",margin:"0 auto"}}>
                        Go Home!
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default NotFound;