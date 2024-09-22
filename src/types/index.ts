export type WeatherResponse = {
  city: City,
  cnt: number,
  cod: string,
  list: Weather[],
  message: number
}

type City = {
  coord: Coordinates,
  country: string,
  id: number,
  name: string,
  population: number,
  sunrise: number,
  sunset: number,
  timezone: number,
}

export type Coordinates = {
  lat: number,
  lon: number
}

export type Weather = {
  clouds: Clouds,
  dt: number,
  dt_txt: string,
  main: Main,
  pop: number,
  sys: {
    pod: string,
  },
  visibility: number,
  weather: {
    description: string,
    icon: string,
    id: number,
    main: string
  }[],
  wind: {
    deg: number,
    gust: number,
    speed: number
  }
}

type Clouds = {
  all: number
}

type Main = {
  feels_like: number,
  grnd_level: number,
  humidity: number,
  pressure: number,
  sea_level: number,
  temp: number,
  temp_kf: number,
  temp_max: number,
  temp_min: number,
}

export type CurrentWeatherResponse = {
  base: string,
  clouds: Clouds,
  cod: number,
  coord: Coordinates,
  dt: number,
  id: number,
  main: Main,
  name: string,
  sys: {
    country : string,
    id: number,
    sunrise: number,
    sunset: number,
    type: number
  },
  timezone: number,
  visibility: number,
  weather: {
    description: string,
    icon: string,
    id: number,
    main: string
  }[],
  wind: {
    deg: number,
    gust: number,
    speed: number
  }
}