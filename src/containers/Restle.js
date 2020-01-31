import React, { Component } from 'react';
import Form from '../components/form/Form';


export default class RESTLE extends Component {
state = {
  url: '',
  method: '',
  response: []
}

handleChange = ({ target }) => {
  this.setState({ [target.name]: target.value });
}

handleSubmit = event => {
  event.preventDefault();

  this.setState(state => ({
      
  }));
}

render() {
  return (
    <Form />
  );
}
}
