import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { CardVehicle } from './CardVehicle'

export const VehiclesLinkContent = () => {
  return (
    <Container>
      <ContainerCars>
        {/* <Card>
          <ImageContainer to='/models'>
            <img src='https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-S.png' alt='Model S' />
          </ImageContainer>
          <TitleCard>Model S</TitleCard>
          <OptionsContainer>
            <LinkOption>Learn</LinkOption>
            <LinkOption>Order</LinkOption>
          </OptionsContainer>
        </Card> */}
        <CardVehicle
          url='/ModelS'
          srcCar='https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-S.png'
          title='Model S'
        />
        <CardVehicle
          url='/Model3'
          srcCar='https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-3-Performance-LHD.png'
          title='Model 3'
        />
        <CardVehicle
          url='/ModelX'
          srcCar='https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-X.png'
          title='Model X'
        />
        <CardVehicle
          url='/ModelY'
          srcCar='https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-Y.png'
          title='Model Y'
        />
        <CardVehicle
          url='/Cybertruck'
          srcCar='https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Cybertruck-1x.png'
          title='Cybertruck'
        />
        <CardVehicle
          url='/Choose'
          srcCar='https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-HMC-RedBlue-LHD.png'
          title='Heelp Me Choose'
        />
      </ContainerCars>
      <LinksContainer>
        <LinkAside to=''>Inventory</LinkAside>
        <LinkAside to=''>Used Cards</LinkAside>
        <LinkAside to=''>Demo Drive</LinkAside>
        <LinkAside to=''>Trade-in</LinkAside>
        <LinkAside to=''>Compare</LinkAside>
        <LinkAside to=''>Help Me Charge</LinkAside>
        <LinkAside to=''>Fleet</LinkAside>
        <LinkAside to=''>Semi</LinkAside>
        <LinkAside to=''>Roadster</LinkAside>
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
  gap: 20px;
  width: 25%;
  border-left: 1px solid #e0e0e0;
  padding-left: 40px;
  padding-top: 5px;
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
