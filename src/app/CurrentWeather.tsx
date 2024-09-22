import React from 'react'

//Components
import Link from 'next/link'

// Stores, utils, libs
import { CurrentWeatherResponse } from '@/types'

type CurrentWeatherProps = {
  city: string,
  currentWeather: CurrentWeatherResponse
}

function CurrentWeather({ city, currentWeather }: CurrentWeatherProps) {
  return (
    <div>
      <h3>Current temperature of 
        <Link href={`/cities/${city}`}> {city} </Link>
        <br/>
        {currentWeather?.main?.temp}°C
        <img 
          src={`https://openweathermap.org/img/wn/${currentWeather?.weather[0]?.icon}@2x.png`}
          alt='icon'
          width={80}
          height={80}
        />
      </h3>
    </div>
  )
}

export default CurrentWeather