import React, { Component } from 'react'
import Social from './social/Social';
import Religious from './religiosa/Religious';

export default class Program extends Component {
  render() {
    return (
      <div>
        <Religious></Religious>
        <Social></Social>
      </div>
    )
  }
}
