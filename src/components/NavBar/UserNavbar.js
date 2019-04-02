import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Navbar, Nav, Form } from 'react-bootstrap';


export default class UserNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleTextInput = this.handleTextInput.bind(this);
        this.state = {
            searchValue: "",
            redirect: false
        }

    }
    onSubmit(e) {
        e.preventDefault();
        this.setState({ redirect: true });
    }
    handleTextInput(event) {
        this.setState({ searchValue: event.target.value });
    }
    render() {
        if (this.state.redirect) {
            return <Redirect to={'/search/' + this.state.searchValue} />
        }
        return (
            <Navbar bg="light" expand="lg" className="p-4">
                <Navbar.Brand >
                    <h3>BadReads</h3>
                </Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to="/home" className="nav-link">Home</Link>
                        <Link to="/categories" className="nav-link">Categories</Link>
                        <Link to="/books" className="nav-link" >Books</Link>
                        <Link to="/authors" className="nav-link">Authors</Link>
                    </Nav>
                    <Form onSubmit={this.onSubmit} >
                        <Form.Control size="lg" value={this.state.searchValue} type="text" placeholder="Search" onChange={this.handleTextInput} />
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        )
    }
} 