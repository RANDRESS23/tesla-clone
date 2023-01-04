import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu'

export default function Header () {
  return (
    <Container>
      <ImgContainer href='#'>
        <Logo src='../../public/images/logo.svg' alt='logo' />
      </ImgContainer>
      <Menu>
        <MenuUl>
          <ItemList>
            <LinkMenu href='#'>Model S</LinkMenu>
          </ItemList>
          <ItemList>
            <LinkMenu href='#'>Model 3</LinkMenu>
          </ItemList>
          <ItemList>
            <LinkMenu href='#'>Model X</LinkMenu>
          </ItemList>
          <ItemList>
            <LinkMenu href='#'>Model Y</LinkMenu>
          </ItemList>
          <ItemList>
            <LinkMenu href='#'>Solar Roof</LinkMenu>
          </ItemList>
          <ItemList>
            <LinkMenu href='#'>Solar Panels</LinkMenu>
          </ItemList>
        </MenuUl>
      </Menu>
      <Menu>
        <MenuUl>
          <ItemList>
            <LinkMenu href='#'>Shop</LinkMenu>
          </ItemList>
          <ItemList>
            <LinkMenu href='#'>Account</LinkMenu>
          </ItemList>
        </MenuUl>
      </Menu>
      <CustomHamburgerMenu>
        <MenuIcon />
      </CustomHamburgerMenu>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  /* background-color: red; */
`

const ImgContainer = styled.a`
  padding-left: 28px;
  /* background-color: aqua; */
`

const Logo = styled.img`
  height: 15px;
  width: 130px;
`

const Menu = styled.div`
  @media (max-width: 1115px) {
    display: none;
  }
`

const MenuUl = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: lightgreen; */
`
const ItemList = styled.li`
  /* background-color: pink; */
`

const LinkMenu = styled.a`
  font-size: 15px;
  font-weight: 600;
  padding: 7px 16px;
  border-radius: 4px;
  text-decoration: none;

  :hover {
    background-color: #d7e4ee;
  }
`
const CustomHamburgerMenu = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 1115px) {
    display: block;
  }
`
// https://www.npmjs.com/package/react-intersection-observer
// https://codesandbox.io/s/inview-render-props-hvhcb?fontsize=14&hidenavigation=1&theme=dark&file=/src/index.tsx
