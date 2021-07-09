import { Nav, Navbar } from "react-bootstrap";

export const MainMenu = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Movies</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#Home">Home</Nav.Link>
          <Nav.Link href="#Home">Genres</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};
