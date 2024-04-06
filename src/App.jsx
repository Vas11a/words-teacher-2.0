import React from 'react'
import Rules from './components/Rules';
import Game from './components/Game';
import WordSet from './components/WordSet';
import { convertor3000 } from './helper';


function App() {
  const [isRulesOpen, setIsRulesOpen] = React.useState(false);
  const [isGameStarted, setIsGameStarted] = React.useState(false);
  const [isWordSetOpen, setIsWordSetOpen] = React.useState(false);
  const [words, setWords] = React.useState(``);
  const setRules = () => {
    setIsWordSetOpen(false);
    setIsRulesOpen(!isRulesOpen);
  }

  const setWordSet = () => {
    setIsRulesOpen(false);
    setIsWordSetOpen(!isWordSetOpen);
  }

  const startGame = () => {
    setIsRulesOpen(false);
    setIsWordSetOpen(false);
    setIsGameStarted(!isGameStarted);
  }

  return (
    <div className="p-3 w-full flex flex-col items-center">
      {
        !isGameStarted && (<>
          <div className=" font-bold text-4xl text-center">Words teacher 2.0</div>
          <div className=' w-screen p-5 max-w-96'>
            <textarea value={words} onChange={(e) => setWords(e.target.value)} id="message" rows="4" className=" text-lg block p-2.5 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
            <div className='flex justify-between gap-2 pt-3'>
              <button onClick={setRules} className="bg-blue-500 flex-1 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded text-xl">Rules</button>
              <button onClick={setWordSet} className="bg-orange-500 flex-1 hover:bg-orange-400 text-white font-bold py-2 px-4 border-b-4 border-orange-700 hover:orange-green-500 rounded text-xl">Words</button>
              <button onClick={startGame} className="bg-green-500 flex-1 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded text-xl">Play</button>
            </div>
          </div>
        </>
        )
      }

      {isRulesOpen && <Rules />}
      {
        isGameStarted && <Game notPrepWords={words} words={convertor3000(words)} setIsGameStarted={setIsGameStarted} />
      }

      {isWordSetOpen && <WordSet setWords={setWords} startGame={startGame} />}
    </div>
  );
}

export default App;
