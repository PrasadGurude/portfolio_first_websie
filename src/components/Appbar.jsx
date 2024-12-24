import React from 'react'

function Appbar() {
    return (
        <nav className='flex justify-between pl-4 pr-4 mb-3 p-3 h-15 rounded-lg bg '>
            <div className='r-side font-extrabold text-red-600'>
                PRASAD
            </div>
            <div className='l-side flex text-white'>
                <div className='ml-4'> Home</div>
                <div className='ml-4'> About</div>
                <div className='ml-4'> skills</div>
                <div className='ml-4'> Projects</div>
            </div>
        </nav>
    )
}

export default Appbar