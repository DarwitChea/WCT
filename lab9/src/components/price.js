import React from 'react';
import Button from 'react-bootstrap/Button';

function Pricebox() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '50px', marginTop: '50px' }}>
            {/* First Card */}
            <div className="card mb-4 shadow-sm text-center">
                <div className="card-header">
                    <h4 className="my-0 font-weight-normal">Free</h4>
                </div>
                <div className="card-body">
                    <h1 className="card-title pricing-card-title">$0 <small className="text-muted">/ mo</small></h1>
                    <ul className="list-unstyled mt-3 mb-4">
                        <li>10 users included</li>
                        <li>2 GB of storage</li>
                        <li>Email support</li>
                        <li>Help center access</li>
                    </ul>
                    <button type="button" className="btn btn-lg btn-block btn-outline-primary">Sign up for free</button>
                </div>
            </div>

            {/* Second Card */}
            <div className="card mb-4 shadow-sm text-center">
                <div className="card-header">
                    <h4 className="my-0 font-weight-normal">Pro</h4>
                </div>
                <div className="card-body">
                    <h1 className="card-title pricing-card-title">$10 <small className="text-muted">/ mo</small></h1>
                    <ul className="list-unstyled mt-3 mb-4">
                        <li>20 users included</li>
                        <li>5 GB of storage</li>
                        <li>Priority email support</li>
                        <li>Help center access</li>
                    </ul>
                    <button type="button" className="btn btn-lg btn-block btn-outline-primary">Get started</button>
                </div>
            </div>

            {/* Third Card */}
            <div className="card mb-4 shadow-sm text-center">
                <div className="card-header">
                    <h4 className="my-0 font-weight-normal">Enterprise</h4>
                </div>
                <div className="card-body">
                    <h1 className="card-title pricing-card-title">$30 <small className="text-muted">/ mo</small></h1>
                    <ul className="list-unstyled mt-3 mb-4">
                        <li>50 users included</li>
                        <li>10 GB of storage</li>
                        <li>24/7 email support</li>
                        <li>Help center access</li>
                    </ul>
                    <button type="button" className="btn btn-lg btn-block btn-outline-primary">Contact us</button>
                </div>
            </div>
        </div>
    );
}

export default Pricebox;
