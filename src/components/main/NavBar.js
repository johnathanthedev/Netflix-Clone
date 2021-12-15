import { useAuth0 } from "@auth0/auth0-react";
import { Container, Navbar, Nav, Button, Dropdown } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import NetflixCloneLogo from "../../assets/images/netflix/netflix-logo.png";
import SearchIcon from "../../assets/images/search.svg";
import BellIcon from "../../assets/images/bell.svg";

const NavBar = () => {
  const location = useLocation();

  const HomepageNavBar = () => {
    const SignInButton = () => {
      const { loginWithRedirect } = useAuth0();

      return (
        <Button className="bg-red" onClick={() => loginWithRedirect()}>
          Sign In
        </Button>
      );
    };

    return (
      <Navbar
        className="navbar-homepage"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Container fluid>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <img
                  style={{ width: "100px", height: "50px" }}
                  src={NetflixCloneLogo}
                  alt="Netflix Clone Logo"
                />
              </Nav.Link>
            </Nav>
            <Nav>
              <Dropdown className="mr-3">
                <Dropdown.Toggle
                  className="dropdown-outline"
                  id="dropdown-basic"
                >
                  Language
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>English</Dropdown.Item>
                  <Dropdown.Item>Spanish</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <SignInButton />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  };

  const NavBar = () => {
    return (
      <Navbar
        className="navbar-default"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Container fluid>
          <Navbar.Brand>
            <img
              style={{ width: "100px", height: "50px" }}
              src={NetflixCloneLogo}
              alt="Netflix Clone Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>Home</Nav.Link>
              <Nav.Link>TV Shows</Nav.Link>
              <Nav.Link>Movies</Nav.Link>
              <Nav.Link>New & Popular</Nav.Link>
              <Nav.Link>My List</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link>
                <img
                  style={{ width: "25px", height: "25px" }}
                  src={SearchIcon}
                  alt="Search Icon"
                />
              </Nav.Link>
              <Nav.Link>Kids</Nav.Link>
              <Nav.Link>DVD</Nav.Link>
              <Nav.Link>
                <img
                  style={{ width: "25px", height: "25px" }}
                  src={BellIcon}
                  alt="Bell Icon"
                />
              </Nav.Link>
              {/* <div>Profiles</div> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  };

  if (location.pathname === "/") {
    return <HomepageNavBar />;
  } else {
    return <NavBar />;
  }
};

export default NavBar;
