import React from "react";

import styled from "styled-components";


const ParentComp = () => {
  const [show, setShow] = React.useState(false);

  const Toggle = () => {
    setShow(!show);
  };
  
  return (
    <div>
      <Container>
        <Wrapper>
          <Top>
            <Left>
              <Bold>Dashboard</Bold>
              <button onClick={Toggle}>Credit Wallet</button>
            </Left>
          </Top>
        </Wrapper>
      </Container>
    </div>
  );
};

export default ParentComp;
const Bold = styled.div`
  font-size: 20px;
  font-weight: 600;
`;
const Left = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  button {
    width: 130px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0d71fa;
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    cursor: pointer;
    color: #fff;
    position: relative;
    border: none;
    outline: none;
  }
`;

const Text = styled.div`
  width: 100%;
  /* height: 10%; */
  /* background-color: blue; */
  color: #1d1d41;
  font-weight: 600;
  font-size: 22px;
  margin-bottom: 10px;
  margin-top: 20px;
  margin-left: 15px;
`;

const Wrapper = styled.div`
  width: 92%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: calc(100vw - 270px);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #F5F7FA;
  overflow: hidden;

  @media screen and (max-width: 1024px) {
    width: 100vw;
  }
`;
