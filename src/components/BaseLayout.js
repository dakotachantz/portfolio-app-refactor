import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom';

const styles = {
    nav: {
        position: 'fixed',
        top: 0,
        padding: 0
    }
}

export default class BaseLayout extends Component {
    render() {
        return (
            <div>
                <nav style={styles.nav} className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
                    <div className="container nav">
                        <Link className="navbar-brand" to="#page-top">Dakota Nichols</Link>
                        <div className="" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <NavLink activeClassName="selected" className="nav-link" exact to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink activeClassName="selected" className="nav-link" to="/about">About</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink activeClassName="selected" className="nav-link" to="/portfolio">Portfolio</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {this.props.children}
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <span className="copyright">Copyright &copy; Dakota Nichols 2017</span>
                            </div>
                            <div className="col-md-4">
                                <ul className="list-inline social-buttons">
                                    <li className="list-inline-item">
                                        <Link to="#">
                                            <i className="fa fa-github"></i>
                                        </Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link to="#">
                                            <i className="fa fa-file-text"></i>
                                        </Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link to="#">
                                            <i className="fa fa-linkedin"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}
