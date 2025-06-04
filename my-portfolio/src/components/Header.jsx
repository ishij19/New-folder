import styled from "styled-components";

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1rem; /* px-4 py-4 */
  background-color: transparent;
`;

const Logo = styled.div`
  font-weight: 700;
  font-size: 1.25rem; /* text-xl */
  color: #eee;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem; /* space-x-6 */
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
