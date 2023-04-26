import React, { useContext } from 'react'
import styled from 'styled-components'
import { TemaContext } from '../context/TemaContext'




const Button = styled.button`
        background: none;
        text-transform: uppercase;
        font-size: 1.5rem;
        border: none;
        font-family: monospace, sans-serif;

        display: flex;
        align-items: center;
        gap: 1rem;

        :hover{
            cursor: pointer;
        }
`

function LightButton() {

    const { setTema } = useContext(TemaContext)

    return (
        <Button onClick={() => setTema('light')}>
            <span>LIGHT</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m6.76 4.84l-1.8-1.79l-1.41 1.41l1.79 1.79l1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41l-1.79 1.79l1.41 1.41l1.79-1.79zm-3.21 13.7l1.79 1.8l1.41-1.41l-1.8-1.79l-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41l1.79-1.8l-1.41-1.41l-1.79 1.8z" /></svg>
        </Button>
    )

}


function DarkButton() {

    const { setTema } = useContext(TemaContext)

    return (
        <Button onClick={() => setTema('dark')}>
            <span className="darkBlueTxt">DARK</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#141C2F" d="M14 2c1.82 0 3.53.5 5 1.35c-2.99 1.73-5 4.95-5 8.65s2.01 6.92 5 8.65A9.973 9.973 0 0 1 14 22C8.48 22 4 17.52 4 12S8.48 2 14 2z" /></svg>
        </Button>
    )

}

function ThemeButton() {

    const { tema } = useContext(TemaContext)

    return (
        (tema === 'dark') ? (<LightButton />) : (<DarkButton />)
    )
}

export default ThemeButton