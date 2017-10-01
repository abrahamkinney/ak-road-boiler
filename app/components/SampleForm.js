import React from 'react';
import { Link } from 'react-router-dom'
import Header from './Header'

class SampleForm extends React.Component {
  constructor() {
    super();

    this.state = {
      first: 'First Name',
      last: 'Last Name',
      zip: '91505',
    }
  }

  handleChange = (e) => {
    console.log("you are clicking")
    let newState = {};

    newState[e.target.name] = e.target.value;

    this.setState(newState);
  };


  handleSubmit = (e) => {
    e.preventDefault();
    console.log("you clicked");
    //
    // let formData = {
    //   formSender: this.state.name,
    //   formEmail: this.state.email,
    //   formSubject: this.state.subject,
    //   formMessage: this.state.message
    // }
    //
    // if (formData.formSender.length < 1 || formData.formEmail.length < 1 || formData.formSubject.length < 1 || formData.formMessage.length < 1) {
    //   return false;
    // }
    //
    // $.ajax({
    //   url: '/some/url',
    //   dataType: 'json',
    //   type: 'POST',
    //   data: formData,
    //   success: function(data) {
    //     if (confirm('Thank you for your message. Can I erase the form?')) {
    //       document.querySelector('.form-input').val('');
    //     }
    //   },
    //   error: function(xhr, status, err) {
    //     console.error(status, err.toString());
    //     alert('There was some problem with sending your message.');
    //   }
    // });
    //
    // this.setState({
    //   firstName: '',
    //   lastName: '',
    //   email: '',
    //   subject: '',
    //   message: ''
    // });
  };

  render() {
    return (
      <div>
        <h1>FORM 1</h1>
        <p>
          <label>First Name</label><br/>
          <input name="first" required onChange={this.handleChange} value={this.state.first}/>
        </p>

        <p>
          <label>Last Name</label><br/>
          <input name="last" required onChange={this.handleChange} value={this.state.last}/>
        </p>

        <p>
          <label>Zip Code</label><br/>
          <input name="zip" required onChange={this.handleChange} value={this.state.zip}/>
        </p>

        <input type='submit' placheholder='Send' onClick={this.handleSubmit} />
      </div>
    )
  }
}


export default SampleForm;
