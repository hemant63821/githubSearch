import React, { Component } from "react";
import './GitSearchCard.scss'
import { connect } from 'react-redux'

import Axios from 'axios'

class LoanComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    getInterestPerTenure = (amount, tenure) => {
        Axios.get('https://ftl-frontend-test.herokuapp.com/interest?' + 'amount=' + amount + '&numMonths=' + tenure)
            .then(data => {
                if (data.status == 200) {
                    this.setState({
                        interestRate: data.data.interestRate,
                        monthlyPayment: data.data.monthlyPayment.amount,
                        numPayments: data.data.numPayments,
                        principal: data.data.principal.amount
                    })
                }
                if (data.status == "error") {
                    console.log("error")
                }
            })
            .catch(function (error) {

            })
    }

    onChange = (e) => {
        var amount = this.state.loanAmount
        var tenure = this.state.loanTenure
        var val = Number(e.target.value)
        if (e.target.id == "money") {
            this.setState({
                loanAmount: e.target.value,
            })
            if (val >= 500 && val <= 5000) {
                amount = val
                this.setState({
                    sliderAmountValues: val,
                    amountError: false
                })
                this.getAllInterestsCheck(amount, tenure)
            }

            else {
                this.setState({
                    amountError: true
                })
            }

        }

        if (e.target.id == "tenure") {
            this.setState({
                loanTenure: e.target.value,
            })
            if (val >= 6 && val <= 24) {
                tenure = val
                this.setState({
                    sliderTimeValues: val,
                    tenureError: false
                })
                this.getAllInterestsCheck(amount, tenure)
            }
            else {
                this.setState({
                    tenureError: true
                })
            }
        }
    }

    getAllInterestsCheck = (amount, tenure) => {
        this.getInterestPerTenure(amount, tenure)
    }

    convertToCurrencyFormat = (str) => {
        if (str) {
            var x = str;
            x = x.toString();
            var lastThree = x.substring(x.length - 3);
            var otherNumbers = x.substring(0, x.length - 3);
            if (otherNumbers != '')
                lastThree = ',' + lastThree;
            var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
            return res;
        }
        else {
            return str;
        }
    }

    bindSliderValues = (value, type) => {
        if (type == 'tenure') {
            this.setState({
                loanTenure: value
            })
        }
        else {
            this.setState({
                loanAmount: value
            })
        }
        this.getInterestPerTenure(this.state.loanAmount, this.state.loanTenure)
    }

    maxLengthCheck = (e) => {
        if (e.target.value.length > e.target.value.maxLength)
            e.target.value = e.target.value.slice(0, e.target.value.maxLength)
    }


    isNumeric(evt) {
        var theEvent = evt || window.event;
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
        var regex = /[0-9]|\./;
        if (!regex.test(key)) {
            theEvent.returnValue = false;
            if (theEvent.preventDefault) theEvent.preventDefault();
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