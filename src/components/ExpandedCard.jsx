import React, { useContext } from 'react'
import styled from 'styled-components'
import { UserContext } from '../context/UserContext'
import { TemaContext } from '../context/TemaContext'



const UserContent = styled.div`


    
    border-radius: 8px;

    display: flex;
    gap: 4rem;

    padding: 6rem;

    box-shadow: rgba(0, 0, 0, 0.24) 0 5px 10px;

    .imgContainer img{
        border-radius: 50%;
        height: 15rem;
        width: 15rem;
    }


    .dataContainer{
        width: 100%;
       
        *{
            font-family: monospace;
        }

        .name{
            display: flex;
            align-items: center;
            justify-content:space-between;
            margin-bottom: 1rem;
            gap: 2rem;

            h6{
                font-size: 3.6rem;
                line-height: 4rem;
                word-break: keep-all;
              
               
            }
            
            span{
        
                font-size: 1.8rem;
                line-height: 2rem;
            }
        }
        
        .githubLink{
            color: ${props => props.theme.lightBlue};
            font-size: 1.4rem;
            margin-bottom: 2rem;
            display: block;
        }

        .bio{
            font-size: 1.6rem;
            margin-bottom: 3rem;
        }

        .data{
            border-radius: 8px;
            margin-bottom: 3rem;

            display: flex;
            justify-content: space-between;
            padding: 2rem 2.5rem;

            .datablock{
                display: flex;
                flex-direction: column;

                span:nth-child(1){
                    font-size:1.4rem;
                   
                }
                span:nth-child(2){
                    font-size:2.6rem
                }
            }
        }

        .links{

            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(2, 1fr);
            gap: 1rem;

            *{
               font-size: 1.2rem;
            }

            li{
                display: flex;
                align-items: center;
                gap: .8rem;
            }
            a:hover{
                cursor: pointer;
            }


        }
      
    }






`

