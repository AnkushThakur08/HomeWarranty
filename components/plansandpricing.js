import React, { Component } from 'react';
import  '../styles/home.css';
import axios from 'axios';
import Home from './home'
import Details from './details'
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from   'react-router-dom';


class Planandpricing extends Component {
    
constructor(props){
    super(props);
    this.state = {
        plans: [],
        selectedPlan:'',
        additional_coverage:''
    };
    //this.selectedplan = {selectedPlan:''};
}

componentDidMount(){
    axios.get('http://localhost:1811/api/genericuser')
    .then(response => this.setState({plans: response.data}))
    .catch(error => console.log(error))
}

onPlanChanged =e => {
    this.setState({selectedPlan: e.currentTarget.name});
}

onAddCoverage = (e) => {
    this.setState({additional_coverage: e.currentTarget.name})
}

checkIfPlanSelected = e => {
    if(this.state.selectedPlan === ''){
        alert('Select a Plan.');
        e.preventDefault();
    }
}

    render(){
        const {plans} = this.state;
        const {selectedPlan} = this.state;
        const {additional_coverage} = this.state;
    return(
    <div>
            <div className="icon"> <i className="fa fa-cart-plus fa-4x" aria-hidden="true"></i> 
            </div>
            
            <div className="same">
                <h1> Stalwart Home Warrantly </h1>
                <h2> Pricing & Plans</h2> 
            </div>
            <div>
                <table>
                    <tr>
                        <td> 
                            <div width="60%" style={{texAlign: 'left',display: 'inline-block'}}>
                                <table width="100%">
                                    <tr>
                                        <th className="choose" > WHICH PLAN IS RIGHT FOR YOU?</th>
                                        <th className="package" width="13%"> STANDARD COVERAGE</th>
                                        <th className="package" width="13%"> GOLD COVERAGE</th>
                                        <th className="package" width="13%"> PLATINUM COVERAGE</th>          
                                    </tr>
                                    <tr>
                                        <td className="content">Single Family Home Condo/Townhome/Mobile home</td>
                                        <td className="package" style={{'background-color': 'white',color:'black'}}> <i></i> <b> $375<br /> SCF $75</b></td>
                                        <td className="package" style={{'background-color': 'white', color:'black'}}> <i></i> <b> $475<br /> SCF $70</b></td>
                                        <td className="package" style={{'background-color': 'white', color:'black;'}}> <i></i> <b> $650<br /> SCF $65</b></td>
                                    </tr>

                                        <tr>
                                            <td className="select"  style={{'background-color':'lightpink'}}>Select Your Plan</td>
                                            <td className="content" style={{'background-color':'lightpink'}}> <input type="radio" onChange={this.onPlanChanged} checked={this.state.selectedPlan==='standard'} name="standard" className="big"/></td>
                                            <td className="content" style={{'background-color':'lightpink'}}> <input type="radio" onChange={this.onPlanChanged} checked={this.state.selectedPlan==='gold'} name="gold" className="big"/></td>
                                            <td className="content" style={{'background-color':'lightpink'}}> <input type="radio" onChange={this.onPlanChanged} checked={this.state.selectedPlan==='platinum'} name="platinum" className="big"/></td>
                                        </tr>

                                        <tr>
                                            <td className="package" style={{'background-color': 'white', color:'black;'}}><b>COVERAGE</b></td>
                                            <td colspan="3" style={{'background-color': 'white', color:'black;'}} ></td>
                                        </tr>
                                    List of plans
                                    <tr>
                                            <td className="content2" width="40%">Primary Gas, Oil or Electric Heater</td>
                                            <td className="content2"> <i className="fa fa-check" aria-hidden="true" style={{'color':'black'}}></i> </td>
                                            <td className="content2"> <i className="fa fa-check" aria-hidden="true" style={{'color':'black'}}></i> </td>
                                            <td className="content2"> <i className="fa fa-check" aria-hidden="true" style={{'color':'black'}}></i> </td>
                                    </tr>

                                    <tr>
                                            <td className="content">Air Conditioner(Two Systems per coverage)</td>
                                            <td className="content"> <i className="fa fa-check" aria-hidden="true" style={{'color':'black'}}></i> </td>
                                            <td className="content"> <i className="fa fa-check" aria-hidden="true" style={{'color':'black'}}></i> </td>
                                            <td className="content"> <i className="fa fa-check" aria-hidden="true" style={{'color':'black'}}></i> </td>
            
                                    </tr>

                                    <tr>
                                            <td className="content2"> Duct Work</td>
                                            <td className="content2"> <i className="fa fa-check" aria-hidden="true" style={{'color':'black'}}></i> </td>
                                            <td className="content2"> <i className="fa fa-check" aria-hidden="true" style={{'color':'black'}}></i> </td>
                                            <td className="content2"> <i className="fa fa-check" aria-hidden="true" style={{'color':'black'}}></i> </td>
                                    </tr>

                                    <tr> 
                                            <td className="content"> Limited Pest Control</td>
                                            <td className="content"> <i className="fa fa-check" aria-hidden="true" style={{'color':'black'}}></i> </td>
                                            <td className="content"> <i className="fa fa-check" aria-hidden="true" style={{'color':'black'}}></i> </td>
                                            <td className="content"> <i className="fa fa-check" aria-hidden="true" style={{'color':'black'}}></i> </td>
                                    </tr>


                                    <tr> 
                                            <td className="content2"> Drain Line Stoppages</td>
                                            <td className="content2"> <i className="fa fa-check" aria-hidden="true" style={{'color':'black'}}></i> </td>
                                            <td className="content2"> <i className="fa fa-check" aria-hidden="true" style={{'color':'black'}}></i> </td>
                                            <td className="content2"> <i className="fa fa-check" aria-hidden="true" style={{'color':'black'}}></i>  </td>
                                    </tr>

                                    <tr>
                                            <td className="content">Plumbing Pipe Leaks (including Polybutylene)</td>
                                            <td className="content"> <i className="fa fa-check" aria-hidden="true" style={{'color':'black'}}></i> </td>
                                            <td className="content"> <i className="fa fa-check" aria-hidden="true" style={{'color':'black'}}></i> </td>
                                            <td className="content"> <i className="fa fa-check" aria-hidden="true" style={{'color':'black'}}></i> </td>
                                    </tr>

                                    <tr>
                                            <td className="content2">Toilets</td>
                                            <td className="content2"> <i className="fa fa-check" aria-hidden="true" style={{'color':'black'}}></i> </td>
                                            <td className="content2"> <i className="fa fa-check" aria-hidden="true" style={{'color':'black'}}></i> </td>
                                            <td className="content2"> <i className="fa fa-check" aria-hidden="true" style={{'color':'black'}}></i> </td>
                                    </tr>

                                    <tr>
                                            <td className="content">Water Heater(50 gallon) or tankless(Two units per coverage)</td>
                                            <td className="content"> <i className="fa fa-check" aria-hidden="true" style={{'color':'black'}}></i> </td>
                                            <td className="content"> <i className="fa fa-check" aria-hidden="true" style={{'color':'black'}}></i> </td>
                                            <td className="content"> <i className="fa fa-check" aria-hidden="true" style={{'color':'black'}}></i> </td>
                                    </tr>

                                    <tr>
                                            <td className="content2">Built-in Jetted Bathtub Motor&Pump</td>
                                            <td className="content2"> <i className="fa fa-check" aria-hidden="true" style={{'color':'black'}}></i> </td>
                                            <td className="content2"> <i className="fa fa-check" aria-hidden="true" style={{'color':'black'}}></i> </td>
                                            <td className="content2"> <i className="fa fa-check" aria-hidden="true" style={{'color':'black'}}></i> </td>
                                    </tr>

                                    <tr>
                                            <td className="content">Recirculating Pump</td>
                                            <td className="content"> <i className="fa fa-check" aria-hidden="true" style={{'color':'black'}}></i> </td>
                                            <td className="content"> <i className="fa fa-check" aria-hidden="true" style={{'color':'black'}}></i> </td>
                                            <td className="content"> <i className="fa fa-check" aria-hidden="true" style={{'color':'black'}}></i> </td>
                                    </tr>

                                    <tr>
                                            <td className="content2">Instant Hot/Cold Water Dispenser</td>
                                            <td className="content2"> <i className="fa fa-check" aria-hidden="true" style={{'color':'black'}}></i> </td>
                                            <td className="content2"> <i className="fa fa-check" aria-hidden="true" style={{'color':'black'}}></i> </td>
                                            <td className="content2"> <i className="fa fa-check" aria-hidden="true" style={{'color': 'black'}}></i> </td>
                                    </tr>

                                    <tr>
                                            <td className="content">Garbage Disposal</td>
                                            <td className="content"> <i className="fa fa-check" aria-hidden="true" style={{'color':'black'}}></i> </td>
                                            <td className="content"> <i className="fa fa-check" aria-hidden="true" style={{'color':'black'}}></i> </td>
                                            <td className="content"> <i className="fa fa-check" aria-hidden="true" style={{'color':'black'}}></i> </td>
                                    </tr>

                                    <tr>
                                            <td className="content2">Water Pressure Regulator</td>
                                            <td className="content2"> <i className="fa fa-check" aria-hidden="true" style={{'color':'black'}}></i> </td>
                                            <td className="content2"> <i className="fa fa-check" aria-hidden="true" style={{'color':'black'}}></i> </td>
                                            <td className="content2"> <i className="fa fa-check" aria-hidden="true" style={{'color':'black'}}></i> </td>
                                    </tr>           

                                    <tr>
                                            <td className="content">Sump Pump</td>
                                            <td className="content"> <i className="fa fa-check" aria-hidden="true" style={{'color':'black'}}></i> </td>
                                            <td className="content"> <i className="fa fa-check" aria-hidden="true" style={{'color':'black'}}></i> </td>
                                            <td className="content"> <i className="fa fa-check" aria-hidden="true" style={{'color':'black'}}></i> </td>
                                    </tr>

                                    <tr>
                                            <td className="content2">Electrical</td>
                                            <td className="content2"> <i className="fa fa-check" aria-hidden="true" style={{'color':'black'}}></i> </td>
                                            <td className="content2"> <i className="fa fa-check" aria-hidden="true" style={{'color':'black'}}></i> </td>
                                            <td className="content2"> <i className="fa fa-check" aria-hidden="true" style={{'color':'black'}}></i> </td>
                                    </tr>

                                    <tr>
                                            <td className="content">Exhaust,Attic,Ceiling,Whole House Fans</td>
                                            <td className="content"> <i className="fa fa-check" aria-hidden="true" style={{'color':'black'}}></i> </td>
                                            <td className="content"> <i className="fa fa-check" aria-hidden="true" style={{'color':'black'}}></i> </td>
                                            <td className="content"> <i className="fa fa-check" aria-hidden="true" style={{'color':'black'}}></i></td>
                                    </tr>






                                    {
                                            plans.length>0? (plans.map(plan => <tr key={plan.ID}><td className="content2" width="40%">{plan.Name}</td>
                                            <td className="content2"> <i aria-hidden="true" style={{color:'black'}}>&#10004;</i> </td>
                                            <td className="content2"> <i aria-hidden="true" style={{color:'black'}}>&#10004;</i> </td>
                                            <td className="content2"> <i aria-hidden="true" style={{color:'black'}}>&#10004;</i> </td></tr>)):null    
                                    }
                                </table>
                            </div>     
                        </td>
                        <td> 
                            <div width="40%" className="coverage2" style={{textAlign:'center', display:'inline-block',marginTop:'-14em'}}>
                                <table>
                                    <tr>
                                        <td> 
                                            <h2 className="add"> Additional Coverage</h2>
                                            <div>
                                                <div className="generic-display div-background">
                                                    <div className="align-coverage"><span>Electronics Plan by Assurian</span></div>
                                                    <div className="generic-display" ><button className="add-button" name="assurian" onClick={this.onAddCoverage}>Add</button></div>
                                                </div>
                                                &nbsp;&nbsp;
                                                <div className="generic-display div-background">
                                                    <div className="align-coverage"><span>Guest Unit</span></div>
                                                    <div className="generic-display"><button className="add-button" name="guest"  onClick={this.onAddCoverage}>Add</button></div>
                                                </div>
                                            </div> 
                                            <br/><br/>
                                            <div >
                                                <div className="generic-display div-background">
                                                    <div className="align-coverage"><span>Pool and inground spas</span></div>
                                                    <div className="generic-display"><button className="add-button" name="poolsandspas"  onClick={this.onAddCoverage}>Add</button></div>
                                                </div>&nbsp;&nbsp;
                                                <div className="generic-display div-background">
                                                    
                                                    <div className="align-coverage"><span>Septic Pump</span></div>
                                                    <div className="generic-display"><button className="add-button" name="septicpumps">Add</button></div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </table> 
                                <div className="align-buttons">
                                    {/* <button className="Submit"> <a href="page3.html" style={{textDecoration: 'none',color:'white'}} />Go Back </button> */}
                                    <Link to='/home' className="menu">Go Back</Link>
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    {/* <button className="Submit2"> <a href="one.html" style={{textDecoration: 'none',color:'white'}} />Next</button> */}
                                    <Link to='/details' className="menu" onClick={this.checkIfPlanSelected}>Next</Link>
                                </div>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
     
    </div>
);
}
}

export default Planandpricing;