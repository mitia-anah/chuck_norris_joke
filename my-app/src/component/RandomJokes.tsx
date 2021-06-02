import React, { useContext } from 'react'
import styled from 'styled-components'
import {GlobalContext} from './GlobalState'


const Text = styled.p`
    max-width: 439px;
    font-family: Inter;
    font-size: 18px;
    font-weight: 600;
    font-stretch: normal;
    font-style: italic;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    margin-inline-start: 58px;
    color: #34394f;
`;
function RandomJokes() {
    const context = useContext(GlobalContext);
    const {jokes} = context;
//  console.log(rand=> joke.value.joke));
        
    return (
        <div>
            {jokes.map(joke => (
                <Text key={joke.value.id}>
                    {joke.value.joke}
                </Text>
            ))}
        </div>
    )
}
export default RandomJokes