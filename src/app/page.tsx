'use client'

//Components
import Link from 'next/link'
import { Button } from 'react-bootstrap'
import CityInput from './CityInput'
import Loader from '@/components/Loader'
import Error from '@/components/Error'

// Stores, utils, libs
import { getCoordinates, getCurrentWeatherData } from '@/api'
import { useEffect, useState, KeyboardEvent, ChangeEvent } from 'react'
import { CurrentWeatherResponse } from '@/types'

// CSS
import styles from "./page.module.sass"
import CurrentWeather from './CurrentWeather'

export default function Home() {

  const [currentWeather, setCurrentWeather] = useState<CurrentWeatherResponse | null | undefined>(null)
  const [inputValue, setInputValue] = useState('')
  const [city, setCity] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (city) {
      setIsLoading(true)
      getCoordinates(city).then(coordinates => {
        if (typeof coordinates === 'object') {
          getCurrentWeatherData(coordinates.lat, coordinates.lon)
            .then(response => {
              if (typeof response === 'object') setCurrentWeather(response)
              else if (typeof response === 'string') setError(response)
            })
            .finally(() => setIsLoading(false))
        }
        else if (typeof coordinates === 'string') setError(coordinates)
      })
    }
  }, [city])

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleChangeCity = () => {
    setCity(inputValue)
  }

  const handleChangeCityEnter = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setCity(inputValue)
    }
  }

  return (
    <div className={styles.page__main__content}>
      <h1>Input your city to find out current weather</h1>
      <div className={styles.page__main__content__searching}>
        <CityInput 
          inputValue={inputValue}
          handleChangeInput={handleChangeInput}
          handleChangeCity={handleChangeCity}
          handleChangeCityEnter={handleChangeCityEnter}
        />
      </div>
      {isLoading ?
        <div className={styles.page__main__content__searching__loader}>
          <Loader />
        </div>
        :
        error ?
          <div className={styles.page__main__content__searching__error}>
            <Error error={error} onClose={() => setError('')} />
          </div>
          :
          currentWeather ?
            <CurrentWeather city={city} currentWeather={currentWeather} />
            :
            <></>
      }
      <Link href={'/favorites'}>
        <Button
          className={styles.page__main__content__myCities}
        >
          My Cities
        </Button>
      </Link>
    </div>
  )
}
