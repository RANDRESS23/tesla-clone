import { useState, useEffect } from 'react'
import styled from 'styled-components'
import CloseIcon from '@mui/icons-material/Close'
import LanguageIcon from '@mui/icons-material/Language'
import { BurgerNavItems } from '../services/BurgerNavItems'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useHoversNavBar } from '../hooks/useHoversNavBar'
import { ProductsContent } from './LinksContents/ProductsContent'
import { DiscoverContent } from './LinksContents/DiscoverContent'
import { ShopContent } from './LinksContents/ShopContent'

const PATHS_DARK = ['/', '/models', '/modelx', '/solar-panels']

export default function Header ({ showNavBurger, setShowNavBurger }) {
  const [isColorHeaderDark, setIsColorHeaderDark] = useState(true)
  const navigate = useNavigate()
  const location = useLocation()
  const {
    showContentVehicles,
    showContentEnergy,
    showContentCharging,
    showContentDiscover,
    showContentShop,
    hoverLogoRef,
    hoverSupportRef,
    hoverLangRef,
    hoverAccountRef,
    hoverVehiclesRef,
    hoverVehiclesContentRef,
    hoverEnergyRef,
    hoverEnergyContentRef,
    hoverChargingRef,
    hoverChargingContentRef,
    hoverDiscoverRef,
    hoverDiscoverContentRef,
    hoverShopRef,
    hoverShopContentRef
  } = useHoversNavBar()

  const handleRedirectToHome = () => {
    if (location.pathname === '/') document.location.href = '#Model 3'

    navigate('/')
  }

  useEffect(() => {
    if (PATHS_DARK.includes(location.pathname)) setIsColorHeaderDark(true)
    else setIsColorHeaderDark(false)
  }, [location.pathname])

  return (
    <div>
      <Container>
        {
          !showNavBurger && (
            <ImgContainer ref={hoverLogoRef} onClick={handleRedirectToHome}>
              <Logo
                src={(isColorHeaderDark || showContentVehicles || showContentEnergy || showContentCharging || showContentDiscover || showContentShop) ? 'images/logo-dark.svg' : 'images/logo-light.svg'}
                alt='logo'
              />
            </ImgContainer>
          )
        }
        <div>
          <MenuUl>
            <ItemList>
              <LinkMenu
                to='/'
                ref={hoverVehiclesRef}
                ishoverlink={showContentVehicles.toString()}
                ishoverheader={(showContentVehicles || showContentEnergy || showContentCharging || showContentDiscover || showContentShop).toString()}
                iscolorheaderdark={isColorHeaderDark.toString()}
              >Vehicles
              </LinkMenu>
            </ItemList>
            <ItemList>
              <LinkMenu
                to='/'
                ref={hoverEnergyRef}
                ishoverlink={showContentEnergy.toString()}
                ishoverheader={(showContentVehicles || showContentEnergy || showContentCharging || showContentDiscover || showContentShop).toString()}
                iscolorheaderdark={isColorHeaderDark.toString()}
              >Energy
              </LinkMenu>
            </ItemList>
            <ItemList>
              <LinkMenu
                to='/'
                ref={hoverChargingRef}
                ishoverlink={showContentCharging.toString()}
                ishoverheader={(showContentVehicles || showContentEnergy || showContentCharging || showContentDiscover || showContentShop).toString()}
                iscolorheaderdark={isColorHeaderDark.toString()}
              >Charging
              </LinkMenu>
            </ItemList>
            <ItemList>
              <LinkMenu
                to='/'
                ref={hoverDiscoverRef}
                ishoverlink={showContentDiscover.toString()}
                ishoverheader={(showContentVehicles || showContentEnergy || showContentCharging || showContentDiscover || showContentShop).toString()}
                iscolorheaderdark={isColorHeaderDark.toString()}
              >Discover
              </LinkMenu>
            </ItemList>
            <ItemList>
              <LinkMenu
                to='/'
                ref={hoverShopRef}
                ishoverlink={showContentShop.toString()}
                ishoverheader={(showContentVehicles || showContentEnergy || showContentCharging || showContentDiscover || showContentShop).toString()}
                iscolorheaderdark={isColorHeaderDark.toString()}
              >Shop
              </LinkMenu>
            </ItemList>
          </MenuUl>
        </div>
        <div>
          <MenuUl>
            <ItemList isView={false}>
              <LinkMenuIcon
                to={location.pathname}
                ref={hoverSupportRef}
              >
                {
                  (isColorHeaderDark || showContentVehicles || showContentEnergy || showContentCharging || showContentDiscover || showContentShop)
                    ? (
                      <IconHeader
                        src='images/support.svg'
                        alt='support'
                      />
                      )
                    : (
                      <IconHeader
                        src='images/support-light.svg'
                        alt='support'
                      />
                      )
                }
              </LinkMenuIcon>
            </ItemList>
            <ItemList isView={false}>
              <LinkMenuIcon
                to={location.pathname}
                ref={hoverLangRef}
              >
                {
                  (isColorHeaderDark || showContentVehicles || showContentEnergy || showContentCharging || showContentDiscover || showContentShop)
                    ? (
                      <IconHeader
                        src='images/lang.svg'
                        alt='lang'
                      />
                      )
                    : (
                      <IconHeader
                        src='images/lang-light.svg'
                        alt='lang'
                      />
                      )
                }
              </LinkMenuIcon>
            </ItemList>
            <ItemList isView={false}>
              <LinkMenuIcon
                to={location.pathname}
                ref={hoverAccountRef}
              >
                {
                  (isColorHeaderDark || showContentVehicles || showContentEnergy || showContentCharging || showContentDiscover || showContentShop)
                    ? (
                      <IconHeader
                        src='images/account.svg'
                        alt='account'
                      />
                      )
                    : (
                      <IconHeader
                        src='images/account-light.svg'
                        alt='account'
                      />
                      )
                }
              </LinkMenuIcon>
            </ItemList>
            {
              !showNavBurger && (
                <ItemList isView>
                  <LinkMenu
                    iscolorheaderdark={isColorHeaderDark.toString()}
                    to='/'
                    onClick={(e) => {
                      e.preventDefault()
                      setShowNavBurger(true)
                    }}
                  >Menu
                  </LinkMenu>
                </ItemList>
              )
            }
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
                  <RightArrow
                    src='images/right-arrow.svg'
                  />
                </BurgerItem>
              ))
            }
            <LanguageContainer>
              <LanguageIcon />
              <LanguageTitleContainer>
                <LanguageTitle>United States</LanguageTitle>
                <LanguageSubTitle>English</LanguageSubTitle>
              </LanguageTitleContainer>
              <RightArrowContainer>
                <RightArrow2
                  src='images/right-arrow.svg'
                />
              </RightArrowContainer>
            </LanguageContainer>
          </BurgerNav>
        </BurgerNavContainer>
        <ContainerLink ishover={showContentVehicles}>
          <ContainerLinkContent ref={hoverVehiclesContentRef} ishover={showContentVehicles || showContentEnergy || showContentCharging || showContentDiscover || showContentShop}>
            <ProductsContent
              products={[
                {
                  url: '/models',
                  srcCar: 'images/vehicle-model-s.avif',
                  title: 'Model S'
                },
                {
                  url: '/model3',
                  srcCar: 'images/vehicle-model-3.avif',
                  title: 'Model 3'
                },
                {
                  url: '/modelx',
                  srcCar: 'images/vehicle-model-x.avif',
                  title: 'Model X'
                },
                {
                  url: '/modely',
                  srcCar: 'images/vehicle-model-y.avif',
                  title: 'Model Y'
                },
                {
                  url: '/cybertruck',
                  srcCar: 'images/vehicle-cybertruck.avif',
                  title: 'Cybertruck'
                },
                {
                  url: '/choose',
                  srcCar: 'images/vehicles-choose.avif',
                  title: 'Heelp Me Choose'
                }
              ]}
              linksAside={['Inventory', 'Used Cards', 'Demo Drive', 'Trade-in', 'Compare', 'Help Me Charge', 'Fleet', 'Semi', 'Roadster']}
            />
          </ContainerLinkContent>
        </ContainerLink>
        <ContainerLink ishover={showContentEnergy}>
          <ContainerLinkContent ref={hoverEnergyContentRef} ishover={showContentVehicles || showContentEnergy || showContentCharging || showContentDiscover || showContentShop}>
            <ProductsContent
              products={[
                {
                  url: '/solar-panels',
                  srcCar: 'images/energy-solar-panels.avif',
                  title: 'Solar Panels'
                },
                {
                  url: '/solar-roof',
                  srcCar: 'images/energy-solar-roof.avif',
                  title: 'Solar Roof'
                },
                {
                  url: '/powerwall',
                  srcCar: 'images/energy-powerwall.avif',
                  title: 'Powerwall'
                },
                {
                  url: '/megaapack',
                  srcCar: 'images/energy-megapack.avif',
                  title: 'Megapack'
                }
              ]}
              linksAside={['Schedule a Consultation', 'Why Solar', 'Incentives', 'Support', 'Partner with Tesla', 'Commercial', 'Utilities']}
            />
          </ContainerLinkContent>
        </ContainerLink>
        <ContainerLink ishover={showContentCharging}>
          <ContainerLinkContent ref={hoverChargingContentRef} ishover={showContentVehicles || showContentEnergy || showContentCharging || showContentDiscover || showContentShop}>
            <ProductsContent
              products={[
                {
                  url: '/charging',
                  srcCar: 'images/charging-charging.avif',
                  title: 'Charging'
                },
                {
                  url: '/home-charging',
                  srcCar: 'images/charging-home-charging.avif',
                  title: 'Home Charging'
                },
                {
                  url: '/supercharger',
                  srcCar: 'images/charging-supercharging.avif',
                  title: 'Supercharging'
                }
              ]}
              linksAside={['Help Me Charge', 'Charging Calculator', 'Charging With NACS', 'Supercharger Voting', 'Host a Supercharger', 'Commercial Charging', 'Host Wall Connectors']}
            />
          </ContainerLinkContent>
        </ContainerLink>
        <ContainerLink ishover={showContentDiscover}>
          <ContainerLinkContent ref={hoverDiscoverContentRef} ishover={showContentVehicles || showContentEnergy || showContentCharging || showContentDiscover || showContentShop}>
            <DiscoverContent />
          </ContainerLinkContent>
        </ContainerLink>
        <ContainerLink ishover={showContentShop}>
          <ContainerLinkContent ref={hoverShopContentRef} ishover={showContentVehicles || showContentEnergy || showContentCharging || showContentDiscover || showContentShop}>
            <ShopContent
              products={[
                {
                  url: '/charging',
                  srcProduct: 'images/charging-home-charging.avif',
                  title: 'Charging'
                },
                {
                  url: '/vehicle-accessories',
                  srcProduct: 'images/shop-vehicle-accessories.avif',
                  title: 'Vehicle Accessories'
                },
                {
                  url: '/apparel',
                  srcProduct: 'images/shop-apparel.avif',
                  title: 'Apparel'
                },
                {
                  url: '/lifestyle',
                  srcProduct: 'images/shop-lifestyle.avif',
                  title: 'Lifestyle'
                }
              ]}
            />
          </ContainerLinkContent>
        </ContainerLink>
      </Container>
    </div>
  )
}

