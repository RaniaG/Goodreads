import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Form } from 'react-bootstrap';
import { withRouter } from "react-router";



class UserNavbar extends React.Component {
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
        // this.setState({ redirect: true });
        this.props.history.push('/search/' + this.state.searchValue)
    }
    handleTextInput(event) {
        this.setState({ searchValue: event.target.value });
    }
    render() {

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

export default withRouter(UserNavbar);
