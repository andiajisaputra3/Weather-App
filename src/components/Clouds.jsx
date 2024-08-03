import React from 'react'
import Content from './Content'
import Detail from './Detail'

export default function Clouds({weather, weatherImage}) {
    return (
        <>
            <Content weather={weather} weatherImage={weatherImage} />
            <Detail weather={weather} />
        </>
    )
}
