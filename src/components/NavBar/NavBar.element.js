import styled from 'styled-components';

export const NavbarContainer = styled.div`
width: 100%;
height: 88px;
position: sticky;
top: 0;
z-index: 99;
background-color: #DADAD1;
`;

export const NavbarWrapper = styled.div`
margin: auto;
width: 100%;
height: 100%;
align-items: center;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
;`

export const IconLogo = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: flex-start;
align-items: center;
font-family: "Ibarra Real Nova";
font-size: 1.2rem;
color: #1A1A01;
`;

export const Menu = styled.ul`
height: 100%;
display: flex;
justify-content: center;
align-items: center;

@media screen and (max-width: 968px) {
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: 0;
    flex-direction: column;
    transition: 0.5s all ease-in;
    background-color: #1A1A01;
}
`;

export const MenuItem =styled.li`
    height: 100%;
    padding: 0.5rem 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    font-family: 'Ibarra Real Nova';
    font-weight: 400;

    &:hover{
        background-color: #959583;
        border-bottom: 0.3rem solid #ebc88b;
        transition: 0.4s ease-in;
    }

    @media screen and (max-width: 960px) {
        width: 100%;
        height: 70px;
    }
`;

export const MenuItemLink = styled.a`
    text-decoration: none;
    color: #1A1A01;
`;

export const IconLogoMobile = styled.div`
display: none;

    @media screen and (max-width: 960px) {
        display: flex;
        color: #ebc08b;
        font-size: 2rem;
    }
`;