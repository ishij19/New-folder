import styled from "styled-components";

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

  @media (max-width: 768px) {
    padding: 1rem 0.5rem;
  }
  background-color: transparent;
`;

const Logo = styled.div`
  font-weight: 700;
  font-size: 1.25rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
  color: #eee;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;

  @media (min-width: 768px) {
    gap: 1.5rem;
  }
`;

const NavLink = styled.a`
  color: #eee;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    color: #ddd;
  }
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <Logo>MyPortfolio</Logo>
      <Nav>
        <NavLink href="#profile">Profile</NavLink>
        <NavLink href="#projects">Projects</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </Nav>
    </HeaderWrapper>
  );
}
