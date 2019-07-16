import React from 'react';
import ResortData from "../util/ResortData";

export default class Form extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      value: '',
      term: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleResortData = this.handleResortData.bind(this);
  }

  // send params to API, two separate functions json or terms?
  handleResortData(data) {
    // data = this.props.value;
    let sendData = data.toJSON();
    ResortData(sendData);
    // or grab each term in inputs and send to API
  }

  handleRecieveData = () => {

  };

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return(
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <label>Test</label>
            <input type="text" value={this.state.value} onChange={this.handleChange}/>
            <span>             </span>
            <input type="submit" value="Submit"/>
          </fieldset>
        </form>
    );
  }
}