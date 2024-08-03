import React from 'react'

export default function Content({ weather, weatherImage }) {
    return (
        <>
            <div className='flex flex-col justify-center items-center'>
                <img src={weatherImage} alt={weather.cloud} className='w-36 h-36' />
                <h2 className='text-white text-xl font-semibold capitalize tracking-wider'>{weather.cloud}</h2>
            </div>
            <div className='text-center text-white space-y-1'>
                <h1 className='text-4xl font-bold'>{weather.temperature}&deg;C</h1>
                <h2 className='text-xl font-semibold tracking-wide'>{weather.location}</h2>
                <p className='tracking-wider'>{weather.date}</p>
                <p className='text-lg font-semibold tracking-wider'>{weather.time} - {weather.period}</p>
            </div>
        </>
    )
}
