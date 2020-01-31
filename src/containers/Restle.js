import React, { Component } from 'react';
import Form from '../components/form/Form';
import HistoryList from '../components/history/HistoryList';
import Response from '../components/response/Response';


export default class RESTLE extends Component {
state = {
  url: '',
  method: '',
  headers: [{
    'Content-Type': 'application/json'
  }],
  requestBody: '',
  response: [],
  historyList: [],
  username: '',
  password: '',
}

handleChange = ({ target }) => {
  this.setState({ [target.name]: target.value });
}

handleSubmit = event => {
  event.preventDefault();

  const { method, headers, url, requestBody, historyList, username, password } = this.state;
  this.setState(() => ({ historyList: [...historyList, {
    method,
    headers,
    url,
    requestBody,
    username,
    password
  }]
  }));
  
  fetch(this.state.url)
    .then(res => res.json())
    .then(data => {
      this.setState({ response: data.results });
    });
};



render() {
  const { historyList, url, method, requestBody, response, username, password } = this.state;

  return (
    <>
      <Form url={url} onSubmit={this.handleSubmit} onChange={this.handleChange} username={username} password={password} method={method} requestBody={requestBody} />
      <HistoryList historyList={historyList}/>
      <Response response={response} />
    </>
  );
}
}
