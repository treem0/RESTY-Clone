import React from 'react';
import PropTypes from 'prop-types';

const HistoryItem = ({ method, url, requestBody }) => (
  <div>
    <p>{method}</p>
    <p>{headers}</p>
    <p>{url}</p>
    <p>{requestBody}</p>
  </div> 
);

HistoryItem.propTypes = {
  method: PropTypes.string.isRequired,
  headers: PropTypes.array,
  url: PropTypes.string.isRequired,
  requestBody: PropTypes.string
};

export default HistoryItem;
