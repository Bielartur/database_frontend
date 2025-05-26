import { Outlet } from "react-router-dom";
import { Container, Line, Navbar, StyledLink } from "./styled";

export function MainLayout() {
  return (
    <Container>
      <Navbar>
        <StyledLink to={"gameform"}>Criar game</StyledLink>
        <StyledLink to={"gamesearch"}>Procurar por game </StyledLink>
        <StyledLink to={"gamelist"}>Lista de games</StyledLink>
      </Navbar>
      <Line />
      <Outlet />
    </Container>
  );
}
