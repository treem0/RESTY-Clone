import React, { Component } from 'react';
import Form from '../components/form/Form';
import HistoryList from '../components/history/HistoryList';
import Response from '../components/response/Response';
import styles from './restle.css';



export default class RESTLE extends Component {
state = {
  url: '',
  method: 'GET',
  requestBody: '',
  response: [],
  historyList: [],
  username: '',
  password: '',
  token: ''
}

fetch = () => {
const { method, url, requestBody, token, username, password } = this.state;
const options = {};

if(method !== 'GET' && method !== 'DELETE') {
  options.headers = { 'Content-type': 'application/json; charset=UTF-8' };
  options.body = requestBody;
}
if(token !== ''){
  options.headers.Authorization = 'Bearer ' + token;
}
else if(username !== ''){
  options.headers.Authorization = 'Basic ' + username + ':' + password;
}

fetch(url, options)
  .then(res => res.json())
  .then(data => this.setState({ response: data }));
}

handleChange = ({ target }) => {
this.setState({ [target.name]: target.value });
}

handleSubmit = event => {
event.preventDefault();

const { method, url, requestBody, historyList } = this.state;
this.setState(() => ({ historyList: [...historyList, {
  method,
  url,
  requestBody
}] }));

this.fetch();
}


render() {
  const { historyList, url, method, requestBody, response, username, password } = this.state;

  return (
    <>
    <div className={styles.Restle}>
      <Form url={url} method={method} requestBody={requestBody} username={username} password={password} onChange={this.handleChange} onSubmit={this.handleSubmit} />
      <HistoryList historyList={historyList}/>
      <Response response={response} />
    </div>
    </>
  );
}
}
