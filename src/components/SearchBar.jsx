import React, { useState, useContext, useEffect } from 'react'
import styled from 'styled-components'
import search from '../assets/search.svg'
import { UserContext } from '../context/UserContext'





const Nav = styled.nav`

    background-color:  ${props => props.theme.mediumBlue};
    border-radius: 8px;
    padding: 1rem;
    width: 100%;
    margin-bottom: 2rem;

    display: flex;

    button, input{
        font-family:monospace;
    }

    form{
        width: 100%;

        display: flex;
        justify-content: space-between;
        padding-left: 2rem;

        
        div{
            display: flex;
            align-items: center;
            gap: 2rem;
            width: 80%;

            label:hover{
                cursor: pointer;;
            }

            
            input[type="text"]{
                background-color: transparent;
                border: none;
                font-size:1.8rem;
                outline: none;
                width: 100%;

            }
        
        }


        button{
            font-size: 1.4rem;
            text-transform: capitalize;
            background-color:  ${props => props.theme.lightBlue};
            border:none;
            border-radius: 8px;
            padding-inline: 1.5rem;
            font-weight: bold;
            transition: .2s;


            :hover{
                cursor: pointer;
                background-color:  ${props => props.theme.hoverBlue};
            }
        }   
    }





`

export function SearchBar() {

    const [userName, setUserName] = useState("fnsigor")

    const { setUser } = useContext(UserContext)

    async function getUser() {

        try {
            const { data: user } = await axios.get(`https://api.github.com/users/${userName}`)

            setUser(user)
            console.log(user)
        }
        catch (error) {
            setUser(null)
        } finally {
            setUserName('')
        }
    }


    useEffect(() => {
        getUser()
    }, [])


    return (
        <Nav>
            <form onSubmit={(e) => {
                e.preventDefault()
                getUser()
            }}>
                <div>
                    <label htmlFor="username">
                        {true ? (<img src={search} alt="Search Icon" />) : ("loading")}
                    </label>

                    <input type="text" name="username" id="username" placeholder="Search Github Username..."
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />

                </div>
                <button> Search</button>
            </form>
        </Nav>
    )
}

