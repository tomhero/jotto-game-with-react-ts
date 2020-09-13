import React from 'react'

export type CongratsProps = {
  isSuccess: boolean;
};

const Congrats: React.FC<CongratsProps> = (props) => {
  return (
    <div data-test="component-congrats">
      {
        props.isSuccess ? (
          <span data-test="comgrate-message">
            congratulations!! You guessed the word
          </span>
        )
        : null
      }
    </div>
  )
}

export default Congrats;
