import React, { Component } from 'react';
// import { Route } from 'react-router-dom';
import  '../styles/home.css';
import Planandpricing from './plansandpricing'
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from   'react-router-dom';

class Review extends Component {
    
    constructor(props){
        super(props)
        // this.state = {
        //     plans: []
        // }
    }
    
        render(){
            //const {plans} = this.state
        return(
        <div>
            <div id="headings">

            </div>

            <div id="title-review" className="align-buttons">
                <span className="review-order">Review Order</span>
            </div>

            <div id="thankyou" className="align-buttons font-color">
                <span>Thank you <b>Bryan Cameroon</b> for Choosing SHW. Below is a Summary of your Selection</span>
            </div>

            <div id="content" className="align-buttons">
                <div className="section generic-display">
        
                    <img src="furniture.jpeg" className="add-image" /> <br />
                    <fieldset>  Standard Coverage + Any additional Add on</fieldset>
                </div>
                <div className="section generic-display">
                    <label className="font-color">Property of Interest Address</label><br />
                    <span>121 Street</span><br />
                    <span>California</span><br />
                    <span></span><br />
                    <span></span><br />
                    <span></span><br />
                    <span className="font-color">Billing Address/ Buyers Details</span><br />
                    <span>Address again</span><br />
                    <span>Address fir se</span><br />
                    <span></span><br />
                    <span></span><br />
                </div>
                <div className="section generic-display">
                    <span className="product font-color"> Your Product</span><br />
                    <span className="icon"> <i class="sa fa fa-check" aria-hidden="true"></i>Air Conditioning </span><br />
                    <span className="icon"> <i class="sa fa fa-check" aria-hidden="true"></i>Heating</span><br />
                    <span className="icon"> <i class="sa fa fa-check" aria-hidden="true"></i>Ductwork</span><br />
                    <span className="icon"> <i class="sa fa fa-check" aria-hidden="true"></i>Plumbing</span><br />
                    <span className="icon"> <i class="sa fa fa-check" aria-hidden="true"></i>Plumbing Stoppages</span><br />
                    <span className="icon"> <i class="sa fa fa-check" aria-hidden="true"></i>Electrical</span><br />
                    <span className="icon"> <i class="sa fa fa-check" aria-hidden="true"></i>Water Heaters</span><br />
                    <span className="icon"> <i class="sa fa fa-check" aria-hidden="true"></i>Insufficiently Maintained Equipment</span><br />
                    <span className="icon"> <i class="sa fa fa-check" aria-hidden="true"></i>Presence of Rust & Corrosion </span><br />
                    <span className="icon"> <i class="sa fa fa-check" aria-hidden="true"></i>Garbage,ovens,Cooktops </span><br />

                </div>
            </div>
         
            <div className="generic-display" style={{width: '100%'}}>
                <button className="generic-display set-color">Make Payments</button>
            </div>
        </div>
         );
        }
    }
    
    export default Review;