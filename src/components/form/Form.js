import React from 'react';
import PropTypes from 'prop-types';
import styles from './form.css'

const Form = ({ url, method, requestBody, username, password, token, onChange, onSubmit }) => (
  <form className={styles.Form} onSubmit={onSubmit}>
    <section>
      <input name="url" type="text" value={url} placeholder="URL" onChange={onChange}></input>
      <div id='methods'>
        <input className='method-selector' id={'GET'}type='radio' name='method' value='GET' checked={method === 'GET'} onChange={onChange}></input>
        <label htmlFor='GET'>GET</label>
        <input className='method-selector' id='POST' type='radio' name='method' value='POST' checked={method === 'POST'} onChange={onChange}></input>
        <label htmlFor='POST'>POST</label>
        <input className='method-selector' id='PUT' type='radio' name='method' value='PUT' checked={method === 'PUT'} onChange={onChange}></input>
        <label htmlFor='PUT'>PUT</label>
        <input className='method-selector' id='PATCH' type='radio' name='method' value='PATCH' checked={method === 'PATCH'} onChange={onChange}></input>
        <label htmlFor='PATCH'>PATCH</label>
        <input className='method-selector' id='DELETE' type='radio' name='method' value='DELETE' checked={method === 'DELETE'} onChange={onChange}></input>
        <label htmlFor='DELETE'>DELETE</label>
        <button className='form-submit' type='submit'>Go!</button>
      </div>
    </section>
    <section>
      <div id="body">
      <textarea disabled={method === 'GET' || method === 'DELETE'} className={styles.reqbody} placeholder='Raw JSON Body' name='requestBody' value={requestBody} onChange={onChange}></textarea>
      </div>
      <div id="headers">
        <button>Headers</button>
        <div>
          <h2>Basic Authorization</h2>
          <input name='username' placeholder="Username" value={username} onChange={onChange}></input>
          <input name='password' type="password" placeholder="Password" value={password} onChange={onChange}></input>
        </div>
        <div>
          <h2>Bearer Token</h2>
          <input type="text" className="wide" name="authtoken" placeholder="Bearer Token"></input>
        </div>
      </div>
    </section>
  </form>

);

Form.propTypes = {
  url: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  requestBody: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default Form;
