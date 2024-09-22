import React from 'react'
import { Alert } from 'react-bootstrap'

type ErrorProps = {
  error: string,
  onClose: ((a: any, b: any) => void) | undefined
}

function Error(props: ErrorProps) {
  return (
    <Alert variant="danger" onClose={props.onClose} dismissible>
      <Alert.Heading>Ошибка</Alert.Heading>
      <p>{props.error}</p>
    </Alert>
  )
}

export default Error