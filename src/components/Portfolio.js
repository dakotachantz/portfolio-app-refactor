import React, { Component } from 'react'
import portfolioImg from '../img/portfolioImg.jpg';
export default class Portfolio extends Component {
    render() {
        return (
            <div className="main-container">
                <section className="bg-light" id="portfolio">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="section-heading">Portfolio</h2>
                                <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 col-sm-6 portfolio-item">
                                <img className="portfolioImg" src={portfolioImg} alt="" />
                                <div className="portfolio-caption">
                                    <h4>Code Snippet</h4>
                                    <p className="text-muted">Built with Node, Express, HTML, CSS, and JavaScript</p>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 portfolio-item">
                                <img className="portfolioImg" src={portfolioImg} alt="" />
                                <div className="portfolio-caption">
                                    <h4>Sample Portfolio</h4>
                                    <p className="text-muted">Built with React, JavaScript, React Router, and Bootstrap</p>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 portfolio-item">
                                <img className="portfolioImg" src={portfolioImg} alt="" />
                                <div className="portfolio-caption">
                                    <h4>Simple React Blog</h4>
                                    <p className="text-muted">Built with React, JavaScript, React Router, and Bootstrap</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
