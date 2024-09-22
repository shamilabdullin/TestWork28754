import React, { ChangeEvent, KeyboardEvent } from 'react'

// Components
import { Button } from 'react-bootstrap'

type CityInputProps = {
  inputValue: string,
  handleChangeInput: (e: ChangeEvent<HTMLInputElement>) => void,
  handleChangeCityEnter: (event: KeyboardEvent<HTMLInputElement>) => void,
  handleChangeCity: () => void
}

function CityInput({ 
  inputValue, 
  handleChangeInput, 
  handleChangeCityEnter, 
  handleChangeCity 
}: CityInputProps) {
  return (
    <>
      <input 
        type="text" 
        className="form-control" 
        placeholder="City" 
        aria-label="Username" 
        aria-describedby="basic-addon1" 
        value={inputValue}
        onChange={handleChangeInput}
        onKeyDown={handleChangeCityEnter}
      />
      <Button
        onClick={handleChangeCity}
      >
        Find
      </Button>
    </>
  )
}

export default CityInput