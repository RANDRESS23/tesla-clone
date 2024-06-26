import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { CardVehicle } from './CardVehicle'

export const VehiclesLinkContent = () => {
  return (
    <Container>
      <ContainerCars>
        <CardVehicle
          url='/ModelS'
          srcCar='../../../public/images/vehicle-model-s.avif'
          title='Model S'
        />
        <CardVehicle
          url='/Model3'
          srcCar='../../../public/images/vehicle-model-3.avif'
          title='Model 3'
        />
        <CardVehicle
          url='/ModelX'
          srcCar='../../../public/images/vehicle-model-x.avif'
          title='Model X'
        />
        <CardVehicle
          url='/ModelY'
          srcCar='../../../public/images/vehicle-model-y.avif'
          title='Model Y'
        />
        <CardVehicle
          url='/Cybertruck'
          srcCar='../../../public/images/vehicle-cybertruck.avif'
          title='Cybertruck'
        />
        <CardVehicle
          url='/Choose'
          srcCar='../../../public/images/vehicles-choose.avif'
          title='Heelp Me Choose'
        />
      </ContainerCars>
      <LinksContainer>
        <LinkAside to='/'>Inventory</LinkAside>
        <LinkAside to='/'>Used Cards</LinkAside>
        <LinkAside to='/'>Demo Drive</LinkAside>
        <LinkAside to='/'>Trade-in</LinkAside>
        <LinkAside to='/'>Compare</LinkAside>
        <LinkAside to='/'>Help Me Charge</LinkAside>
        <LinkAside to='/'>Fleet</LinkAside>
        <LinkAside to='/'>Semi</LinkAside>
        <LinkAside to='/'>Roadster</LinkAside>
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
