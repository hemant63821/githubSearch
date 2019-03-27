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
            currentPage: 0
        }
        this.pageCount = 0
        this.results = []
    }


    handlePageClick = (pageNum) => {
        console.log('check page number', pageNum)
        this.setState({
            currentPage: (pageNum.selected)
        })
    }

    render() {
        if (this.props.searchResults != null) {
            this.results = this.props.searchResults
        }
        console.log('check projects length', this.results.length)

        const indexOfLastTodo = (this.state.currentPage + 1) * 12;
        const indexOfFirstTodo = indexOfLastTodo - 12;
        const projects = this.results.slice(indexOfFirstTodo, indexOfLastTodo);

        console.log('check projects', projects.length)

        this.productCount = this.results.length
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

        return (
            <div className="row">
                <div className="card">
                    <div className="card-body">
                        <h1>Projects</h1>
                        <div className="row">
                            {
                                projects.length ? projects.map((value, key) => {
                                    return (
                                        <GitSearchCard key={key} projectTitle={value.full_name} description={value.description}></GitSearchCard>
                                    )
                                }) : null
                            }
                        </div>
                    </div>

                    {
                        (this.props.totalCount != 0) ?

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
                                        forcePage={this.state.currentPage}
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