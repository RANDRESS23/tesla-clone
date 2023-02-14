import { useState, useEffect } from 'react'
import styled from 'styled-components'
import CloseIcon from '@mui/icons-material/Close'
import LanguageIcon from '@mui/icons-material/Language'
import { BurgerNavItems } from '../services/BurgerNavItems'
import { Link, useNavigate, useLocation } from 'react-router-dom'

const PATHS_DARK = ['/', '/ModelS', '/ModelX', '/SolarPanels']

export default function Header ({ showNavBurger, setShowNavBurger }) {
  const [isColorHeaderDark, setIsColorHeaderDark] = useState(true)
  const navigate = useNavigate()
  const location = useLocation()

  const handleRedirectToHome = () => {
    if (location.pathname === '/') {
      document.location.href = '#Model 3'
    }
    navigate('/')
  }

  useEffect(() => {
    if (PATHS_DARK.includes(location.pathname)) {
      setIsColorHeaderDark(true)
    } else setIsColorHeaderDark(false)
  }, [location.pathname])

  return (
    <Container location={location}>
      <ImgContainer onClick={handleRedirectToHome}>
        <Logo
          src={isColorHeaderDark ? '../../public/images/logo-dark.svg' : '../../public/images/logo-light.svg'}
          alt='logo'
        />
      </ImgContainer>
      <div>
        <MenuUl>
          <ItemList>
            <LinkMenu
              to='/ModelS'
              style={isColorHeaderDark ? { color: '#393c41' } : { color: '#fff' }}
            >Model S
            </LinkMenu>
          </ItemList>
          <ItemList>
            <LinkMenu
              to='/Model3'
              style={isColorHeaderDark ? { color: '#393c41' } : { color: '#fff' }}
            >Model 3
            </LinkMenu>
          </ItemList>
          <ItemList>
            <LinkMenu
              to='/ModelX'
              style={isColorHeaderDark ? { color: '#393c41' } : { color: '#fff' }}
            >Model X
            </LinkMenu>
          </ItemList>
          <ItemList>
            <LinkMenu
              to='/ModelY'
              style={isColorHeaderDark ? { color: '#393c41' } : { color: '#fff' }}
            >Model Y
            </LinkMenu>
          </ItemList>
          <ItemList>
            <LinkMenu
              to='/SolarRoof'
              style={isColorHeaderDark ? { color: '#393c41' } : { color: '#fff' }}
            >Solar Roof
            </LinkMenu>
          </ItemList>
          <ItemList>
            <LinkMenu
              to='/SolarPanels'
              style={isColorHeaderDark ? { color: '#393c41' } : { color: '#fff' }}
            >Solar Panels
            </LinkMenu>
          </ItemList>
        </MenuUl>
      </div>
      <div>
        <MenuUl>
          <ItemList isView={false}>
            <LinkMenu
              to='/Shop'
              style={isColorHeaderDark ? { color: '#393c41' } : { color: '#fff' }}
            >Shop
            </LinkMenu>
          </ItemList>
          <ItemList isView={false}>
            <LinkMenu
              to='/Account'
              style={isColorHeaderDark ? { color: '#393c41' } : { color: '#fff' }}
            >Account
            </LinkMenu>
          </ItemList>
          <ItemList isView>
            <LinkMenu
              style={isColorHeaderDark ? { color: '#393c41' } : { color: '#fff' }}
              to='#' onClick={(e) => {
                e.preventDefault()
                setShowNavBurger(true)
              }}
            >Menu
            </LinkMenu>
          </ItemList>
        </MenuUl>
      </div>
      <BurgerNavContainer showNavBurger={showNavBurger}>
        <BurgerNav showNavBurger={showNavBurger}>
          <CloseContainer>
            <CloseIconContainer onClick={() => setShowNavBurger(false)}>
              <CloseIcon />
            </CloseIconContainer>
          </CloseContainer>
          {
              BurgerNavItems.map(({ name, url }) => (
                <BurgerItem key={name}>
                  <BurgerLink href={url}>{name}</BurgerLink>
                </BurgerItem>
              ))
              }
          <LanguageContainer>
            <LanguageIcon />
            <LanguageTitleContainer>
              <LanguageTitle>United States</LanguageTitle>
              <LanguageSubTitle>English</LanguageSubTitle>
            </LanguageTitleContainer>
          </LanguageContainer>
        </BurgerNav>
      </BurgerNavContainer>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  min-height: 60px;
  position: ${props => props.location.pathname === '/' ? 'fixed' : 'absolute'};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
`

const ImgContainer = styled.div`
  padding-left: 28px;
  cursor: pointer;
`

const Logo = styled.img`
  width: 130px; 
  height: 15px;
`

const MenuUl = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ItemList = styled.li`
  @media (max-width: 1115px) {
    display: ${props => props.isView ? 'block' : 'none'};
  }
`

const LinkMenu = styled(Link)`
  /* color: ${({ isColorHeaderDark }) => isColorHeaderDark ? '#393c41' : '#fff'}; */
  font-size: 15px;
  font-weight: 600;
  padding: 7px 16px;
  border-radius: 4px;
  text-decoration: none;
  transition: .3s ease all;

  :hover {
    background-color: #d7e4ee;
  }
`

const BurgerNavContainer = styled.div`
  position: fixed;
  z-index: 100;
  display: flex;
  justify-content: flex-end;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(23, 26, 32, 0.35);
  backdrop-filter: blur(4px);
  transform: ${props => props.showNavBurger ? 'translateX(0%)' : 'translateX(100%)'};
  transition: transform .6s ease;
`

const BurgerNav = styled.ul`
  width: 310px;
  overflow-y: scroll;
  background-color: #fff;
  list-style: none;
  display: flex;
  flex-direction: column;
  padding-bottom: 100px;
`

const CloseContainer = styled.div`
  position: sticky;
  top: 0;
  right: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 20px;
  background-color: #fff;
`

const CloseIconContainer = styled.div`
  padding: 8px;
  width: 40px;
  height: 40px;
  border-radius: 4px;
  transition: .3s ease all;
  cursor: pointer;

  :hover {
    background-color: #f2f2f2;
  }
`

const BurgerItem = styled.li`
  padding: 4px 30px 4px 30px;
`

const BurgerLink = styled.a`
  font-size: 16px;
  font-weight: 600;
  padding: 7px 16px 7px 15px;
  border-radius: 4px;
  text-decoration: none;
  display: flex;
  width: 100%;
  transition: .3s ease all;
  
  :hover {
    background-color: #f2f2f2;
  }
`

const LanguageContainer = styled.div`
  display: flex;
  margin: 4px 30px 4px 30px;
  padding: 7px 16px 7px 15px;
  transition: .3s ease all;
  border-radius: 4px;
  cursor: pointer;
  
  :hover {
    background-color: #f2f2f2;
  }
`

const LanguageTitleContainer = styled.div`
  padding-left: 7px;
`

const LanguageTitle = styled.p`
  font-size: 16px;
  font-weight: 600;
`

const LanguageSubTitle = styled.p`
  font-size: 14px;
  border-bottom: 2px solid transparent;
  transition: .5s ease all;
  width: 45px;

  :hover {
    border-bottom: 2px solid #000;
  }
`
