import React from 'react'

export default function ChooseSection({ setSection }) {
    return (
        <div className='  w-full p-5 flex flex-col gap-5 flex-wrap'>
            <div className='flex justify-between gap-5'>
                <button onClick={() => setSection(1)} type="button" class="text-white w-full bg-blue-300 hover:bg-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full px-5 py-2.5 text-center me-2 mb-2">A1</button>
                <button onClick={() => setSection(2)} type="button" class="text-white w-full bg-green-400 hover:bg-green-500 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full px-5 py-2.5 text-center me-2 mb-2">A2</button>
            </div>

            <div className='flex justify-between gap-5'>
                <button onClick={() => setSection(3)} type="button" class="text-white w-full bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full px-5 py-2.5 text-center me-2 mb-2">B1</button>
                <button onClick={() => setSection(4)} type="button" class="text-white w-full bg-orange-400 hover:bg-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-300 font-medium rounded-full px-5 py-2.5 text-center me-2 mb-2">B2</button>
            </div>

            <div className='flex justify-between gap-5'>
                <button onClick={() => setSection(5)} type="button" class="text-white w-full bg-red-400 hover:bg-red-500 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full px-5 py-2.5 text-center me-2 mb-2">C1</button>
                <button onClick={() => setSection(6)} type="button" class="text-white w-full bg-black hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-700 font-medium rounded-full px-5 py-2.5 text-center me-2 mb-2">C2</button>
            </div>
        </div>
    )
}
