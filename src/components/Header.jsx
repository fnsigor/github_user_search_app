import React, { useContext } from 'react'
import styled from 'styled-components'
import ThemeButton from './ThemeButton'
import { TemaContext } from '../context/TemaContext'

const Content = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;


  h4{
    font-family: monospace;
    text-transform: lowercase;
    font-size: 3rem;
    font-family: monospace, sans-serif;
  }



`

function Header() {

  const { tema } = useContext(TemaContext)

  return (
    < Content >
      <h4 className={`${tema === 'light' ? "darkBlueTxt" : "darkWhiteTxt"}`}>devfinder</h4>
      <ThemeButton />
    </ Content>
  )
}

export default Header