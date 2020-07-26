import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

function admin(props) {
    console.log(`breadcrumb-item ${props.active}`)
    return (
        <Fragment>
            <div className="row page-titles">
                <div className="col-md-5 align-self-center">
                    <h3 className="text-themecolor">{props.uploader ? "Uploader" : (props.creator ? "Creator" : "Package")} Dashboard</h3>
                </div>
                <div className="col-md-7 align-self-center text-right">
                    <div className="d-flex justify-content-end align-items-center">
                        <ol className="breadcrumb">
                            <li className={`breadcrumb-item ${props.uploader}`}><Link to="/uploader">Uploader</Link></li>
                            <li className={`breadcrumb-item ${props.creator}`}><Link to="/creator">Creator</Link></li>
                            <li className={`breadcrumb-item ${props.package}`}><Link to="/package">Package</Link></li>
                            {/* <li className="breadcrumb-item active">active</li> */}
                        </ol>
                    </div>
                </div>
            </div>

            {/* <nav className="wsmenu clearfix">
                <ul className="wsmenu-list">
                    <li className="nl-simple"><Link to="/uploader">Uploader</Link></li>
                    <li className="nl-simple"><Link to="/creator">Creator</Link></li>
                    <li className="nl-simple"><Link to="/package">Package</Link></li>
                    <li className="nl-simple"><Link to="/test">Test</Link></li>
                </ul>
            </nav> */}
        </Fragment>
    );
}

export default admin;