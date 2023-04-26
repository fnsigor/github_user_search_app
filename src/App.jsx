

import { SearchBar } from './components/SearchBar'
import { colors } from './styles'
import styled, { ThemeProvider } from 'styled-components'
import Header from './components/Header'
import { UserContext } from './context/UserContext'
import { useState } from 'react'
import { UserExpandedCard } from './components/ExpandedCard'
import { TemaContext } from './context/TemaContext'


const Content = styled.div`

  min-width: 100vw;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


  > *{
    width: 100%;
    max-width: 900px;
  }


`

function App() {


  const [user, setUser] = useState(false)

  const [tema, setTema] = useState('dark')


  return (
    <ThemeProvider theme={colors}>
      <TemaContext.Provider value={{ tema, setTema }}>
        <Content className={`${tema === 'light' ? "darkWhiteBg" : "darkBlueBg"}`}>
          <UserContext.Provider value={{ user, setUser }}>
            <Header />
            <SearchBar />
            <UserExpandedCard />
          </UserContext.Provider>
        </Content>
      </TemaContext.Provider>
    </ThemeProvider>
  )
}

export default App
