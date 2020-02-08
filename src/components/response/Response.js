import React from 'react';
import PropTypes from 'prop-types';
import styles from './response.css';
import ReactJson from 'react-json-view';

const Response = ({ response}) => (
  <div id="json" className={styles.Response}>
    <ReactJson src={response} />
  </div>
);


Response.propTypes = {
  response: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired
};

export default Response;
