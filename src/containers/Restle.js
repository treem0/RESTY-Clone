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
    response: [...state.response, {
      response: state.response
    }]
  }));
}

fetch = ({ url }) => {
  fetch({ url })
    .then(res => res.json())
    .then(response => response
      
    );
}

render() {
  return (
    <>
      <Form url={this.state.url} onSubmit={this.handleSubmit} onChange={this.handleChange} authusername={this.state.authusername} authpassword={this.state.authpassword}/>
      <History />
      <Response />
    </>
  );
}
}
