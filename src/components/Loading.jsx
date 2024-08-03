import React from 'react'
import loadingImage from '../assets/images/loading.gif'

export default function Loading() {
    return (
        <div className='flex justify-center items-center w-full h-full'>
            <img src={loadingImage} alt="Loading" className='w-16 h-16' />
        </div>
    )
}
