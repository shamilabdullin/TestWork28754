import { WeatherResponse } from '@/types'
import { create } from 'zustand'

type Store = {
  myCities: WeatherResponse [],
  changeCities: (city: WeatherResponse []) => void
}

export const useStore = create<Store>((set) => ({
  myCities: [],

  changeCities: (newCities) => set(() => (
    { myCities: newCities }
  )),

}))