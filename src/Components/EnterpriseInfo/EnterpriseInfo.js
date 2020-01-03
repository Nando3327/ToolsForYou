/**
 * Created by Fernando on 03/03/19.
 */
import React, {Component} from 'react';
import labels from './Labels/EnterpriseInfoLabels'
import '../../App.css';

class EnterpriseInfo extends Component {
    render() {
        return (
            <div className="row sidenav parallax-section">
                <div className="col-md-12">
                    <img className="logoSize" src="http://cosarcotouring.com//img/CosarcoLogo.png"/>
                </div>
                <div className="separetorLogin col-md-12">
                    <hr className="u"/>
                    <br/>
                    <hr className="d"/>
                </div>
                <div className="col-md-12 login-main-text">
                    <div>
                        <h2><strong>{labels.locationContact}</strong></h2>
                        <div className="clearfix">
                            <i className="fa fa-home fa-lg"></i>
                            <span>{labels.addres}<br/>
                                {labels.addres2}<br/>
                                {labels.addres3}
                                                </span>
                        </div>
                        <div className="con-info clearfix">
                            <i className="fa fa-phone fa-lg"></i>
                            <span className="color">Teléfono: +593 (02)60-10-799</span>
                        </div>
                        <div className="con-info clearfix">
                            <i className="fa fa-envelope fa-lg"></i>
                            <span className="color">Email: paola@cosarcotouring.com</span>
                        </div>
                    </div>
                </div>
                <div className="row visitLogin">
                    <div className="col-lg-12 text-center">
                        <div className="twitter-bird">
							                <span>
                                                <a href="https://www.facebook.com/Cosarco-Touring-303355106793032/"
                                                   target="_blank"
                                                   className="btn btn-link"><i className="fa fa-facebook fa-4x"></i></a>
                                           </span>
                            <span>
                                                <a href="https://twitter.com/amimorshed" target="_blank"
                                                   className="btn btn-link"><i className="fa fa-twitter fa-4x"></i></a>
				                			</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EnterpriseInfo;