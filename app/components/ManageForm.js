import React from 'react';
import { Link } from 'react-router-dom'
import Header from './Header'
import SampleForm from './SampleForm';


class ManageForm extends React.Component {
  render() {
    return (
      <div>
        <Header></Header>
        <SampleForm/>
      </div>
    )
  }
}

export default ManageForm;
