import React, {Component} from "react";
import "./App.css";
import { withRouter } from "react-router";
import {
    Link
  } from "react-router-dom";


class Welcome extends Component
{
    componentDidMount(){
        fetch('https://api.exchangeratesapi.io/latest?base=RUB')
        .then(function (resp1) { return resp1.json() })
        .then( (blank)=> {
            console.log(blank.rates);
            this.setState({curses:blank.rates})
        })
    }
    
    render(){
        const curses = this.state.curses;
        return(     
            <div> 
                  <div class="SignOutWelcome convErter">
                      <div class="converterWord">Converter</div>
                      <div>
                 <Link to="/login" className="btn btn-outline-light" role="button" aria-pressed="true">Log In</Link> 
                 <Link to="/signup" className="btn btn-outline-light" role="button" aria-pressed="true">Sign Up</Link>
                </div> </div>
                
                  <div className="cursesBlock container me-5">
                    <div className="col-lg-4 mx-auto card card-body marginTop">
                    <h2 className="pl-2">Currency rate RUB:</h2>
                      <div className="pl-2 textRub">
                        1 EUR = {(1 / curses.EUR).toFixed(4)} RUB
                       </div> 
                       <div className="pl-2 textRub">
                       1 USD = {(1 / curses.USD).toFixed(4)} RUB
                       </div> 
                       <div className="pl-2 textRub">
                       1 GBP = {(1 / curses.GBP).toFixed(4)} RUB
                       </div> 
                       <div className="pl-2 textRub">
                       1 CNY = {(1 / curses.CNY).toFixed(4)} RUB
                       </div> 
                       <div className="pl-2 textRub">
                       1 JPY = {(1 / curses.JPY).toFixed(6)} RUB
                       </div>
                   </div> 
                </div>
            </div>
        );
    }
    state = {
        curses: 0
    }
}
export default withRouter(Welcome);