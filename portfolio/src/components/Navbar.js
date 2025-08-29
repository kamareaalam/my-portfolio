import React, { useState } from "react";
import styled, { useTheme } from "styled-components";
import { Bio } from "../data/constants";
import { MenuRounded } from "@mui/icons-material";

// Navbar wrapper
const Nav = styled.div`
  background-color: ${({ theme }) => theme.bg};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 10;
`;

const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavItems = styled.ul`
  display: flex;
  align-items: center;
  gap: 32px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const GithubButton = styled.a`
  border: 1px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s ease-in-out;
  text-decoration: none;

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text_primary};
  }
`;

const MobileControls = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
  }
`;

const MobileIcon = styled.div`
  color: ${({ theme }) => theme.text_primary};
  cursor: pointer;
`;

const MobileName = styled.div`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 600;
  font-size: 20px;
`;

const MobileMenu = styled.ul`
  position: absolute;
  top: 80px;
  left: 0;
  right: 0;
  width: 100%;
  background: ${({ theme }) => theme.card_light + 99};
  list-style: none;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  padding: 20px 24px;
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  transition: all 0.3s ease-in-out;
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();

  return (
    <Nav>
      <NavbarContainer>
        {/* Mobile Menu: Hamburger + Name */}
        <MobileControls>
          <MobileIcon onClick={() => setIsOpen(!isOpen)}>
            <MenuRounded style={{ fontSize: "28px" }} />
          </MobileIcon>
          <MobileName>Kamare Aalam</MobileName>
        </MobileControls>

        {/* Desktop Menu */}
        <NavItems>
          <NavLink href="#About">About</NavLink>
          <NavLink href="#Skills">Skills</NavLink>
          <NavLink href="#Experience">Experience</NavLink>
          <NavLink href="#Projects">Projects</NavLink>
          <NavLink href="#Education">Education</NavLink>
        </NavItems>

        {/* Mobile Dropdown Menu */}
        <MobileMenu isOpen={isOpen}>
          <NavLink href="#About" onClick={() => setIsOpen(false)}>About</NavLink>
          <NavLink href="#Skills" onClick={() => setIsOpen(false)}>Skills</NavLink>
          <NavLink href="#Experience" onClick={() => setIsOpen(false)}>Experience</NavLink>
          <NavLink href="#Projects" onClick={() => setIsOpen(false)}>Projects</NavLink>
          <NavLink href="#Education" onClick={() => setIsOpen(false)}>Education</NavLink>
          <GithubButton
            href={Bio.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: theme.primary,
              color: theme.text_primary,
            }}
          >
            Github Profile
          </GithubButton>
        </MobileMenu>

        {/* Desktop Github Button */}
        <ButtonContainer>
          <GithubButton href={Bio.github} target="_blank" rel="noopener noreferrer">
            Github Profile
          </GithubButton>
        </ButtonContainer>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
