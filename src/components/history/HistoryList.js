import React from 'react';
import PropTypes from 'prop-types';
import HistoryItem from './HistoryItem';

const HistoryList = ({ historyList }) => {
  const historyItems = historyList.map(item => {
    <li>
      <HistoryItem {...item} />
    </li>;
  });

  return (
    <aside>
      <h1>History</h1>
      <ul>
        {historyItems}
      </ul>
    </aside>
  );
};

HistoryList.propTypes = {
  historyList: PropTypes.arrayOf(PropTypes.shape({
    method: PropTypes.string.isRequired,
    headers: PropTypes.string,
    url: PropTypes.string.isRequired,
    requestBody: PropTypes.string
  }))
};

export default HistoryList;
