import React, { Component } from "react";
import './Header.scss'
import { connect } from 'react-redux'
import { fetchSearchResults } from '../../Actions/SearchAction'

class Header extends Component {

    constructor(props) {
        super(props)
        this.state = {
            searchKey: ''
        }
        this.searchProjects = this.searchProjects.bind(this)
    }

    onChange = (e) => {
        console.log('checlk', e.target.value)
        this.setState({
            searchKey: e.target.value
        })
    }

    handleKeyPress = (searchKey, e) => {
        if (e.key === 'Enter') {
            this.searchProjects(searchKey)
        }
    }

    searchProjects = (searchKey) => {
        this.props.fetchSearchResults(searchKey)
    }


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
                                    <input className="form-control form-control-borderless" type="search" placeholder="Search topics or keywords" onChange={(e) => this.onChange(e)}>
                                    </input>
                                    <div className="hrLine"></div>
                                </div>
                                <div className="col-sm-4 pull-left">
                                    <button className="btn btn-sm btn-success" type="submit" onClick={(e) => this.searchProjects(this.state.searchKey)} onKeyPress={(e) => this.handleKeyPress(this.state.searchKey, e)}>Search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    cities: state.bikeFilter != null ? state.bikeFilter.citiesList : [],
})

export default connect(mapStateToProps, { fetchSearchResults })(Header);