import { IconLogo, MenuItem, MenuItemLink, NavbarContainer, NavbarWrapper, Menu, IconLogoMobile } from "./NavBar.element"
import { FaBookReader } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import  CartWidget  from "./CartWidget"

const NavBar = () => {
  return (
    <>
    <NavbarContainer>
        <NavbarWrapper>
            <IconLogo> 
            <FaBookReader size={"2em"}/>
             Libreria CYB
            </IconLogo>
            <IconLogoMobile>
                <FaBars/>
            </IconLogoMobile>
            <Menu>
                <MenuItem>
                    <MenuItemLink> Inicio </MenuItemLink>
                </MenuItem>
                <MenuItem>
                    <MenuItemLink> Nosotros </MenuItemLink>
                </MenuItem>
                <MenuItem>
                    <MenuItemLink> Ofertas </MenuItemLink>
                </MenuItem>
                <MenuItem>
                    <MenuItemLink> Catalogo </MenuItemLink>
                </MenuItem>
                <CartWidget/>
            </Menu>
        </NavbarWrapper>
    </NavbarContainer>
    </>
  )
}

export default NavBar;

