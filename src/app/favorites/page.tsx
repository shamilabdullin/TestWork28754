'use client'
import React from 'react'

//Components
import Link from 'next/link'
import { Button } from 'react-bootstrap'
import CityCard from './CityCard'

// Stores, utils, libs
import { useStore } from '@/store'

//CSS
import styles from './page.module.sass'

function Page() {

  const { myCities, changeCities } = useStore()

  const handleDelete = (cityForDeleting: string) => {
    const newCities = myCities.filter(city => city?.city?.name !== cityForDeleting)
    changeCities(newCities)
  }

  return (
    <div className={styles.favorites}>
      <Link href={'/'}>
        <Button className={styles.buttonBack} variant='dark'>
          Back
        </Button>
      </Link>
      <div className={styles.favorites__cities}>
        {myCities.length > 0 ?
          myCities.map(city => (
            <CityCard key={city.cod} city={city} handleDelete={handleDelete} />
          ))
          :
          <div className={styles.favorites__cities__empty}>
            <h4>Add favorite cities to see it</h4>
          </div>
        }
      </div>
    </div>
  )
}

export default Page