import React from 'react';

function CreateTicket() {
    return (
        <div className="container my-5">
            <div className="row">

                {/* Left Section */}
                <div className="col-lg-8 pe-5">

                    <div className="list-group shadow-sm">

                        <a href="" className="list-group-item list-group-item-action p-0">
                            <div className="d-flex align-items-center">
                                <div className="icon-box">
                                    <i className="fa fa-plus-circle"></i>
                                </div>
                                <h4 className="mb-0 ms-3 flex-grow-1">Account Opening</h4>
                                <i className="fa fa-angle-down me-4"></i>
                            </div>
                        </a>

                        <a href="" className="list-group-item list-group-item-action p-0">
                            <div className="d-flex align-items-center">
                                <div className="icon-box">
                                    <i className="fa fa-user-circle-o"></i>
                                </div>
                                <h4 className="mb-0 ms-3 flex-grow-1">Your Mifflin Account</h4>
                                <i className="fa fa-angle-down me-4"></i>
                            </div>
                        </a>

                        <a href="" className="list-group-item list-group-item-action p-0">
                            <div className="d-flex align-items-center">
                                <div className="icon-box">
                                    <i className="fa fa-telegram"></i>
                                </div>
                                <h4 className="mb-0 ms-3 flex-grow-1">Kite</h4>
                                <i className="fa fa-angle-down me-4"></i>
                            </div>
                        </a>

                        <a href="" className="list-group-item list-group-item-action p-0">
                            <div className="d-flex align-items-center">
                                <div className="icon-box">
                                    <i className="fa fa-inr"></i>
                                </div>
                                <h4 className="mb-0 ms-3 flex-grow-1">Funds</h4>
                                <i className="fa fa-angle-down me-4"></i>
                            </div>
                        </a>

                        <a href="" className="list-group-item list-group-item-action p-0">
                            <div className="d-flex align-items-center">
                                <div className="icon-box">
                                    <i className="fa fa-dot-circle-o"></i>
                                </div>
                                <h4 className="mb-0 ms-3 flex-grow-1">Console</h4>
                                <i className="fa fa-angle-down me-4"></i>
                            </div>
                        </a>

                        <a href="" className="list-group-item list-group-item-action p-0">
                            <div className="d-flex align-items-center">
                                <div className="icon-box">
                                    <i className="fa fa-clock-o"></i>
                                </div>
                                <h4 className="mb-0 ms-3 flex-grow-1">Coin</h4>
                                <i className="fa fa-angle-down me-4"></i>
                            </div>
                        </a>

                    </div>

                </div>

                {/* Right Section */}
                <div className="col-lg-4">

                    {/* Notice Box */}
                    <div className="notice-box mb-4">
                        <ul className="mb-0">
                            <li>
                                <a href="">
                                    Rights Entitlements listing in July 2026
                                </a>
                            </li>

                            <li className="mt-3">
                                <a href="">
                                    Current Takeovers and Delisting – July 2026
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div className="card border-0 shadow-sm">

                        <div className="card-header bg-light fw-semibold">
                            Quick links
                        </div>

                        <div className="list-group list-group-flush">

                            <a href="" className="list-group-item">
                                1. Track account opening
                            </a>

                            <a href="" className="list-group-item">
                                2. Track segment activation
                            </a>

                            <a href="" className="list-group-item">
                                3. Intraday margins
                            </a>

                            <a href="" className="list-group-item">
                                4. Kite user manual
                            </a>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
}

export default CreateTicket;