const ContainerLink = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  background-color: rgba(23, 26, 32, 0.35);
  backdrop-filter: blur(4px);
  opacity: ${props => props.ishover ? '100%' : '0%'};
  transition: .3s ease all;
  visibility: ${props => props.ishover ? 'visible' : 'hidden'};
`

const ContainerLinkContent = styled.div`
  transition: .2s ease all;
  width: 100%;
  background-color: #fff;
  transform: ${props => props.ishover ? 'translateY(0%)' : 'translateY(-150%)'};
  transition: transform .6s ease;
  max-height: 90vh;
  min-height: 40vh;
  overflow-y: auto;
`

const Container = styled.div`
  transition: .3s ease all;
  width: 100%;
  min-height: 60px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  z-index: 100;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`

const ImgContainer = styled.div`
  position: relative;
  z-index: 200;
  cursor: pointer;
`

const Logo = styled.img`
  width: 130px; 
  height: 15px;
`

const IconHeader = styled.img`
  width: 24px;
  height: 24px;
  margin: 0px 2px;
`

const MenuUl = styled.ul`
  position: relative;
  z-index: 200;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  `

const ItemList = styled.li`
  display: ${props => props.isView && 'none'};

  @media (max-width: 1115px) {
    display: ${props => props.isView ? 'block' : 'none'};
  }
