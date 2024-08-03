import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";

export default function Search({ inputSearch, handlerSearch, handlerInputSearch }) {
    return (
        <div className='flex justify-center'>
            <form action="" onSubmit={handlerInputSearch} className='relative flex items-center w-full h-9'>
                <FaLocationDot className='absolute left-3 text-xl text-white' />
                <input type="text" placeholder='Search City . . .' value={inputSearch} onChange={handlerSearch} className='w-full py-1 px-10 text-white bg-transparent border border-white placeholder:tracking-wider placeholder:text-white outline-none rounded-3xl' />
                <button type='submit' className='absolute right-0 w-9 h-full'>
                    <FiSearch className='text-2xl text-white' />
                </button>
            </form>
        </div>
    )
}
