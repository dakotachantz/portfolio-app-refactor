import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class Home extends Component {
    render() {
        return (
            <header className="masthead">
                <div className="container">
                    <div className="intro-text">
                        <div className="intro-lead-in">Welcome to My Portfolio Site!</div>
                        <div className="intro-heading">It's Nice To Meet You</div>
                        <Link className="btn btn-xl" to="/portfolio">Check out my work!</Link>
                    </div>
                </div>
            </header>
        )
    }
}
