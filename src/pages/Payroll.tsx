import React from 'react'
import styled from 'styled-components'

const Payroll = () => {
  return (
      <Container>
          <Wrapper>
              <Head>
                  
              </Head>
          </Wrapper>
      </Container>
  )
}

export default Payroll

const Head = styled.div`
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #eee;;
`

const Wrapper = styled.div`
    width: 90%;
    height: 500px;
    display: flex;
    border: 1px solid #d6dee9;
    margin-top: 110px;
`

const Container = styled.div`
    width: calc(100vw - 270px);
    display: flex;
    height: 400px;
    justify-content: center;
`