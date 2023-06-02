import React from 'react'
import styled from 'styled-components'
import {BrowserRouter, NavLink} from "react-router-dom";


const Container = styled.div`
display: flex;
justify-content: space-between;
background-color: black;
padding: 0;
margin: 0;
`
const StyledHeading = styled.h1`
display: flex;
align-items: center;
margin: .5rem 3rem;
color: white;
font-family: 'Rubik', sans-serif;
font-size: 2rem;
`
const UnorderList = styled.ul`
display: flex;
justify-content: center;
align-items: center;
margin: 0 3rem 0;
padding: 0;
`
const List = styled.li`
display: flex;
justify-content: center;
align-items: center;
color: white;
padding: 1rem;
font-family: 'Rubik', sans-serif;

a {
  text-decoration: none;
  color: white;
  font-size: .9rem;
}
a:hover {
  color: gray;
}
a.active {
  color: red;
}
`
export default function NavBar() {
  return (
    <BrowserRouter>
      <Container>
        <StyledHeading>HB</StyledHeading>
        <UnorderList>
          <List><NavLink to='/'>HOME</NavLink></List>
          <List><NavLink to='/About'>ABOUT</NavLink></List>
          <List><NavLink to='/Work'>WORK</NavLink></List>
          <List><NavLink to='/Contact'>CONTACT</NavLink></List>
        </UnorderList>
      </Container>
      </BrowserRouter>
    
  )
}