export function UserExpandedCard() {

    const { user } = useContext(UserContext)

    const data = new Date(user.created_at).toLocaleString('pt-BR', { timezone: 'UTC' }).split(',')[0]

    const { tema } = useContext(TemaContext)


    return (
        <UserContent className={`${tema === 'light' ? "mediumWhiteBg" : "mediumBlueBg"}`}>
            <div className="imgContainer">
                <img src={user.avatar_url} alt="user avatar" id="avatar" />
            </div>
            <div className="dataContainer">
                <div className="name">
                    <h6 className={`${tema === 'light' ? "darkBlueTxt" : "darkWhiteTxt"}`}>{user.name}</h6>
                    <span className={`${tema === 'light' ? "mediumBlueTxt" : "gray"}`}>Joined {data}</span>
                </div>

                <a href={"https://github.com/" + user.login} target="_blank" className="githubLink">@{user.login}</a>

                <p className={`${tema === 'light' ? "mediumBlueTxt bio" : "gray bio"}`} >
                    {(user?.bio || "This profile has no bio")}
                </p>

                <div className={`${tema === 'light' ? "darkWhiteBg data" : "darkBlueBg data"}`}>
                    <div className="datablock">
                        <span className={`${tema === 'light' ? "mediumBlueTxt" : "gray"}`}>Repos</span>
                        <span className={`${tema === 'light' ? "darkBlueTxt" : "gray"}`}>{user.public_repos}</span>
                    </div>
                    <div className="datablock">
                        <span className={`${tema === 'light' ? "mediumBlueTxt" : "gray"}`}> Followers</span>
                        <span className={`${tema === 'light' ? "darkBlueTxt" : "gray"}`}>{user.followers}</span>
                    </div>
                    <div className="datablock">
                        <span className={`${tema === 'light' ? "mediumBlueTxt" : "gray"}`}>Following</span>
                        <span className={`${tema === 'light' ? "darkBlueTxt" : "gray"}`}>{user.following}</span>
                    </div>
                </div>

                <ul className="links">
                    <li>
                        {
                            user.location
                                ? (
                                    <>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"
                                        ><path fill={`${tema === 'light' ? "#1f2a48" : "#F2F4F3"}`} d="M12 12q.825 0 1.413-.588T14 10q0-.825-.588-1.413T12 8q-.825 0-1.413.588T10 10q0 .825.588 1.413T12 12Zm0 10q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2q3.175 0 5.588 2.225T20 10.2q0 2.5-1.988 5.438T12 22Z" /></svg>
                                        <span className={`${tema === 'light' ? "mediumBlueTxt" : "gray"}`} >{user.location}</span>
                                    </>

                                )
                                : (
                                    <>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#bec1ca" d="M12 12q.825 0 1.413-.588T14 10q0-.825-.588-1.413T12 8q-.825 0-1.413.588T10 10q0 .825.588 1.413T12 12Zm0 10q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2q3.175 0 5.588 2.225T20 10.2q0 2.5-1.988 5.438T12 22Z" /></svg>
                                        <span style={{ color: "#bec1ca" }}>Not Available</span>
                                    </>

                                )
                        }
                    </li>

                    <li>
                        {
                            user.twitter_username
                                ? (
                                    <>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill={`${tema === 'light' ? "#1f2a48" : "#F2F4F3"}`} d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23Z" /></svg>
                                        <a className={`${tema === 'light' ? "mediumBlueTxt" : "gray"}`}
                                            href={"https://twitter.com/" + user.twitter_username}
                                            target="_blank">
                                            {user.twitter_username}
                                        </a>
                                    </>

                                )
                                : (
                                    <>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#bec1ca" d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23Z" /></svg>
                                        <span style={{ color: "#bec1ca" }}>Not Available</span>
                                    </>

                                )
                        }
                    </li>

                    <li>
                        {
                            user.blog
                                ? (
                                    <>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 100 100"><path id="gisArrow0" fill={`${tema === 'light' ? "#1f2a48" : "#F2F4F3"}`} fillOpacity="1" fillRule="nonzero" stroke="none" strokeDasharray="none" strokeDashoffset="20" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="4" strokeOpacity="1" strokeWidth="10" d="M17.09 1.853a4.999 4.999 0 0 0-5.276 5.596l7.557 81.087c.483 3.938 5.137 5.773 8.176 3.223l15.947-12.932l7.15 12.385c4.112 7.122 10.636 8.872 17.758 4.76s8.87-10.638 4.758-17.76l-7.125-12.34l18.896-7.244c3.728-1.357 4.467-6.306 1.3-8.693L19.784 2.847a4.995 4.995 0 0 0-2.695-.994Z" color="currentColor" colorInterpolation="sRGB" colorRendering="auto" display="inline" vectorEffect="none" visibility="visible" /></svg>
                                        <a className={`${tema === 'light' ? "mediumBlueTxt" : "gray"}`}
                                            href={user.blog} target="_blank">
                                            {user.blog}
                                        </a>
                                    </>

                                )
                                : (
                                    <>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 100 100"><path id="gisArrow0" fill="#bec1ca" fillOpacity="1" fillRule="nonzero" stroke="none" strokeDasharray="none" strokeDashoffset="20" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="4" strokeOpacity="1" strokeWidth="10" d="M17.09 1.853a4.999 4.999 0 0 0-5.276 5.596l7.557 81.087c.483 3.938 5.137 5.773 8.176 3.223l15.947-12.932l7.15 12.385c4.112 7.122 10.636 8.872 17.758 4.76s8.87-10.638 4.758-17.76l-7.125-12.34l18.896-7.244c3.728-1.357 4.467-6.306 1.3-8.693L19.784 2.847a4.995 4.995 0 0 0-2.695-.994Z" color="currentColor" colorInterpolation="sRGB" colorRendering="auto" display="inline" vectorEffect="none" visibility="visible" /></svg>
                                        <span style={{ color: "#bec1ca" }}>Not Available</span>
                                    </>

                                )
                        }
                    </li>

                    <li>
                        {
                            user.company
                                ? (
                                    <>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill={`${tema === 'light' ? "#1f2a48" : "#F2F4F3"}`} d="M2 21V3h10v4h10v14H2Zm2-2h2v-2H4v2Zm0-4h2v-2H4v2Zm0-4h2V9H4v2Zm0-4h2V5H4v2Zm4 12h2v-2H8v2Zm0-4h2v-2H8v2Zm0-4h2V9H8v2Zm0-4h2V5H8v2Zm4 12h8V9h-8v2h2v2h-2v2h2v2h-2v2Zm4-6v-2h2v2h-2Zm0 4v-2h2v2h-2Z" /></svg>
                                        <span className={`${tema === 'light' ? "mediumBlueTxt" : "gray"}`}>{user.company}</span>
                                    </>

                                )
                                : (
                                    <>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#bec1ca" d="M2 21V3h10v4h10v14H2Zm2-2h2v-2H4v2Zm0-4h2v-2H4v2Zm0-4h2V9H4v2Zm0-4h2V5H4v2Zm4 12h2v-2H8v2Zm0-4h2v-2H8v2Zm0-4h2V9H8v2Zm0-4h2V5H8v2Zm4 12h8V9h-8v2h2v2h-2v2h2v2h-2v2Zm4-6v-2h2v2h-2Zm0 4v-2h2v2h-2Z" /></svg>
                                        <span style={{ color: "#bec1ca" }}>Not Available</span>
                                    </>

                                )
                        }
                    </li>
                </ul>

            </div>
        </UserContent>
    )
}