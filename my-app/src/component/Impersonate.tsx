import { useContext} from 'react'
import DrawJokeButton from './DrawJokeButton';
import { GlobalContext } from './GlobalState';
import RandomJokes from './RandomJokes';
import styled from 'styled-components';
import {RANDOM_JOKES} from './GlobalState'

function Impersonate() {
  const {dispatch} = useContext(GlobalContext);

let firstNameValue = ''
let lastNameValue = ''

async function handleOnSubmit(e: any) {
  e.preventDefault()
  const eventTarget = e.currentTarget.impersonate.value
  if (eventTarget.trim() === '') {
    firstNameValue = 'Chuck'
    lastNameValue = 'Norris'
  } else if (eventTarget.trim() !== '') {
    firstNameValue = eventTarget.split(' ').shift()
    lastNameValue = eventTarget.split(' ').slice(1).join(' ')
  }
  dispatch({
    type: 'IMPERSONATE_VALUE',
    firstName: firstNameValue,
    lastName: lastNameValue,
  })
  const response = await fetch(
    `${RANDOM_JOKES}?firstName=${firstNameValue}&lastName=${lastNameValue}`
  )
  const result = await response.json()
  dispatch({
    type: 'GET_RANDOM_JOKES',
    jokes: result,
  })
  console.log(result);
  
}

  return (
    <Form onSubmit={handleOnSubmit}>
      <RandomJokes/>
      <fieldset>
        <label>Categories</label>
        {/* <select placeholder="Categories" onClick={dropDownForCategory} id="">
        <option>{categoryList}</option>
        </select> */}
      </fieldset>
      <input type="text" placeholder="Impersonate Chuck Norris" name="impersonate" onChange={(e) => dispatch(e.target.value)}/>
    <DrawJokeButton/>
    </Form>
  )
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  
  fieldset{
    display: flex;
    flex-directifon: row;
    align-items: center;
    justify-content: space-between;
    width: 72.98%;
    height: 24px;
    padding: 16px;
    border: solid 1px gray;
    background-color: #fff; 
    border-radius: 6px;
    margin: auto;

    label {
      font-size: 16px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.63;
      color: grey;
    }
  }
  
  input {
    width: 72.98%;
    height: 24px;
    padding: 16px;
    border: solid 1px gray;
    background-color: #fff; 
    margin:auto; 
    border-radius: 6px;
  }
`;

export default Impersonate