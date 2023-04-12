import React from 'react'
import styled from 'styled-components'
import {CiSearch} from "react-icons/ci"

const Payroll = () => {
  return (
      <Container>
          <Wrapper>
              <Head>
                  <Inputhold>
                      <Search>
                          <CiSearch />
                      </Search>
                      <Input placeholder='Search people'/>
                  </Inputhold>
              </Head>
          </Wrapper>
      </Container>
  )
}

export default Payroll

const Input = styled.input`
    height: 100%;
    flex: 1;
    border: none;
    outline: none;
`

const Search = styled.div`
    height: 100%;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 23px;
`

const Inputhold = styled.div`
    width: 250px;
    height: 35px;
    border-bottom: 4px;
    border: 1px solid #dbdbdb;
    margin-left: 20px;
    display: flex;
    align-items: center;
    overflow: hidden;
`

const Head = styled.div`
    width: 100%;
    height: 55px;
    border-bottom: 1px solid #eee;
    display: flex;
    align-items: center;
`

const Wrapper = styled.div`
    width: 93%;
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