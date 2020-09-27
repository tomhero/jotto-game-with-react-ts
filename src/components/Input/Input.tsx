import React, { useState } from 'react'

export type InputProps = {
  secretWord: string;
};

const Input: React.FC<InputProps> = (props) => {
  // NOTE : You need to use React.useState to mock useState hook function
  const [currectGuess, setCurrectGuess] = useState('');
  return (
    <div data-test="component-input">
      <form className="form-inline">
        <input
          data-test="input-box"
          type="text"
          className="mb-2 mx-sm-3"
          value={currectGuess}
          onChange={(event) => setCurrectGuess(event.target.value)}
        />
        <button
          data-test="submit-button"
          onClick={(ev) => ev.preventDefault()}
        >Guest</button>
      </form>
    </div>
  );
}

export default Input
