import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom';

const styles = {
    nav: {
        position: 'fixed',
        top: 0,
        padding: 0,
        width: '100%',
        height: '3em'
    },
    link: {
        color: '#fff',
        textDecoration: 'none'
    }
}

export default class BaseLayout extends Component {
    render() {
        return (
            <div>
                <nav style={styles.nav} className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
                    <div className="container nav">
                        <Link className="navbar-brand" to="">Dakota Nichols</Link>
                        <div className="" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <NavLink style={styles.link} activeStyle={{ color: '#fec503' }} className="nav-link" exact to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink style={styles.link} activeStyle={{ color: '#fec503' }} className="nav-link" to="/about">About</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink style={styles.link} activeStyle={{ color: '#fec503' }} className="nav-link" to="/portfolio">Portfolio</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink style={styles.link} activeStyle={{ color: '#fec503' }} className="nav-link" to="/contact">Contact</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink style={styles.link} activeStyle={{ color: '#fec503' }} className="nav-link" to="/references">References</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {this.props.children}
                <footer className="footer" style={{
                    bottom: 0,
                    width: '100%',
                    height: '5em',
                    position: 'absolute',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <span className="copyright">Copyright &copy; Dakota Nichols 2017</span>
                            </div>
                            <div className="col-md-4">
                                <ul className="list-inline social-buttons">
                                    <li className="list-inline-item">
                                        <a href="https://github.com/dakotachantz">
                                            <i className="fa fa-github"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="">
                                            <i className="fa fa-file-text"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="https://www.linkedin.com/in/dakotachantz/">
                                            <i className="fa fa-linkedin"></i>
                                        </a>
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
