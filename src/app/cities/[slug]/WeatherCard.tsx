import React from 'react'

// Components
import { Card } from 'react-bootstrap'

// Stores, utils, libs
import { Weather } from '@/types'

//CSS
import styles from './page.module.sass'

type WeatherCardProps = {
  weather: Weather
}

function WeatherCard({ weather }: WeatherCardProps) {
  return (
    <Card className={styles.city__cards__card} key={weather?.dt_txt}>
      <Card.Title>{weather?.dt_txt.slice(5)}</Card.Title>
      <img
        src={`https://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@2x.png`} 
        width={80}
        height={80}
        alt='icon'
      />
      <Card.Text style={{ fontWeight: 600 }}>
        {Math.round(weather?.main?.temp)}°C
      </Card.Text>
    </Card>
  )
}

export default WeatherCard