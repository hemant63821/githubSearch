import React, { Component } from "react";
import './GitSearchCard.scss'
import { connect } from 'react-redux'

class LoanComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }







    render() {
        return (
            <div className="row">
                <div className="card">
                    <div className="card-body">
                        <h1>Projects</h1>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    cities: state.bikeFilter != null ? state.bikeFilter.citiesList : [],
})

export default connect(mapStateToProps, {})(LoanComponent);