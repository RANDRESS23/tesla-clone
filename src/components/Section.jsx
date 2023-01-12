import styled from 'styled-components'

export default function Section ({
  title, subtitle, txtLeftButton, txtRightButton, backgroundImg, showNavBurger
}) {
  return (
    <Wrap bgImage={backgroundImg}>
      <ItemText>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
      </ItemText>
      <ButtonGroup>
        <LeftButton showNavBurger={showNavBurger}>{txtLeftButton}</LeftButton>
        {txtRightButton !== '' &&
          <RightButton showNavBurger={showNavBurger}>{txtRightButton}</RightButton>}
      </ButtonGroup>
      <DownArrow src='../../public/images/down-arrow.svg' showNavBurger={showNavBurger} />
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
  scroll-snap-align: start;
`
const ItemText = styled.div`
  
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
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  padding: 6px 24px 14px;
`

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 260px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const LeftButton = styled.a`
  width: 265px;
  padding: 11px 24px;
  text-align: center;
  font-size: 15px;
  font-weight: 600;
  color: #ffffff;
  border-radius: 4px;
  background-color: rgba(23, 26, 32, 0.8);
  ${props => !props.showNavBurger && 'backdrop-filter: blur(8px)'};
  cursor: pointer;

  @media (max-width: 768px) {
    width: 80%;
  }
`

const RightButton = styled(LeftButton)`
  color: #393c41;
  background-color: rgba(244, 244, 244, 0.65);
`

const DownArrow = styled.img`
  ${props => !props.showNavBurger && 'opacity: .8'};
  ${props => !props.showNavBurger && 'animation: animationDown infinite 2s'};
  margin: 0px auto 20px auto;
  width: 35px;
  height: 40px;
  cursor: pointer;
`
