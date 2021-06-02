import chucPhoto from '../images/chuck-norris.png'

function Header() {
    return (
        <div>
            <img src={chucPhoto}/>
        </div>
    )
}
export default Header

// let firstNameValue = ''
// let lastNameValue = ''
// async function handleOnSubmit(e: any) {
//   e.preventDefault()
//   const eventTarget = e.currentTarget.impersonate.value
//   if (eventTarget.trim() === '') {
//     firstNameValue = 'Chuck'
//     lastNameValue = 'Norris'
//   } else if (eventTarget.trim() !== '') {
//     firstNameValue = eventTarget.split(' ').shift()
//     lastNameValue = eventTarget.split(' ').slice(1).join(' ')
//   }
//   dispatch({
//     type: 'IMPERSONATE',
//     impersonateFirstName: firstNameValue,
//     impersonateLastName: lastNameValue,
//   })
//   const response = await fetch(
//     `${RANDOM_JOKE_API}?firstName=${firstNameValue}&lastName=${lastNameValue}`
//   )
//   const result = await response.json()
//   dispatch({
//     type: 'JOKES',
//     joke: result,
//   })
// }
// Context
// const initialState: State = {
// lastName: 'Norris',
// firstName: 'Chuck',
// joke: {
//   type: '',
//   value: {
//     id: '',
//     joke: '',
//     category: [],
//   },
// },
// }
// // context creator
// export const GlobalContext = createContext<{
// state: State
// dispatch: React.Dispatch<any>
// }>({
// state: initialState,
// dispatch: () => null,
// })
// export const GlobalContextProvider: React.FC = ({ children }) => {
// const [state, dispatch] = useReducer(reducer, initialState)
// const fetchDataJokes = async () => {
//   const response = await fetch(RANDOM_JOKE_API)
//   const result = await response.json()
//   dispatch({ type: 'JOKES', joke: result })
// }
// useEffect(() => {
//   fetchDataJokes()
// }, [])
// Reducer
// case 'JOKES': {
//     return {
//       ...state,
//       joke: action.joke,
//     }
//   }
//   case 'RANDOM_JOKES': {
//     return {
//       ...state,
//       randomJokes: action.randomJokes,
//     }
//   }
//   case 'IMPERSONATE': {
//     return {
//       ...state,
//       firstName: action.impersonateFirstName,
//       lastName: action.impersonateLastName,
//     }
//   }