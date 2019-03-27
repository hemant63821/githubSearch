import React, { Component } from "react";
import './Header.scss'

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="row">
                    <div className="col-sm-8">
                        <div className="card card-sm customCard">
                            <div className="card-body row align-items-center">
                                <div className="col-sm-2 pull-left search-icon">
                                    <i className="fa fa-search text-body"></i>
                                </div>
                                <div className="col-sm-6 pull-left">
                                    <input className="form-control form-control-borderless" type="search" placeholder="Search topics or keywords">
                                    </input>
                                    <div className="hrLine"></div>
                                </div>
                                <div className="col-sm-4 pull-left">
                                    <button className="btn btn-sm btn-success" type="submit">Search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;