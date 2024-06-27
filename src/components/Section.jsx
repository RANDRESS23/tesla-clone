import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'

const TITLES_WITH_TEXT_WHITE = ['Model S', 'Solar Panels']
const TITLES_WITHOUT_SUBTITLES = ['Cybertruck', 'Solar Panels', 'Solar Roof', 'Powerwall', 'Accessories']

export default function Section ({
  title, subtitle, subscript, txtLeftButton, txtRightButton, backgroundImg, showNavBurger
}) {
  const navigate = useNavigate()

  const handleNextSection = () => {
    document.location.href = '#Model Y'
    navigate('/')
  }

  return (
    <Wrap bgImage={backgroundImg} id={title}>
      {
        title === 'Cybertruck'
          ? (
            <img src='cybertruck-title.svg' alt='Cybertruck' />
            )
          : (
            <TitleContent>
              <Title isTextWhite={TITLES_WITH_TEXT_WHITE.includes(title)}>{title}</Title>
              {
                title === 'Solar Panels'
                  ? (
                    <LinkSolarPanel to='/'>{subtitle}</LinkSolarPanel>
                    )
                  : title === 'Solar Roof'
                    ? (
                      <SubTitleSolarRoof>{subtitle}</SubTitleSolarRoof>
                      )
                    : (
                      <SubTitle isTextWhite={TITLES_WITH_TEXT_WHITE.includes(title)}>
                        {subtitle}
                        <Subscript isTextWhite={TITLES_WITH_TEXT_WHITE.includes(title)}>{subscript}</Subscript>
                      </SubTitle>
                      )
              }
              {
                !TITLES_WITHOUT_SUBTITLES.includes(title) && (
                  <SubTitle2 isTextWhite={TITLES_WITH_TEXT_WHITE.includes(title)}>
                    After Est. Savings
                  </SubTitle2>
                )
              }
            </TitleContent>
            )
      }
      <ButtonGroup>
        <LeftButton showNavBurger={showNavBurger}>{txtLeftButton}</LeftButton>
        {txtRightButton !== '' &&
          <RightButton showNavBurger={showNavBurger}>{txtRightButton}</RightButton>}
      </ButtonGroup>
      {title === 'Model 3'
        ? (
          <DownArrow
            src='../../public/images/down-arrow-dark.svg'
            showNavBurger={showNavBurger}
            onClick={handleNextSection}
          />
          )
        : <p>''</p>}
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

const TitleContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Title = styled.h1`
  color: ${({ isTextWhite }) => isTextWhite ? '#fff' : '#171a20'};
  font-size: 45px;
  font-weight: 600;
  text-align: center;
  line-height: 48px;
  padding: 100px 24px 0px 24px;
`

const SubTitle = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: 500;
  line-height: 20px;
  text-align: center;
  padding: 7px 24px 10px;
  color: ${({ isTextWhite }) => isTextWhite ? '#fff' : '#2e3033'};
`

const LinkSolarPanel = styled(Link)`
  font-size: 14px;
  color: #eee;
  font-weight: 500;
  text-decoration: none;
  line-height: 20px;
  text-align: center;
  padding-top: 15px;
  padding-bottom: 1px;
  border-bottom: 2px solid #eee;
  transition: .3s ease all;

  &:hover {
    border-bottom: 2px solid #fff;
  }
`

const SubTitleSolarRoof = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  text-align: center;
  padding-top: 15px;
`

const Subscript = styled.span`
  margin-bottom: 13px;
  font-size: 18px;
  color: ${({ isTextWhite }) => isTextWhite ? '#fff' : '#2e3033'};
`

const SubTitle2 = styled.p`
  font-size: 14px;
  line-height: 10px;
  text-align: center;
  padding: 0px 24px 14px;
  color: ${({ isTextWhite }) => isTextWhite ? '#fff' : '#2e3033'};
`

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 240px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const LeftButton = styled.a`
  width: 265px;
  padding: 11px 24px;
  text-align: center;
  font-size: 15px;
  font-weight: 700;
  color: #393c41;
  border-radius: 4px;
  background-color: #f4f4f4;
  ${props => !props.showNavBurger && 'backdrop-filter: blur(8px)'};
  cursor: pointer;
  transition: .3s ease all;

  :hover {
    background-color: #eee;
  }

  @media (max-width: 768px) {
    width: 80%;
  }
`

const RightButton = styled(LeftButton)`
  color: #fff;
  background-color: #171a20;
  transition: .3s ease all;

  :hover {
    background-color: #393c41;
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
