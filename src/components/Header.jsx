import React from 'react'
import styled from 'styled-components'

const Content = styled.header`
display: flex;
justify-content: space-between;
margin-bottom: 3rem;

button, h4{
  font-family: monospace;
}

h4{
  text-transform: lowercase;
  font-size: 3rem;
}


button{
  background: none;
  text-transform: uppercase;
  font-size: 1.5rem;
  border: none;
}
`

function Header() {
  return (
    < Content>
      <h4>devfinder</h4>
      <button>
        light
      </button>
    </ Content>
  )
}

export default Header