import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const DiscoverContent = () => {
  return (
    <Container>
      <ContainerColumn>
        <Title>Resources</Title>
        <LinksContainer>
          <LinkTitle to='/'>Demo Drive</LinkTitle>
          <LinkTitle to='/'>Insurance</LinkTitle>
          <LinkTitle to='/'>Video Guides</LinkTitle>
          <LinkTitle to='/'>Customer Stories</LinkTitle>
          <LinkTitle to='/'>Events</LinkTitle>
        </LinksContainer>
      </ContainerColumn>
      <ContainerColumn>
        <Title>Location Services</Title>
        <LinksContainer>
          <LinkTitle to='/'>Find Us</LinkTitle>
          <LinkTitle to='/'>Find a Collision Center</LinkTitle>
          <LinkTitle to='/'>Find a Certified Installer</LinkTitle>
        </LinksContainer>
      </ContainerColumn>
      <ContainerColumn>
        <Title>Company</Title>
        <LinksContainer>
          <LinkTitle to='/'>About</LinkTitle>
          <LinkTitle to='/'>Careers</LinkTitle>
          <LinkTitle to='/'>Investor Relations</LinkTitle>
        </LinksContainer>
      </ContainerColumn>
    </Container>
  )
}

const Container = styled.section`
  display: flex;
  justify-content: center;
  padding: 0 60px 0 60px;
  gap: 100px;
  width: 90%;
  margin: auto;
  padding-top: 130px;
  padding-bottom: 90px;
`

const ContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`

const Title = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: #6a6c6e;
`

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 15px;
`

const LinkTitle = styled(Link)`
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  transition: .3s ease all;

  &:hover {
    border-bottom: 2px solid #000;
  }
`
