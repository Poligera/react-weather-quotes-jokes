import React from 'react';
import { useHistory } from 'react-router-dom';

const BackButton = () => {
  const history = useHistory();

  return (
    <button id="back-button" onClick={history.goBack}>
      GO BACK
    </button>
  );
};

export default BackButton;
