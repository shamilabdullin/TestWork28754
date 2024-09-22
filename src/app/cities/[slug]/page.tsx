'use client'
import React, { useEffect, useState } from 'react'

// Components
import WeatherCard from './WeatherCard'
import Loader from '@/components/Loader'
import Error from '@/components/Error'
import { Button } from 'react-bootstrap'
import Link from 'next/link'

// Stores, utils, libs
import { useParams } from 'next/navigation'
import { getCoordinates, getFullWeatherData } from '@/api'
import { WeatherResponse } from '@/types'
import { useStore } from '@/store'

//CSS
import styles from './page.module.sass'

function Page() {

  const params = useParams()
  const [weather, setWeather] = useState<WeatherResponse | null | undefined>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const { myCities, changeCities } = useStore()

  useEffect(() => {
    if (typeof params.slug === 'string') {
      setIsLoading(true)
      getCoordinates(params.slug)
        .then(coordinates => {
          if (typeof coordinates === 'object') {
            getFullWeatherData(coordinates.lat, coordinates.lon)
              .then(response => {
                if (typeof response === 'string') setError(response)
                else setWeather(response)
              })
              .finally(() => setIsLoading(false))
          }
          else setIsLoading(false)
        })
    }
  }, [params])

  const handleAddToFavorite = () => {
    if (weather) {
      const newCities = myCities
      newCities.push(weather)
      changeCities(newCities)
    }
  }

  return (
    <div className={styles.city}>
      <div className={styles.city__buttons}>
        <Link href={'/'}>
          <Button variant='dark'>Назад</Button>
        </Link>
        <Button
          variant='success'
          onClick={handleAddToFavorite}
        >
          Добавить в избранное
        </Button>
      </div>
      <h2>{params.slug}</h2>
      <div className={styles.city__cards}>
        {isLoading ?
          <div className={styles.city__cards__loader}>
            <Loader />
          </div>
          :
          error ?
            <div className={styles.city__cards__error}>
              <Error error={error} onClose={() => setError('')} />
            </div>
            :
            weather?.list?.map(weather => (
              <WeatherCard weather={weather} key={weather.dt_txt} />
            ))
        }
      </div>
    </div>
  )
}

export default Page