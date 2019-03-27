import React, { Component } from "react";
import GitSearchCard from '../Components/GitSearchCard/GitSearchCard.js'
import { connect } from 'react-redux'
import { fetchSearchResults } from '../Actions/SearchAction'
import './ProjectSearch-container.scss'
import ReactPaginate from 'react-paginate'

class ProjectContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
        this.pageCount = 0
    }


    handlePageClick = (pageNum) => {

    }

    render() {
        if (this.props.totalCount != null) {
            console.log('check', this.props.totalCount, this.props.totalCount.length)
            this.productCount = Number(this.props.totalCount)
            if (this.productCount == 0) {
                this.pageCount = 0
            }
            else {
                if (this.productCount < 12) {
                    this.pageCount = 1
                }
                else {
                    if ((this.productCount % 12) == 0) {
                        this.pageCount = Math.trunc(this.productCount / 12)
                    }
                    else {
                        this.pageCount = Math.trunc(this.productCount / 12) + 1
                    }
                }
            }
        }
        return (
            <div className="row">
                <div className="card">
                    <div className="card-body">
                        <h1>Projects</h1>
                        <GitSearchCard></GitSearchCard>
                    </div>

                    {
                        (this.pageCount != 0) ?

                            (
                                <div className="paginated">
                                    <ReactPaginate
                                        previousLinkClassName={'page-link'}
                                        previousLabel={'previous'}
                                        pageClassName={'page-item'}
                                        pageLinkClassName={'page-link'}
                                        nextLinkClassName={'page-link'}
                                        nextLabel={'next'}
                                        breakLabel={'...'}
                                        breakClassName={'break-me'}
                                        pageCount={this.pageCount}
                                        marginPagesDisplayed={2}
                                        pageRangeDisplayed={3}
                                        forcePage={this.currentPage}
                                        onPageChange={(page) => this.handlePageClick(page)}
                                        containerClassName={'pagination pages'}
                                        activeClassName={'active'}
                                    ></ReactPaginate>
                                </div>) : null
                    }
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