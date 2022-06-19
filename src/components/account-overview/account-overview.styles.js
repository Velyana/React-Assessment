import styled from 'styled-components';

export const AccountTitle = styled.h4`
    text-align: left;
    padding-top: 1em;
    color: #737373;
`
export const AccountContact = styled.h6`
    text-align: left;
    padding-top: 1em;
    color: #8C8C8C;
    text-transform: uppercase;
`

export const AccountIcon = styled.section`
    border-radius: 5px;
    background: #F5DA69;
    float: left;
    width: 2.5em;
    height: 2.5em;
`
export const AccountLetter = styled.h1`
    font-size: 1em;
    padding: 0.6em;
    text-align: center;
    color: black;
`

export const AccountDetails = styled.span`
    padding-left: 1em;
    color: #737373;
    display: inline;
    font-weight: ${props => props.primary ? "bold" : "normal"};
    float: ${props => props.primary ? "left" : "none"};
`

export const AccountDetailsContainer = styled.span`
    display: inline-block;
    padding-left: 1em;
    color: #737373;
    display: inline;
    font-size: 13px;
    margin-bottom: 0;
    font-weight: bold;
    float: left;
`