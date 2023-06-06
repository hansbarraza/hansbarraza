import React from 'react'
import styled from 'styled-components'
import HomeImage from '../assets/images/emptyroad.jpg'


const Image = styled.div`
background-image: url(${HomeImage});
width: 100%;
height: 815px;
background-color: black;
background-size: 100% 100%;
filter: brightness(75%);
position: relative;
`
const MainContainer = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
/* text-align: center; */
`
 const HelloTxt = styled.p`
 font-family: 'Rubik', sans-serif;
 font-size: .8rem;
 color: #42acf9;
 display: flex;
 padding: 0;
 margin: 0;
 `
 const Header = styled.h1`
 color: white;
 display: flex;
 font-size: 3rem;
 white-space: nowrap;
 margin: 0;
 margin-right: 5rem;
 `

 const Content = styled.div`
 display: flex;
 justify-content: space-around;
 `
 const ButtonContainer = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 `
 const HomeButton = styled.button`
 margin: .2rem 0 .2rem 0;
 cursor: pointer;
 border: 2px solid white;
 background-color: transparent;
 color: white;
 box-shadow: 0 6px 6px rgba(0, 0, 0, 0.6);
 white-space: nowrap;
 :hover{
    background-color: #42acf9;
    color: white;
    /* opacity: 0.8; */
 }
 `

export default function Home() {
  return (
    <div>
    <Image>
        <MainContainer>
            <HelloTxt>HELLO THERE</HelloTxt>
            <Content>
                <Header>I am Hans Barraza.<br/>
                I am a Web Developer</Header>
                <ButtonContainer>
                <HomeButton>Latest Projects</HomeButton>
                <HomeButton>More About Me</HomeButton>
                </ButtonContainer>
                
            </Content>

        </MainContainer>
    </Image>
    </div>
  )
}
