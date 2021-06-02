import React, { createContext , useEffect, useReducer, useState} from 'react'

export const RANDOM_JOKES = 'http://api.icndb.com/jokes/random'
const CATEGORY = 'http://api.icndb.com/categories'

type Joke = {
    joke: string
}
type Category ={
    type: string,
    value: string[]
}

type JokesProps = {
    type: string,
    value: {
        id: number,
        joke: Joke[],
        categories: Category[]
    },
}; 

type State = {
    jokes: JokesProps[],
    categories: Category[],
    randomJoke: JokesProps[],
    firstName: string,
    lastName: string,
    dispatch: React.Dispatch<any>,
    getJokes: () => void,
}
const initialState: State = {
    jokes: [],
    categories: [],
    randomJoke: [],
    firstName: 'Chuck',
    lastName: 'Norris',
    dispatch: () => null,
    getJokes: () => {}
};

type Action = 
  | {type: "JOKES", jokes: JokesProps[]}
  | {type: "GET_RANDOM_JOKES", randomJoke: JokesProps[]}
  | {type: "SELECT_CATEGORY_LIST", payload: Category[]}
  | {type: "IMPERSONATE_VALUE", impersonateFirstName: string, impersonateLastName: string}

export const GlobalContext = createContext(initialState)

function reducer(state: State, action: Action) {
    switch (action.type) {
        case 'JOKES':
            return {...state, jokes: action.jokes}
        case 'GET_RANDOM_JOKES':
            return { ...state, randomJoke: action.randomJoke}
        case 'SELECT_CATEGORY_LIST':
            return {...state, categories: action.payload}   
        case 'IMPERSONATE_VALUE':
            return {
                ...state,
                firstName: action.impersonateFirstName,
                lastName: action.impersonateLastName,
            } 
        default:
           return state
    }
}
export const GlobalProvider: React.FC = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)  

    async function getJokes() {
        const res = await fetch(RANDOM_JOKES)
        const data = await res.json()
        // dispatch({type: "JOKES", jokes: [data]}) 
        dispatch({type: "GET_RANDOM_JOKES", randomJoke: [data]}) 
    }
    // async function getCategory() {
    //     const res = await fetch(CATEGORY)
    //     const data = await res.json()
    //     dispatch({type: "SELECT_CATEGORY_LIST", payload: [data]})
    // }

    useEffect(() => {
        getJokes()
    },[])


    return (
        <GlobalContext.Provider value={{ 
            jokes: state.jokes,
            randomJoke: state.randomJoke,
            categories: state.categories,
            firstName: state.firstName,
            lastName: state.lastName,
            getJokes,
            dispatch,
            }}>
            {children}
        </GlobalContext.Provider>
    )
}















