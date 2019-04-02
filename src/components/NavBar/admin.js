import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { withRouter } from "react-router";



class AdminNavbar extends React.Component {


    render() {

        return (
            <Navbar bg="light" expand="lg" className="p-4">
                <Navbar.Brand >
                    <h3>BadReads</h3>
                </Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to="/admin/categories" className="nav-link">Categories</Link>
                        <Link to="/admin/books" className="nav-link" >Books</Link>
                        <Link to="/admin/authors" className="nav-link">Authors</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default withRouter(AdminNavbar);
