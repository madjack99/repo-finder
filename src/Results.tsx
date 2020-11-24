import React from 'react';
import { useStore } from 'effector-react';
import { $store } from './store';

const Results = () => {
  const state = useStore($store);

  const renderResults = () => {
    let result;
    if (typeof state === 'string') {
      result = state;
    } else if (state.length === 0) {
      result = 'No pulls for this repo';
    } else {
      result = 'table';
    }
    return result;
  };

  return <div>{renderResults()}</div>;
};

export default Results;
