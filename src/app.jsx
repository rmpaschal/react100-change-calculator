
/*REACT 100 – Introduction to React  Project: React Change Calculator
IN PROGRESS
PROJECT

React Change Calculator

Objectives

Convert visual wireframe to JSX markup.
Setup state management.
Setup event binding for the button elements.
Update view state based on calculation results.
react change calculator mock up: a section to enter information (How much is due? and How much was received?, along with a calculate button), and a section to display the results with a plain text result and cards displaying the quantities of twenties, tens, fives, ones, quarters, dimes, nickels, and pennies
1. Setup

1.

Open Terminal if you are on a Mac, Git Bash if you are on Windows.

2.

Clone the starter files from https://github.com/SanDiegoCodeSchool/react100-change-calculator and open the project in VS Code

3.

Run npm install to install all the dependencies.

4.

The tests will confirm if you have completed the requirements. Type npm test and hit enter to run the tests. Then, write your code using the steps below. When you have written all the code to complete the project (based on the exit criteria) and the tests are passing, submit the assignment.

REMINDER:

Any time you make a change to your code, you will have to rebuild it in order to see the change in the browser.

2. Convert Visual Wireframe to JSX Markup

For this project, we must first tackle the visual aspect of the application. To start, add a <link> element in the <head> section to include Bootstrap styling in your project.

Once you have included Bootstrap's CSS styling, add the following elements to the page ensuring the user interface matches the screenshot at the top of this document.

Header
Tagline
Bootstrap Row
Bootstrap Column (4 columns wide)
Bootstrap Panel
How much is due?
How much was received?
Calculate button
Bootstrap Column (8 columns wide)
Outcome alerts
Success: Total change due
Danger: Additional money owed
Grid for Denominations
Twenties
Tens
Fives
Ones
Quarters
Dimes
Nickels
Pennie*/
import React, { Component } from 'react';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amountDue : 0,
      amountReceived : 0,
      totalChangeDue : 0,
    };
    this.handleAmountDue=this.handleAmountDue.bind(this);
    this.handleAmountReceived=this.handleAmountReceived.bind(this);
    this.totalChangeDue=this.totalChangeDue.bind(this);

  }
  handleAmountDue(event) {
    this.setState({ amountDue: event.target.value });
  }

  handleAmountReceived(event) {
    this.setState({ amountReceived: event.target.value })
  }
      totalChangeDue(){
      const calculateChange = (this.state.amountReceived - this.state.amountDue).toFixed(2);
      this.setState({
        totalChangeDue : calculateChange,
        twenties: Number.parseFloat(Math.floor(calculateChange / 20).toFixed(2)),
        tens: Number.parseFloat(Math.floor((calculateChange / 10) % 2).toFixed(2)),
        fives: Number.parseFloat(Math.floor((calculateChange / 5) % 2).toFixed(2)),
        ones: Number.parseFloat(Math.floor(calculateChange % 5).toFixed(2)),
        quarters: Number.parseFloat(Math.floor(((calculateChange * 100) % 100) / 25).toFixed(2)),
        dimes: Number.parseFloat(Math.floor((((calculateChange * 100) % 100) % 25) / 10).toFixed(2)),
        nickels: Number.parseFloat(Math.floor(((((calculateChange *100) % 100) % 25) % 10) / 5).toFixed(2)),
        pennies: Number.parseFloat(Math.floor((calculateChange * 100) % 5 + 0.01).toFixed(2))
      });
    };
    render() {
    return (
  <div>
    <div className="form-box">
        <h1 className="text-justify-left">$ ¢hange ¢alculator $</h1> 

        <div className="row">
          <div className="col-sm-4">
              <div className="card card-default">
                <div className="card card-title">Enter Information Here</div>
                  <div className="card-body">
                      <p>How much is due?</p>
                        <input
                                type="number"
                                name="amountDue"
                                className="form-control"
                                placeholder="Enter Amount Due"
                                value={this.state.amountDue}
                                onChange={this.handleAmountDue} />
                            <p>How much was received?</p>
                    <input
                            type="number"
                            name="amountReceived"
                            className="form-control"
                            placeholder="Enter Amount Received"
                            value={this.state.amountReceived}
                            onChange={this.handleAmountReceived} />

                    <div className="card-footer">
                        <button
                          className="btn btn-primary btn-block"
                          type="button"
                          name="submit"
                          onClick={this.totalChangeDue}>
                          Calculate Change </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
       
              <div className="col-med-8 card  card-body">
                <div className="alert alert-success text-align center"
                  role="alert"
                  type="output"
                  id="output">
                  The total change due is ${this.state.totalChangeDue}
                </div>
                </div>
                <div className="card-lg">
                <div className="row">
                <div className="col-sm-3" >
                  <div className="well well-sm- text-center">
                    <p className="lead">{this.state.twenties}</p> $20 bills
                  </div>
                </div>
                
                <div className="col-sm-3" >
                    <div className="well well-sm- text-center">
                      <p className="lead">{this.state.tens}</p> $10 bills
                    </div>
                </div>
                <div className="col-sm-3" >
                    <div className="well well-sm- text-center">
                      <p className="lead">{this.state.fives}</p>$5 bills
                    </div>
                </div>
                <div className="col-sm-3" >
                    <div className="well well-sm- text-center">
                      <p className="lead">{this.state.ones}</p> $1 bills
                    </div>
                </div>
                </div>
                
                <div className="row">
                <div className="col-sm-3" >
                  <div className="well well-sm- text-center">
                    <p className="lead">{this.state.quarters}</p> quarters
                  </div>
                </div>
                <div className="col-sm-3" >
                  <div className="well well-sm- text-center">
                    <p className="lead">{this.state.dimes}</p> dimes
                  </div>
                </div>
                <div className="col-sm-3" >
                  <div className="well well-sm- text-center">
                    <p className="lead">{this.state.nickels}</p> nickels
                  </div>
                </div>
                <div className="col-sm-3" >
                  <div className="well well-sm- text-center">
                    <p className="lead">{this.state.pennies}</p> pennies
                  </div>
                </div>
                </div>
                </div>
            </div>
)};
}
