import React from 'react'
import humidity from '../assets/images/humidity.png'
import wind from '../assets/images/wind.png'

export default function Detail({ weather }) {
    return (
        <div className='flex justify-between'>
            <div className='flex items-center text-white space-x-2'>
                <img src={humidity} alt="humidity" className='w-10 h-10' />
                <div>
                    <p className='text-lg'>Humidity</p>
                    <p className='text-xl'>{weather.humidity} %</p>
                </div>
            </div>
            <div className='flex items-center text-white space-x-2'>
                <img src={wind} alt="humidity" className='w-10 h-10' />
                <div>
                    <p className='text-lg'>Wind Speed</p>
                    <p className='text-xl'>{weather.windSpeed} Km/h</p>
                </div>
            </div>
        </div>
    )
}
