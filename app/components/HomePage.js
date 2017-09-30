import React from 'react';
import { Link } from 'react-router-dom'
import Header from './Header'

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <h1>Test</h1>
        <p>Lorem Ipsum</p>
        <Header> </Header>
        <Link to="/form">Form</Link>
      </div>
    )
  }
}

export default HomePage;
