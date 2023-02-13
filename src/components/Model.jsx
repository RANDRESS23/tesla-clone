import styled from 'styled-components'

export default function Model () {
  return (
    <Wrap bgImage='model-s.jpg'>
      <div>
        <Title>Model S</Title>
        <SubTitle>Plaid</SubTitle>
      </div>
      <StatsContainer>
        <StatContent>
          <StatValue>396 mi</StatValue>
          <StatLabel>Range (Epa est.)</StatLabel>
        </StatContent>
        <StatContent>
          <StatValue>1.99 s</StatValue>
          <StatLabel>0-60 mph</StatLabel>
        </StatContent>
        <StatContent>
          <StatValue>200 mph</StatValue>
          <StatLabel>Top Speed</StatLabel>
        </StatContent>
        <StatContent>
          <StatValue>1,020 hp</StatValue>
          <StatLabel>Peak Power</StatLabel>
        </StatContent>
        <div>
          <ButtonOrder>Order Now</ButtonOrder>
        </div>
      </StatsContainer>
    </Wrap>
  )
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${props => `url('../../public/images/${props.bgImage}')`};
`

const Title = styled.h1`
  color: #171a20;
  font-size: 45px;
  font-weight: 600;
  text-align: center;
  line-height: 48px;
  padding: 110px 24px 0px 24px;
`

const SubTitle = styled.p`
  font-size: 19px;
  line-height: 20px;
  text-align: center;
  font-weight: 600;
  padding: 6px 24px 14px;
`
const StatsContainer = styled.div`
  padding-top: 60px;
  padding-bottom: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 90px;
  background: linear-gradient(transparent, #000);
`
const StatContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 7px;
`

const StatValue = styled.p`
  font-size: 25px;
  font-weight: 600;
  color: #fff;
`
const StatLabel = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #fff;
`

const ButtonOrder = styled.button`
  font-size: 16px;
  background: transparent;
  color: #fff;
  border: 3px solid #fff;
  font-weight: 600;
  border-radius: 5px;
  padding: 7px 60px;
  cursor: pointer;
  transition: .3s ease all;

  :hover {
    background-color: #fff;
    color: #000;
  }
`
