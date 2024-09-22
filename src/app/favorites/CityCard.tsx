import React from 'react'

// Components
import { Button, Card } from 'react-bootstrap'

// Stores, utils, libs
import { WeatherResponse } from '@/types'

type CityCardProps = {
  city: WeatherResponse,
  handleDelete: (cityForDeleting: string) => void
}

function CityCard({ city, handleDelete }: CityCardProps) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{city?.city?.name}</Card.Title>
        <Card.Text>
          Current temperature {Math.round(city?.list[0]?.main?.temp)}°C
        </Card.Text>
        <Button 
          variant="danger"
          onClick={() => handleDelete(city?.city?.name)}
        >
          Delete
        </Button>
      </Card.Body>
    </Card>
  )
}

export default CityCard