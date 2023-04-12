import React from 'react'
import styled from 'styled-components'

const Payroll = () => {
  return (
      <Container>
          <Wrapper>
              
          </Wrapper>
      </Container>
  )
}

export default Payroll

const Wrapper = styled.div`
    width: 100%;
    height: 400px;
    display: flex;
    background-color: green;
`

const Container = styled.div`
    width: calc(100vw - 270px);
    display: flex;
    flex-direction: column;
    height: 400px;
`