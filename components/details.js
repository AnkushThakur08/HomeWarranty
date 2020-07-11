import React, { Component } from 'react';
import  '../styles/home.css';
import axios from 'axios';
import Home from './home'
import Review from './review'
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from   'react-router-dom';


class Details extends Component {
    
constructor(props){
    super(props)
    // console.log("props: ", this.props.selectedPlan);
    // this.state = {
    //      id: this.props.selectedPlan
    // }
}

// componentDidMount(){
//     axios.get('http://localhost:1811/api/genericuser')
//     .then(response => this.setState({plans: response.data}))
//     .catch(error => console.log(error))
// }

    render(){
        //const {plans} = this.state
        //const {id} = this.state;
    return(
    <div>
        <div id="heading">

        </div>

        <div id="nav-bar" className="navbar-style">
        <fieldset></fieldset>
        </div>

        <div id="details-section" className="align-buttons">
            <div className="generic-display set-width">
                <h3 className="your">Your Details</h3> <br />

                <h1>{this.props.state}</h1>
                <input type="text" placeholder="id"  className="input-text generic-margin align-buttons center" /><br />
                <input type="text" placeholder="Last Name" className="input-text generic-margin center"/> <br />
                <input type="text" placeholder="Zip Code" className="input-text generic-margin center"/> <br />
                <input type="text" placeholder="Email ID" className="input-text generic-margin center"/> <br />
                <input type="text" placeholder="Address 1" className="input-text generic-margin center"/> <br />
                <input type="text" placeholder="Address 2" className="input-text generic-margin center"/> <br /> <br /> <br />
                <label className="align-buttons your">Is the Property od Interest same as the current address? <span style={{color:'red'}}>Y/N</span></label>
            </div>

            <div className="generic-display set-width">
            <h3 class="interest">Property of Interest Address</h3><br />
                <div className="user">
                <input type="text" placeholder="Street Address" className="input-text generic-margin align-buttons adjust" /><br />
                <input type="text" placeholder="Zip Code" className="input-text generic-margin center2"/> <br />
            </div>   
                <span></span><br />
                <span></span><br />
                
            </div>
        </div>

        <div id="confirm-buttons">
        {/* <button type="button" className="align-buttons" text="Review And Accept">Review And Accept </button> */}
        <Link to="/review">Review And Accept</Link>
        </div>
     
    </div>
);
}
}

export default Details;