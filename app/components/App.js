import React, {PropTypes} from 'react';
import { Link } from 'react-router-dom'
import Header from './Header'

class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default App;
