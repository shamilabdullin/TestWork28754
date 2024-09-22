import { CurrentWeatherResponse, WeatherResponse } from "@/types"
import axios from "axios"

const BASE_OPEN_WEATHER_URL = `https://api.openweathermap.org/data/2.5/`

export async function getFullWeatherData(lat: string, lon: string): Promise<WeatherResponse | undefined | string> {
  try {
    const response = await axios.get<WeatherResponse>
      (`${BASE_OPEN_WEATHER_URL}forecast?lat=${lat}&lon=${lon}&cnt=21&appid=${process.env.NEXT_PUBLIC_API_KEY}&units=metric`)
    return response.data
  } catch (error) {
    return 'Ошибка при получении данных погоды'
  }
}

export async function getCurrentWeatherData(lat: string, lon: string): Promise<CurrentWeatherResponse | undefined | string> {
  try {
    const response = await axios.get<CurrentWeatherResponse>
      (`${BASE_OPEN_WEATHER_URL}weather?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_API_KEY}&units=metric`)
    return response.data
  } catch (error) {
    return 'Ошибка при получении данных погоды'
  }
}

export async function getCoordinates(city: string): Promise<Coordinates | string | undefined> {
  const baseUrl = 'https://nominatim.openstreetmap.org/search'
  
  try {
    const response = await fetch(`${baseUrl}?q=${encodeURIComponent(city)}&format=json&addressdetails=1`)
    if (!response.ok) {
      return 'Ошибка при получении данных погоды'
    }
    const data = await response.json()

    if (data && data.length > 0) {
      const lat = data[0].lat
      const lon = data[0].lon
      return { lat, lon }
    }

  } catch (error) {
    return 'Ошибка при получении данных погоды'
  }
}

type Coordinates = { 
  lat: string, 
  lon: string 
}