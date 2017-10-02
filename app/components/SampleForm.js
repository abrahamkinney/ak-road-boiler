import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import axios from 'axios';
import userPost from '../api/apiResources'

class SampleForm extends React.Component {
  constructor() {
    super();

    this.state = {
      first: 'First Name',
      last: 'Last Name',
      zip: 'Zip Code',
    }
  }

  componentDidMount() {
    const url = "https://reqres.in/api/users?page=2"
    console.log("yay mounted")
    axios.get(url)
    .then(function (response) {
      console.log("get " + JSON.stringify(response));
    })
    .catch(function (error) {
      console.log(data)
      console.log(error);
    });
  }

  handleChange = (e) => {
    this.testZip(this.state.zip)
    console.log("you are clicking")
    let newState = {};


    newState[e.target.name] = e.target.value;
    this.setState(newState);

  };

  testZip = (zip) => {
    const zipValidation = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
    (zipValidation.test(this.state.zip))? console.log("is valid") : console.log("not yet")
  }


  handleSubmit = (e) => {
    e.preventDefault();
    console.log("sending post");

    let formData = {
      formFirst: this.state.first,
      formLast: this.state.last,
      formZip: this.state.zip
    }

    let data = {
      "name": "morpheus",
      "job": "leader"
    }

    axios.post(userPost, data)
    .then(function (response) {
      console.log("posted");
    })
    .catch(function (error) {
      console.log(data)
      console.log(error);
    });

    this.setState({
      firstName: '',
      lastName: '',
      zip: ''
    });
  };

  render() {
    return (
      <div>
        <h1>FORM 1</h1>
        <p>
          <label>Zip Code</label><br/>
          <input name="zip" required onChange={this.handleChange} onBlur={this.testZip} defaultValue={this.state.zip}/>
        </p>
        <p>
          <label>First Name</label><br/>
          <input name="first" required onChange={this.handleChange} value={this.state.first}/>
        </p>

        <p>
          <label>Last Name</label><br/>
          <input name="last" required onChange={this.handleChange} value={this.state.last}/>
        </p>

        <input type='submit' placheholder='Send' onClick={this.handleSubmit} />
      </div>
    )
  }
}


export default SampleForm;
