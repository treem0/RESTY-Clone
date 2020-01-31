import React, { Component } from 'react';
import Form from '../components/form/Form';
import History from '../components/history/History';
import Response from '../components/response/Response';

export default class RESTLE extends Component {
state = {
  url: '',
  method: '',
  response: [],
  history: []
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
    <>
      <Form url={this.state.url} onSubmit={this.handleSubmit} onChange={this.handleChange} />
      <History />
      <Response />
    </>
  );
}
}
