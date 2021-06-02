import React, { useContext } from 'react'
import { GlobalContext } from './GlobalState'
import styled from 'styled-components'

const Button = styled.button`
  width: 79.10%;
  color: #fff;
  border: solid 1px;
  border-radius: 6px;
  background-color: #34394f; 
  padding: 20.5px;
  margin: auto;
  cursor: pointer;
`;

function DrawJokeButton() {
  const context = useContext(GlobalContext)
  const {getJokes} = context

  return (
    <div>
      <Button onClick={getJokes} type="submit">
        Draw a Chuck Norris Joke
      </Button>
    </div>
  )
}
export default DrawJokeButton