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

              <Table>
                  <Lists>
                      <Name>Full Name</Name>
                      <Gross>Gross pay</Gross>
                      <Taxes>Est. Employee Taxes</Taxes>
                      <Netpay>Est. Net pay</Netpay>
                      <Payment>Payment method</Payment>
                      <Status>Status</Status>
                  </Lists>
              </Table>
          </Wrapper>
      </Container>
  )
}

export default Payroll
const Status = styled.div`
    width: 120px;
    height: 100%;
    align-items: center;
    display: flex;
    font-size: 13px;
`
const Payment = styled.div`
    width: 180px;
    height: 100%;
    align-items: center;
    display: flex;
    font-size: 13px;
`

const Netpay = styled.div`
    width: 120px;
    height: 100%;
    align-items: center;
    display: flex;
    font-size: 13px;
`

const Taxes = styled.div`
    width: 180px;
    height: 100%;
    align-items: center;
    display: flex;
    font-size: 13px;
`

const Gross = styled.div`
    width: 120px;
    height: 100%;
    align-items: center;
    display: flex;
    font-size: 13px;
`

const Name = styled.div`
    width: 250px;
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 13px;
`

const Lists = styled.div`
    width: 95%;
    height: 100%;
    display: flex;
`

const Table = styled.div`
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #c5c5c5;
    display: flex;
    align-items: center;
    justify-content: center;
`

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
    border-bottom: 1px solid #d3d3d3;
    display: flex;
    align-items: center;
`

const Wrapper = styled.div`
    width: 93%;
    display: flex;
    border: 1px solid #d6dee9;
    margin-top: 110px;
    flex-direction: column;
`

const Container = styled.div`
    width: calc(100vw - 270px);
    display: flex;
    justify-content: center;
`