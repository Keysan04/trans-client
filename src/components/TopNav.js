import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const TopNav = () => {
  const userJson = sessionStorage.getItem("user");
  const userObj = JSON.parse(userJson);
  const auth = userObj?._id;
  const handleOnLogout = () => {
    sessionStorage.removeItem("user");
  };
  return (
    <Navbar expand="md" className="bg-info">
      <Container fluid>
        {userObj?.name && <div>Welcome {userObj?.name}</div>}
        <Navbar.Brand href="#home">TR</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {userObj?._id ? (
              <Link to="/" className="nav-link" onClick={handleOnLogout}>
                LogOut
              </Link>
            ) : (
              <Link to="/signup" className="nav-link">
                Signup
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNav;
