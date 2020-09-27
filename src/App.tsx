import React from 'react';
import './App.css';
import Congrats from './components/Congrats/Congrats';
import GuessedWordList from './components/GuessWordList/GuessedWordList';
import Input from './components/Input/Input';

function App() {
  return (
    <div className="App">
      <Congrats isSuccess />
      <GuessedWordList guessedWords={[
        { guessedWord: 'qwerty', letterMatchCount: 3 },
        { guessedWord: 'asdfgh', letterMatchCount: 1 },
        { guessedWord: 'inquiry', letterMatchCount: 7 },
      ]} />
      <Input secretWord="imposter" />
    </div>
  );
}

export default App;
