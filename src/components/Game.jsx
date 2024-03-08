import React from 'react'
import { convertor3000 } from '../helper'


export default function Game({ notPrepWords, words, setIsGameStarted }) {
    const [readyArr, setReadyArr] = React.useState([])
    const [currentWord, setCurrentWord] = React.useState(['Hello', 'привет'])
    const [isOpenCard, setIsOpenCard] = React.useState(false)
    const [count, setCount] = React.useState(0)
    const [isGameFinished, setIsGameFinished] = React.useState(false)


    React.useEffect(() => {
        setReadyArr(words)
        console.log(words);
        setCurrentWord(JSON.parse(JSON.stringify(words[0])))
    }, [])
    const back = () => {
        setCurrentWord([[], []])
        setReadyArr([])
        setIsGameStarted(false)
        setIsGameFinished(false)
        setCount(0)
    }

    const know = () => {
        if (isGameFinished) return;
        setCount((prev) => prev + 1)
        let resArr = readyArr.filter(e => {
            return !(JSON.stringify(e) === JSON.stringify(currentWord) ||
                JSON.stringify(e) === JSON.stringify([currentWord[1], currentWord[0]]));
        })
        setReadyArr(resArr)
        if (resArr.length === 0) {
            setIsGameFinished(true)
            return
        }
        const rand = Math.floor(Math.random() * resArr.length)
        setCurrentWord(JSON.parse(JSON.stringify(resArr[rand])))

    }

    const dontKnow = () => {
        if (isGameFinished) return;
        if (readyArr.length === 0) {
            setIsGameFinished(true)
            return
        }
        const rand = Math.floor(Math.random() * readyArr.length)
        setCurrentWord(JSON.parse(JSON.stringify(readyArr[rand])))
        setCount((prev) => prev + 1)
    }

    const refresh = () => {
        setReadyArr(convertor3000(notPrepWords))
        setCurrentWord(JSON.parse(JSON.stringify(words[0])))
        setIsGameFinished(false)
        setCount(0)
    }

    const openCard = () => {
        setIsOpenCard(!isOpenCard)
        let firstEl = currentWord[0]
        let secondEl = currentWord[1]
        setCurrentWord([secondEl, firstEl])
    }

    return (
        <div className=' w-full px-3 max-w-96'>
            <button onClick={back} className=" text-lg mb-3 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Go back
            </button>
            {
                isGameFinished && (
                    <div className=' py-2 pb-3 text-3xl font-semibold text-center'>
                        Finish. You score: <span className={`${(words.length / count * 100).toFixed(0) >= 75 ? 'text-green-500' : (words.length / count * 100).toFixed(0) > 40 ? 'text-blue-400' : 'text-red-500'}`}>{(words.length / count * 100).toFixed(0)}%</span>
                    </div>
                )
            }
            <div onClick={openCard} className={`select-none w-full cursor-pointer border-2 rounded-md bg-gray-50 flex justify-center items-center text-4xl min-h-56 border-gray-400 duration-700 p-2`} style={{ transform: isOpenCard ? 'rotateY(180deg)' : 'rotateY(0deg)' }}>
                <div className=' text-center overflow-hidden' style={{ transform: isOpenCard ? 'rotateY(180deg)' : 'rotateY(0deg)', wordWrap: 'break-word' }}>
                    {currentWord[0]}
                </div>
            </div>
            <div className='flex justify-between gap-3 pt-4'>
                <button onClick={dontKnow} className="bg-red-500 flex-1 hover:bg-red-700 text-white font-bold text-xl py-2 px-4 rounded">Dont know</button>
                <button onClick={know} className="bg-green-500 flex-1 hover:bg-green-700 text-white font-bold text-xl py-2 px-4 rounded">Know</button>
            </div>

            <button onClick={refresh} className="absolute bottom-5 flex items-center px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-indigo-600 rounded-lg hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-80 ref">
                <svg className="w-5 h-5 mx-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                </svg>
            </button>
        </div>
    )
}
