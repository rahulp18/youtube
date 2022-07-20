import React from 'react'
import styled from 'styled-components'
import { Card } from '../components'


const Contaier=styled.div`
  display:grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`

const Home = () => {
  return (
   <Contaier>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
   </Contaier>
  )
}

export default Home