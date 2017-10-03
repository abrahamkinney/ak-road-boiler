import React from 'react';
import { Link } from 'react-router-dom'
import Header from './Header'


class ContainerPage extends React.Component {
  render() {
    return (
      <div>
        <Header></Header>
        <h1>new page here</h1>
      </div>
    )
  }
}

export default ContainerPage;
