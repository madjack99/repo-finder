import React from 'react';
import { useStore } from 'effector-react';
import { $store, IStore } from './store';

const Results = () => {
  const state = useStore($store);

  const drawTable = (state: IStore[]) => {
    return state.map(({ title, body, created_at, closed_at }, index) => {
      return (
        <ul key={index}>
          <li>
            <strong>No: {index + 1}</strong>
          </li>
          <li>
            <strong>Title:</strong> {title}
          </li>
          <li>
            <strong>Body:</strong> {body}
          </li>
          <li>
            <strong>Created at:</strong> {created_at}
          </li>
          <li>
            <strong>Closed at:</strong> {closed_at}
          </li>
        </ul>
      );
    });
  };

  const renderResults = () => {
    let result;
    if (typeof state === 'string') {
      result = state;
    } else if (state.length === 0) {
      result = 'No pulls for this repo';
    } else if (Array.isArray(state)) {
      result = drawTable(state);
    }
    return result;
  };

  return <div>{renderResults()}</div>;
};

export default Results;
