import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { CardProduct } from './CardProduct'

export const ProductsContent = ({ products, linksAside }) => {
  return (
    <Container>
      <ContainerCars>
        {
          products.map(({ url, srcCar, title }) => (
            <CardProduct
              key={title}
              url={url}
              srcCar={srcCar}
              title={title}
            />
          ))
        }
      </ContainerCars>
      <LinksContainer>
        {
          linksAside.map((title) => (
            <LinkAside key={title} to='/'>{title}</LinkAside>
          ))
        }
      </LinksContainer>
    </Container>
  )
}

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 50px;
`

const ContainerCars = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px 50px;
  width: 75%;
`

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
  width: 25%;
  border-left: 1px solid #e0e0e0;
  padding-left: 50px;
  padding-top: 10px;
  padding-bottom: 60px;
`

const LinkAside = styled(Link)`
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  transition: .3s ease all;

  &:hover {
    border-bottom: 2px solid #000;
  }
`
