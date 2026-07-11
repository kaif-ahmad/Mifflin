import React from 'react';

function Hero() {
    return (
        <div className="bg-light py-5">
        <div className="container mt-2">
            <div className="row align-items-center">
                <div className="col-md-8">
                    <h1>Support Portal</h1>
                </div>
                <div className="col-md-4 text-end">
                    <button className="btn btn-warning">
                        My Tickets
                    </button>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-md-8">
                    <div className="d-flex align-items-center border rounded px-3">
                        <i className="fa fa-search text-muted me-3"></i>
                        <input
                            type="text"
                            className="form-control border-0 shadow-none"
                            placeholder="Eg: How do I open my account? How do I activate F&O..."
                        />
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Hero;