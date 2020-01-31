import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ url, authusername, authpassword, onChange, onSubmit }) => (
  <form>
    <section>
      <input name="url" type="text" value={url} placeholder="URL" onChange={onChange}></input>
      <div id='methods'>
        <label>
          <input type="radio" name="method" value="get" onChange={onChange}></input>
          <span>GET</span>
        </label>
        <label>
          <input type="radio" name="method" value="post" onChange={onChange}></input>
          <span>POST</span>
        </label>
        <label>
          <input type="radio" name="method" value="put" onChange={onChange}></input>
          <span>PUT</span>
        </label>
        <label>
          <input type="radio" name="method" value="patch" onChange={onChange}></input>
          <span>PATCH</span>
        </label>
        <label>
          <input type="radio" name="method" value="delete" onChange={onChange}></input>
          <span>DELETE</span>
        </label>
        <label>
          <button type="submit" onChange={onSubmit}>Go!</button>
        </label>
      </div>
    </section>
    <section>
      <div id="body">
        <textarea placeholder="Raw JSON Body" name="requestBody"></textarea>
      </div>
      <div id="headers">
        <button>Headers</button>
        <div className="visible-true">
          <h2>Basic Authorization</h2>
          <input name={authusername} placeholder="Username" value={authusername}></input>
          <input name={authpassword} type="authpassword" placeholder="Password" value={authpassword}></input>
        </div>
        <div className="visible-true">
          <h2>Bearer Token</h2>
          <input type="text" className="wide" name="authtoken" placeholder="Bearer Token"></input>
        </div>
      </div>
    </section>
  </form>

);

Form.propTypes = {
  url: PropTypes.string.isRequired,
  authusername: PropTypes.string.isRequired,
  authpassword: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default Form;