`

const LinkMenu = styled(Link)`
  background-color: ${({ ishoverlink }) => ishoverlink === 'true' && 'rgba(0, 0, 0, 0.05)'};
  color: ${({ iscolorheaderdark, ishoverheader }) => (iscolorheaderdark === 'true' || ishoverheader === 'true') ? '#393c41' : '#fff'};
  font-size: 15px;
  font-weight: 600;
  padding: 7px 16px;
  border-radius: 4px;
  text-decoration: none;
  transition: .3s ease all;
  
  :hover {
    color: ${({ ishoverheader }) => ishoverheader === 'true' && '#393c41'};
    background-color: rgba(0, 0, 0, 0.05);
    backdrop-filter: blur(16px);
  }
`

const LinkMenuIcon = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: 600;
  padding: 3px;
  border-radius: 4px;
  text-decoration: none;
  transition: .3s ease all;
  margin: 0px 2px;

  :hover {
    background-color: rgba(0, 0, 0, 0.05);
    backdrop-filter: blur(16px);
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
  background-color: #fff;
  transform: ${props => props.showNavBurger ? 'translateX(0%)' : 'translateX(100%)'};
  transition: transform .6s ease;
`

const BurgerNav = styled.ul`
  width: 100%;
  overflow-y: scroll;
  background-color: #fff;
  list-style: none;
  display: flex;
  flex-direction: column;
  padding-bottom: 100px;
  padding-right: 20px;
  padding-left: 20px;
`

const CloseContainer = styled.div`
  position: sticky;
  top: 0;
  right: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 20px 10px 40px 0px;
`

const CloseIconContainer = styled.div`
  padding: 8px;
  width: 30px;
  height: 30px;
  border-radius: 4px;
  transition: .3s ease all;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    background-color: #f2f2f2;
  }
`

const BurgerItem = styled.li`
  padding: 15px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: .3s ease all;
  cursor: pointer;
  
  :hover {
    background-color: #f2f2f2;
  }
`

const BurgerLink = styled.span`
  font-size: 18px;
  font-weight: 700;
  padding: 7px 16px 7px 15px;
  border-radius: 4px;
  text-decoration: none;
  display: flex;
  width: 100%;
`

const RightArrowContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const RightArrow = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 15px;
`

const RightArrow2 = styled.img`
  width: 15px;
  height: 15px;
`

const LanguageContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 25px;
  padding: 15px 15px;
  transition: .3s ease all;
  border-radius: 4px;
  cursor: pointer;

  :hover {
    background-color: #f2f2f2;
  }
`

const LanguageTitleContainer = styled.div`
  padding-left: 7px;
  width: 100%;
`

const LanguageTitle = styled.p`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 5px;
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
