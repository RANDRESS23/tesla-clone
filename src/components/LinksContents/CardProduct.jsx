import styled from 'styled-components'
import { Link } from 'react-router-dom'

const TITLES_WITHOUT_ORDER = ['Megapack', 'Charging', 'Home Charging', 'Supercharging']

export const CardProduct = ({ url, srcCar, title }) => {
  return (
    <Card>
      <ImageContainer to={url}>
        <img src={srcCar} alt={title} />
      </ImageContainer>
      <TitleCard>{title}</TitleCard>
      <OptionsContainer>
        {
          title === 'Heelp Me Choose'
            ? (
              <LinkOption to={url}>Get Started</LinkOption>
              )
            : (
              <>
                <LinkOption to={url}>Learn</LinkOption>
                {
                  !TITLES_WITHOUT_ORDER.includes(title) && <LinkOption to={url}>Order</LinkOption>
                }
                {
                  title === 'Home Charging' && <LinkOption to={url}>Shop</LinkOption>
                }
                {
                  title === 'Supercharging' && <LinkOption to={url}>Find</LinkOption>
                }
              </>
              )
        }
      </OptionsContainer>
    </Card>
  )
}

const Card = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ImageContainer = styled(Link)`
  width: 100%;
  height: 100%;
  margin-bottom: 3px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    max-width: 200px;
    height: 100%;
    object-fit: contain;
  }
`

const TitleCard = styled.span`
  font-size: 18px;
  font-weight: 600;
`

const OptionsContainer = styled.div`
  margin-top: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`

const LinkOption = styled(Link)`
  font-size: 14px;
  color: #5c5e62;
  text-decoration: underline;
  transition: .3s ease all;

  &:hover {
    color: #000;
  }
`
