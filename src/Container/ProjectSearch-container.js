import React, { Component } from "react";
import GitSearchCard from '../Components/GitSearchCard/GitSearchCard.js'
import { connect } from 'react-redux'
import { fetchSearchResults } from '../Actions/SearchAction'

class ProjectContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        if (this.props.totalCount != null) {
            console.log('check', this.props.totalCount)
        }
        return (
            <div className="row">
                <div className="card">
                    <div className="card-body">
                        <h1>Projects</h1>
                        <GitSearchCard></GitSearchCard>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    totalCount: state.searchResults != null ? state.searchResults.count : {},
    searchResults: state.searchResults != null ? state.searchResults.allResults : [],
})

export default connect(mapStateToProps, { fetchSearchResults })(ProjectContainer);