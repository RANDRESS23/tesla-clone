import styled from 'styled-components'
// import { useNavigate } from 'react-router-dom'

const TITLES_DARK = ['Model S', 'Model X', 'Solar for Existing Roofs']
const TITLES_INCLUDES_DOWN_ARROW = ['Solar Roof', 'Solar for Existing Roofs']

export default function Model ({ bgUrlImage, titleModel, SubTitleModel, stats }) {
  // const navigate = useNavigate()

  const handleNextSection = () => {
    // document.location.href = '#'
    // navigate('/')
  }

  return (
    <Wrap bgImage={bgUrlImage}>
      <div>
        <Title titleModel={titleModel}>{titleModel}</Title>
        <SubTitle titleModel={titleModel}>{SubTitleModel}</SubTitle>
      </div>
      <StatsContainer titleModel={titleModel}>
        <MainStats>
          {
            stats.map(({ labelStat, valueStat }) => (
              <StatContent key={labelStat}>
                <StatValue>{valueStat}</StatValue>
                <StatLabel>{labelStat}</StatLabel>
              </StatContent>
            ))
          }
          <div>
            <ButtonOrder>Order Now</ButtonOrder>
          </div>
        </MainStats>
        {
        TITLES_INCLUDES_DOWN_ARROW.includes(titleModel) && (
          <DownArrow
            src='../../public/images/down-arrow-light.svg'
            onClick={handleNextSection}
          />
        )
        }
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
  color: ${({ titleModel }) => TITLES_DARK.includes(titleModel) ? '#171a20' : '#fff'};
  font-size: 45px;
  font-weight: 600;
  text-align: center;
  line-height: 48px;
  padding: 110px 24px 0px 24px;
`

const SubTitle = styled.p`
  color: ${({ titleModel }) => TITLES_DARK.includes(titleModel) ? '#171a20' : '#fff'};
  font-size: 19px;
  line-height: 20px;
  text-align: center;
  font-weight: 600;
  padding: 6px 24px 14px;
`

const StatsContainer = styled.div`
  padding-top: 60px;
  padding-bottom: ${({ titleModel }) => TITLES_INCLUDES_DOWN_ARROW.includes(titleModel) ? '0px' : '90px'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  background: linear-gradient(transparent, #000);
`

const MainStats = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 90px;
`

const StatContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 7px;
`

const StatValue = styled.p`
  text-align: center;
  font-size: 25px;
  font-weight: 600;
  color: #fff;
`
const StatLabel = styled.p`
  text-align: center;
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

const DownArrow = styled.img`
  ${props => !props.showNavBurger && 'opacity: .8'};
  ${props => !props.showNavBurger && 'animation: animationDown infinite 2s'};
  margin: 0px auto 20px auto;
  width: 35px;
  height: 40px;
  cursor: pointer;
`
