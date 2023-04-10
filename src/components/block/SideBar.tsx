import React from 'react'
import styled from 'styled-components'

const SideBar = () => {
  return (
    <Container>

    </Container>
  )
}

export default SideBar
const Container = styled.div`
  width: 270px;
  height: 100vh;
  position: fixed;
  background-color: #f2f5f8;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  z-index: 2;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`