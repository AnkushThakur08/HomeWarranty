import React, { Component } from 'react';
// import { Route } from 'react-router-dom';
import  '../styles/home.css';
import Planandpricing from './plansandpricing';
import Logo from '../images/StalwartLogo.jpeg';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from   'react-router-dom';

    
 class Home extends Component{
    handleClick(){
        alert('Working');
        window.open('/plansandpricing');
      }

     render(){
         return (
            <div>
            <head>
                <title> Stalwart Home Warranty</title>
                
            </head>
            <body>
                
                <div className="start-button set-quote-box">
                    {/* <span>Get free quote</span> */}
                    <Link to='/plansandpricing' style={{color:'white', textDecoration:'none'}}>Get free quote</Link> 
                </div>
                
                <div className="design">
                    <div>
                        <div id="logo" className="generic-display section generic-margin">
                            <img src={Logo}></img>
                        </div>
                        <div id="welcometext" className="generic-display">
                            <span className="font-color">Shouldn't you have the best in Home Warranty Protection?</span><br /><br />
                            <span className="font-color">Join 1.8 million Customers who already have coverage from <b> Stalwart Home Warranty </b> Today </span>
                            <br /><br />
                        </div>
                     </div>
                    <br />
                    <div className="start-button">
                        <Link to='/plansandpricing' style={{color:'white', textDecoration: 'none'}}>Get Started</Link> 
                    </div>
                    <br /><br /> <br /><br />
                    <div>
                        <span className="font-color stal"><b>Stalwart Home Warranty Plan and Prices</b></span>
                    </div>
             
                    
                    {/* <button className="but2" onClick={this.handleClick}>  Get Started</button> */}
                    <h3 className="three"> It only takes a free secounds</h3>  
                </div>
                    <h1 className="four"> Stalwart Home Warranty Plan and Prices </h1>
    
    
    <div className="container">
        <div className="flex-box">
            <div className="flex-3-column">
                    <h1>STANDARD COVERAGE</h1>
                    <div className="whi">Primary Gas, Oil or Electric Heater</div>
                    <div className="lav">Air Conditioner (Two System per coverage)</div>
                    <div className="whi">Ductwork</div>
                    <div className="lav">Garbage Disposal</div>
                    <div className="whi">Electrical</div>
                    <div className="lav">Built-in Microwave</div>
                    <div className="whi">And Many More</div>
                    <div className="lav" style={{color: 'lavender'}}>And Many More</div>
                    <button className="bu"> <a href="table.html" style={{textDecoration: 'none', color:'white', textAlign:'center'}}>GET FREE QUOTE</a></button>
            </div>

            <div className="flex-3-column">
                <h1>GOLD COVERAGE</h1>
                <div className="whi"><label className="select">Recommended</label></div>
                <div className="lav">All of Standard & Gold Coverage Plus</div>
                <div className="whi">Refrigerant,Recapture,Reclaim & Disposal</div>
                <div className="lav">Permits,Haul Away & Disposal</div>
                <div className="whi">Mismacthed System(HVAC)</div>
                <div className="lav" style={{color: 'lavender'}}>Ankush</div>
                <div className="whi" style={{color: 'white'}}>Ankush</div>
                <div className="lav" style={{color:'lavender'}}>Ankush</div>
                <button className="bu"> <a href="table.html" style={{textDecoration: 'none', color:'white', textAlign:'center'}}>GET FREE QUOTE</a></button>
            </div>


            <div className="flex-3-column">
                <h1>PLANTINUM COVERAGE</h1>
                <div className="whi" style={{color: 'maroon'}}>All of Standard & Gold Coverage Plus</div>
                <div className="lav">Increased Coverage for Plumbing items/Stoppages</div>
                <div className="whi">Increased Coverage for Manufacturer's Warrantly</div>
                <div className="lav">Increased Coverage for Improper installation(HVAC)</div>
                <div className="whi" style={{color: 'white', fontSize: '24px'}}>Ankush</div>
                <div className="lav" style={{color: 'lavender' , fontSize: '24px'}}>Ankush</div>
                <button className="bu"> <a href="table.html" style={{textDecoration: 'none', color:'white', textAlign:'center'}}>GET FREE QUOTE</a></button>

            </div>        
        </div>
    </div>





            {/*
            <div className="ok">
                <div className="items">
                        <div className="box">
                            <h1 className="heading" style={{fontSize: '30px'}}> <label style={{color:'teal'}}>_</label>STANDARD COVERAGE</h1>
                            <ul className="order">
                                <div className="table"  style={{backgroundColor:'white', color:'black',}}>Primary Gas, Oil or Electric Heater</div>
                                <div className="table1" style={{backgroundColor:'lavender', color:'black'}} > Air Conditioner (Two System per coverage)</div>
                                <div className="table" style={{backgroundColor:'white', color:'black'}}>Ankush</div>
                                <div className="table"  style={{backgroundColor:'white', color:'black'}}>Ductwork</div>
                                <div className="table1" style={{backgroundColor:'lavender', color:'black'}}>Garbage Disposal</div>
                                <div className="table"  style={{backgroundColor:'white', color:'black'}}>Electrical</div>
                                <div className="table1" style={{backgroundColor:'lavender', color:'black'}}> Built-in Microwave</div>
                                <div className="table1" style={{backgroundColor:'white', color:'white', fontSize:'2px'}}>B</div> 
                                <div className="table"  style={{backgroundColor:'lavender', color:'lavender', fontSize:'2px'}}>B</div> 
        
                                <button className="bu"> <a href="table.html" style={{textDecoration: 'none', color:'orange', textAlign:'center'}}>GET FREE QUOTE</a></button>
                            </ul>
                        </div>
                </div>
            </div>
        
            <div className="okk">
                <div className="items">
                    <div className="seperate">
                        <div className="box">
                               <h1 className="heading"> GOLD COVERAGE</h1>
                        <ul className="order">  
                            <div className="table" style={{backgroundColor:'white', color:'orange',marginRight: '-1'}}><label className="select">Recommended</label> </div>
                            <div className="table1" style={{backgroundColor:'lavender', color:'brown',marginRight: '-1'}}>All of <b>Standard Coverage Plus </b></div>
                            <div className="table" style={{backgroundColor:'white', color:'black',marginRight: '-1'}}>Refrigerant,Recapture,Reclaim & Disposal</div>
                            <div className="table1" style={{backgroundColor:'lavender', color:'black', marginRight: '-1'}}> Permits,Haul Away & Disposal</div>
                            <div className="table" style={{backgroundColor:'white', color:'black',marginRight: '-1'}}> Mismacthed System(HVAC) </div>
                            <div className="table1" style={{backgroundColor:'lavender', color:'lavender', marginRight: '-1',fontSize:'10px'}}>B </div>
                            <div className="table" style={{backgroundColor:'white', color:'white', marginRight: '-1', fontSize:'4px'}}>B </div>
                            <div className="table1" style={{backgroundColor:'lavender', color:'lavender', marginRight: '-1', fontSize:'4px'}}>B </div>
        
                        </ul>
                            <button className="bu1"> <a href="table.html" style={{textDecoration: 'none', color:'orange', textAlign:'center'}}>GET FREE QUOTE</a></button>
                        </div>
                    </div>
                </div>
              
            <div className="okkk">
                <div className="items">
                    <div className="box">
                        <h1 className="heading">PLATINUM COVERAGE </h1>
                    <ul className="order">
                        <div className="table" style={{backgroundColor:'white', color:'brown', marginRight: '-1'}} > All of Standard & Gold Coverage Plus</div>
                        <div className="table1" style={{backgroundColor:'lavender', color:'black', marginRight: '-1'}} > Increased Coverage for Plumbing items/Stoppages</div>
                        <div className="table" style={{backgroundColor: 'white', color:'black', marginRight: '-1'}}> Increased Coverage for Manufacturer's Warrantly </div>
                        <div className="table1" style={{backgroundColor: 'lavender', color:'black', marginRight: '-1'}}>Increased Coverage for Improper installation(HVAC System)</div>
                        <div className="table" style={{backgroundColor:'white', color:'white',marginRight: '-1', fontSize:'10px'}} >B</div>
                        <div className="table1" style={{backgroundColor:'lavender', color:'lavender',marginRight: '-1', fontSize:'4px'}} >B</div>
        
                    </ul>
                        <button className="bu2"> <a href="table.html" style={{color:'orange', textAlign:'center'}}>GET FREE QUOTE</a></button>
                    </div>
               </div>
               </div>
            </div>  
            */} 
            </body>
        </div>
         );
    }
}


export default Home