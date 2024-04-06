import React from 'react'
import ChooseSection from './ChooseSection';
import Section from './Section';
import words from '../data';
export default function WordSet({setWords ,startGame}) {
    const [section, setSection] = React.useState(0);
    return (
        <div className='max-w-96 w-full'>
            {
                section === 0 && (
                    <ChooseSection setSection={setSection} />
                )
            }
            { section === 1 && ( <Section setWords={setWords} startGame={startGame} words={words.a1} /> )}
            { section === 2 && ( <Section setWords={setWords} startGame={startGame} words={words.a2} /> )}

            { section === 3 && ( <Section setWords={setWords} startGame={startGame} words={words.b1} /> )}
            { section === 4 && ( <Section setWords={setWords} startGame={startGame} words={words.b2} /> )}

            { section === 5 && ( <Section setWords={setWords} startGame={startGame} words={words.c1} /> )}
            { section === 6 && ( <Section setWords={setWords} startGame={startGame} words={words.c2} /> )}

            {
                section !== 0 && (
                    <button onClick={() => setSection(0)} className="m-5 text-lg mb-3 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                        Go back
                    </button>
                )
            }


        </div>
    )
}
