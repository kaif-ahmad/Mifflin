import React from 'react';
function Footer() {
    return (
        <footer className='' style={{backgroundColor:"rgb(250,250,250)"}}>
        <div className="container border-top">
            <div className="row mt-4">
                <div className="col">
                    <a class="navbar-brand" href="#" className='fs-2 fw-semibold text-warning fst-italic' style={{ textDecoration: "none" }}><i className="fa fa-money" aria-hidden="true"></i>  MIFFLIN</a>
                    <p>&copy; 2010 - 2026,Mifflin Broking Ltd.All rights reserved.</p>
                </div>
                <div className="col mt-3">
                    <p className='fw-semibold'>Company</p>
                    <a className='footer-a-tags' href="">Open demat account</a><br />
                    <a className='footer-a-tags' href="">Minor demat account</a><br />
                    <a className='footer-a-tags' href="">NRI demat account</a><br />
                    <a className='footer-a-tags' href="">Fund transfer</a><br />
                </div>
                <div className="col mt-3">
                    <p className='fw-semibold'>Support</p>
                    <a className='footer-a-tags' href="">Z-Connect blog</a><br />
                    <a className='footer-a-tags' href="">Support portal</a><br />
                    <a className='footer-a-tags' href="">How to file a complaint?</a><br />
                    <a className='footer-a-tags' href="">Downloads</a><br />
                </div>
                <div className="col mt-3">
                    <p className='fw-semibold'>Account</p>
                    <a className='footer-a-tags' href="">demat account</a><br />
                    <a className='footer-a-tags' href="">Open demat account</a><br />
                    <a className='footer-a-tags' href="">Minor account</a><br />
                    <a className='footer-a-tags' href="">Minor demat account</a><br />
                </div>
                <div className="col mt-3">
                    <p className='fw-semibold'>Quick Links</p>
                    <a className='footer-a-tags' href="">Upcoming IPOs</a><br />
                    <a className='footer-a-tags' href="">Economic calendar</a><br />
                    <a className='footer-a-tags' href="">Sectors</a><br />
                    <a className='footer-a-tags' href="">Gift Nifty</a><br />
                </div>
            </div>
            <div className="row mb-3">
                <p className='fw-light mt-5'>
                    Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <a href="" style={{ textDecoration: "none" }}>complaints@mifflin.com</a>, for DP related to <a style={{ textDecoration: "none" }} href="">dp@mifflin.com</a>. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
                </p>
                <p className='fw-light'>
                    "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers/depository participants. Receive information of your transactions directly from Exchange/Depositories on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please className='fw-light mt-5 <a style={{ textDecoration: "none" }} href="">create a ticket here</a>
                </p>
            </div>
            <div className="border-top pt-3 mb-4">
                <div className="d-flex justify-content-between align-items-center text-center flex-wrap">
                    <a href="#" className="text-decoration-none text-secondary fw-semibold">NSE</a>
                    <a href="#" className="text-decoration-none text-secondary fw-semibold">BSE</a>
                    <a href="#" className="text-decoration-none text-secondary fw-semibold">Terms & Conditions</a>
                    <a href="#" className="text-decoration-none text-secondary fw-semibold">Policies & Procedures</a>
                    <a href="#" className="text-decoration-none text-secondary fw-semibold">Privacy Policy</a>
                    <a href="#" className="text-decoration-none text-secondary fw-semibold">Disclosure</a>
                    <a href="#" className="text-decoration-none text-secondary fw-semibold">For Investor's Attention</a>
                    <a href="#" className="text-decoration-none text-secondary fw-semibold">Sitemap</a>
                </div>
            </div>
        </div>
        </footer>
    );
}

export default Footer;