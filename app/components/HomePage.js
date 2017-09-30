import React from 'react';
import { Link } from 'react-router-dom'
import Header from './Header'

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Header></Header>
      <h1>HOME</h1>
      </div>
    )
  }
}

export default HomePage;
