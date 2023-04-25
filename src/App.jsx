

import { SearchBar } from './components/SearchBar'
import { colors } from './styles'
import styled, { ThemeProvider } from 'styled-components'
import Header from './components/Header'
import ExpandedCard from './components/ExpandedCard'
import { UserContext } from './context/UserContext'
import { useState } from 'react'


const Content = styled.div`

width: 900px;
`

function App() {


  const [user, setUser] = useState(false)


  return (
    <ThemeProvider theme={colors}>
      <Content>
        <UserContext.Provider value={{ user, setUser }}>
          <Header />
          <SearchBar />
          <ExpandedCard />
        </UserContext.Provider>
      </Content>
    </ThemeProvider>
  )
}

export default App
