import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class Contact extends Component {
    render() {
        return (
            <div className="main-container">
                <h1>Contact Me</h1>
                <div className="col-md-6">
                    <h3 className="title">Find me via:</h3>
                    <ul className="list-inline social-buttons contact-buttons">
                        <li className="list-inline-item">
                            <Link to="#">
                                <i className="fa fa-phone"></i>
                            </Link>
                        </li>
                        <li className="list-inline-item">
                            <Link to="#">
                                <i className="fa fa-envelope"></i>
                            </Link>
                        </li>
                        <li className="list-inline-item">
                            <Link to="#">
                                <i className="fa fa-linkedin"></i>
                            </Link>
                        </li>
                        <li className="list-inline-item">
                            <Link to="#">
                                <i className="fa fa-github"></i>
                            </Link>
                        </li>
                        <li className="list-inline-item">
                            <Link to="#">
                                <i className="fa fa-twitter"></i>
                            </Link>
                        </li>
                        <li className="list-inline-item">
                            <Link to="#">
                                <i className="fa fa-instagram"></i>
                            </Link>
                        </li>
                        <li className="list-inline-item">
                            <Link to="#">
                                <i className="fa fa-facebook"></i>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
