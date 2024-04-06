import React from 'react'

export default function Section({ words, setWords ,startGame }) {

    const handleClick = (w) => {
        setWords(w)
        startGame()
    }

    return (
        <div className='p-5 flex justify-center gap-5 flex-wrap'>
            {
                words.map((w, i) => (
                    <button onClick={() => handleClick(w)} key={i} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 me-2 mb-2  focus:outline-none ">
                        {i+1}
                    </button>
                ))
            }
        </div>
    )
}
