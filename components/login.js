import React, { Component } from 'react';
import  '../styles/home.css';


// function home(){
//     return <h1>Hi there </h1>

// }

const Home = () =>  {
    return(
    <html>
    <head>
        <title> Stalwart Home Warranty</title>
        
    </head>
    <body>
        <div>
            <ul class="nav">
              <li> <a href="one.html" class="active"> Home </a></li>
              <li> <a href="table.html"> Pricing & Plans</a></li>
              <li> <a href="#"> About Us</a></li>
            </ul>
        </div>
            <button class="but1"> <a href="login.html" style={{'text-decoration': 'none', color:'white'}}>LOGIN</a> </button>
            
        
        <div class="design">
            <h1 class="one">Shouldn't you have the best in Home Warranty Protection?</h1>
            <h2 class="onee">Join 1.8 million Customers who already have coverage from <b> Stalwart Home Warranty </b> Today </h2>
            <button class="but2"> <a href="table.html" style={{'text-decoration': 'none', color:'teal'}}> Get Started </a> </button>
            <h3 class="three"> It only takes a free secounds</h3>  
        </div>
            <h1 class="four"> Stalwart Home Warranty Plan and Prices </h1>
            <br />
    <div class="ok">
        <div class="items">
                <div class="box">
                    <h1 class="heading" style={{'font-size': '30px'}}> <label style={{color:'teal'}}>_</label>STANDARD COVERAGE</h1>
                    <ul class="order">
                        <div class="table"  style={{'background-color':'white', color:'black'}}> Primary Gas, Oil or Electric Heater</div>
                        <div class="table1" style={{'background-color':'lavender', color:'black'}} > Air Conditioner (Two System per coverage)</div>
                        <div class="table"  style={{'background-color':'white', color:'black'}}>Ductwork</div>
                        <div class="table1" style={{'background-color':'lavender', color:'black'}}>Garbage Disposal</div>
                        <div class="table"  style={{'background-color':'white', color:'black'}}>Electrical</div>
                        <div class="table1" style={{'background-color':'lavender', color:'black'}}> Built-in Microwave</div>
                        <div class="table1" style={{'background-color':'white', color:'white', 'font-size':'2px'}}>B</div> 
                        <div class="table"  style={{'background-color':'lavender', color:'lavender', 'font-size':'2px'}}>B</div> 

                        <button class="bu"> <a href="table.html" style={{'text-decoration': 'none', color:'white', 'text-align':'center'}}>GET FREE QUOTE</a></button>
                    </ul>
                </div>
        </div>
    </div>

    <div class="okk">
        <div class="items">
            <div class="seperate">
                <div class="box">
                       <h1 class="heading"> GOLD COVERAGE</h1>
                <ul class="order">  
                    <div class="table" style={{'background-color':'white', color:'orange','margin-right': '-1'}}><label class="select">Recommended</label> </div>
                    <div class="table1" style={{'background-color':'lavender', color:'brown','margin-right': '-1'}}>All of <b>Standard Coverage Plus </b></div>
                    <div class="table" style={{'background-color':'white', color:'black','margin-right': '-1'}}>Refrigerant,Recapture,Reclaim & Disposal</div>
                    <div class="table1" style={{'background-color':'lavender', color:'black', 'margin-right': '-1'}}> Permits,Haul Away & Disposal</div>
                    <div class="table" style={{'background-color':'white', color:'black','margin-right': '-1'}}> Mismacthed System(HVAC) </div>
                    <div class="table1" style={{'background-color':'lavender', color:'lavender', 'margin-right': '-1','font-size':'10px'}}>B </div>
                    <div class="table" style={{'background-color':'white', color:'white', 'margin-right': '-1', 'font-size':'4px'}}>B </div>
                    <div class="table1" style={{'background-color':'lavender', color:'lavender', 'margin-right': '-1', 'font-size':'4px'}}>B </div>

                </ul>
                    <button class="bu1"> <a href="table.html" style={{'text-decoration': 'none', color:'white', 'text-align':'center'}}>GET FREE QUOTE</a></button>
                </div>
            </div>
        </div>
      
    <div class="okkk">
        <div class="items">
            <div class="box">
                <h1 class="heading">PLATINUM COVERAGE </h1>
            <ul class="order">
                <div class="table" style={{'background-color':'white', color:'brown', 'margin-right': '-1'}} > All of Standard & Gold Coverage Plus</div>
                <div class="table1" style={{'background-color':'lavender', color:'black', 'margin-right': '-1'}} > Increased Coverage for Plumbing items/Stoppages</div>
                <div class="table" style={{'background-color': 'white', color:'black', 'margin-right': '-1'}}> Increased Coverage for Manufacturer's Warrantly </div>
                <div class="table1" style={{'background-color': 'lavender', color:'black', 'margin-right': '-1'}}>Increased Coverage for Improper installation(HVAC System)</div>
                <div class="table" style={{'background-color':'white', color:'white','margin-right': '-1', 'font-size':'10px'}} >B</div>
                <div class="table1" style={{'background-color':'lavender', color:'lavender','margin-right': '-1', 'font-size':'4px'}} >B</div>

            </ul>
                <button class="bu2"> <a href="table.html" style={{color:'white', 'text-align':'center'}}>GET FREE QUOTE</a></button>
            </div>
       </div>
       </div>
    </div>   
    </body>
</html>
    )  
}

// class home extends Component{
//     render(){
//         return (
//         <h1>Other way around</h1>
//         );
//     }
// }

export default Home