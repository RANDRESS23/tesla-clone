import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ShopContent = ({ products }) => {
  return (
    <Container>
      {
        products.map(({ url, srcProduct, title }) => (
          <Card key={title}>
            <ImageContainer to={url}>
              <img src={srcProduct} alt={title} />
            </ImageContainer>
            <TitleCard>{title}</TitleCard>
          </Card>
        ))
      }
    </Container>
  )
}

const Container = styled.section`
  display: flex;
  justify-content: center;
  padding: 0 60px 0 60px;
  gap: 20px;
  width: 90%;
  margin: auto;
  padding-top: 120px;
  padding-bottom: 60px;
`

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
