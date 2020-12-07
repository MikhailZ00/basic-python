import React, { Component } from "react";
import app from "./base";
import "./App.css"

class Converter extends Component {
  state = {
    currencies: ["USD", "AUD", "SGD", "PHP", "EUR", "RUB"],
    base: "USD",
    amount: "",
    convertTo: "RUB",
    result: "",
    date: ""
  };

  handleSelect = e => {
    this.setState(
      {
        [e.target.name]: e.target.value,
        result: null
      },
      this.calculate
    );
  };

  handleInput = e => {
    this.setState(
      {
        amount: e.target.value,
        result: null,
        date: null
      },
      this.calculate
    );
  };

  calculate = () => {
    const amount = this.state.amount;
    if (amount === isNaN) {
      return;
    } else {
      fetch(`https://api.exchangeratesapi.io/latest?base=${this.state.base}`)
        .then(res => res.json())
        .then(data => {
          const date = data.date;
          const result = (data.rates[this.state.convertTo] * amount).toFixed(4);
          this.setState({
            result,
            date
          });
        });
    }
  };

  handleSwap = e => {
    const base = this.state.base;
    const convertTo = this.state.convertTo;
    e.preventDefault();
    this.setState(
      {
        convertTo: base,
        base: convertTo,
        result: null
      },
      this.calculate
    );
  };
  render() {
    const { currencies, base, amount, convertTo, result, date } = this.state;
    return (
      <div>
    <div class="SignOutHome"> 
              <button className="btn btn-outline-light" onClick={() => app.auth().signOut()}>Sign out</button>
            </div>
      <div className="container my-5"> 
        <div className="row">
          <div className="col-lg-5 mx-auto">
            <div className="card card-body">
              <h4 className="pl-3">
                {amount} {base} =
              
                {amount === " "
                  ? "0"
                  : result === null
                  ? "Calculating..."
                  : result}{" "}
                {convertTo}
              </h4>
              <p className="pl-3">{amount === "" ? "" : date === null ? "" : date}</p>
              <div className="row">
                <div className="col-lg-12">
                  <form className="form-inline mb-4">
                    <input
                      type="number"
                      value={amount}
                      onChange={this.handleInput}
                      className="form-control form-control-lg mx-3"
                    />
                    <select
                      name="base"
                      value={base}
                      onChange={this.handleSelect}
                      className="form-control form-control-lg"
                    >
                      {currencies.map(currency => (
                        <option key={currency} value={currency}>
                          {currency}
                        </option>
                      ))}
                    </select>
                  </form>

                  <form className="form-inline mb-4">
                    <input
                      disabled={true}
                      value={
                        amount === ""
                          ? "0"
                          : result === null
                          ? "Calculating..."
                          : result
                      }
                      className="form-control form-control-lg mx-3"
                    />
                    <select
                      name="convertTo"
                      value={convertTo}
                      onChange={this.handleSelect}
                      className="form-control form-control-lg"
                    >
                      {currencies.map(currency => (
                        <option key={currency} value={currency}>
                          {currency}
                        </option>
                      ))}
                    </select>
                  </form>
                </div>

                
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Converter;