import React, { useEffect, useState } from 'react'
import axios from 'axios'
import moment from 'moment-timezone';
import './Weather.css'
import Search from './Search';
import { weatherImages, backgroundImages } from '../utils/data';
import Clouds from './Clouds';
import Loading from './Loading';
import NoData from './NoData';

export default function Weather() {
    const [weather, setWeather] = useState(null);
    const [city, setCity] = useState('Malang');
    const [inputSearch, setInputSearch] = useState('');
    const [loading, setLoading] = useState(false);

    const apiKey = import.meta.env.VITE_API_KEY;

    useEffect(() => {
        const getWeatherData = async () => {
            setLoading(true)
            try {
                const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

                const response = await axios.get(apiUrl);

                const timeZone = response.data.timezone;
                const utcDate = moment.utc();
                const localDate = utcDate.clone().add(timeZone / 3600, 'hours');

                setWeather({
                    location: response.data.name,
                    temperature: Math.floor(response.data.main.temp),
                    humidity: response.data.main.humidity,
                    windSpeed: response.data.wind.speed,
                    cloud: response.data.weather[0].main,
                    date: localDate.format('dddd - DD MMM YYYY'),
                    time: localDate.format('HH : mm'),
                    period: getPeriodOfDay(localDate.hour())
                })
            } catch (error) {
                console.error('Error Fetch Data', error);
                setWeather(null);
            } finally {
                setLoading(false)
            }
        }

        getWeatherData()

    }, [city]);

    const getPeriodOfDay = (hour) => {
        if (hour >= 5 && hour < 12) return 'Morning';
        if (hour >= 12 && hour < 17) return 'Afternoon';
        if (hour >= 17 && hour < 20) return 'Evening'
        return 'Night'
    }

    const weatherImage = weather ? weatherImages[weather.cloud] : null;
    const backgroundImage = weather ? backgroundImages[weather.cloud] : backgroundImages.Clouds;

    const handlerSearch = (e) => {
        setInputSearch(e.target.value)
    }

    const handlerInputSearch = (e) => {
        e.preventDefault();
        setCity(inputSearch.trim());

        setInputSearch('')
    }

    return (
        <div className='w-full min-h-screen flex justify-center items-center bg-image px-5' style={{ backgroundImage }}>
            <div className="relative w-[400px] h-[500px] bg-black backdrop-blur-sm bg-opacity-20 shadow-lg shadow-black rounded-lg">
                <div className='px-10 py-5 flex flex-col justify-between h-full'>
                    <Search inputSearch={inputSearch} handlerSearch={handlerSearch} handlerInputSearch={handlerInputSearch} />
                    {loading ? (
                        <Loading /> 
                    ) : weather ? (
                        <Clouds weather={weather} weatherImage={weatherImage} />
                    ) : (
                        <NoData />
                    )
                    }
                </div>
            </div>
        </div>
    )
}
