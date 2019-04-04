import React from 'react';
import Rater from 'react-rater';
import { Dropdown, Card, Row, Col, ButtonGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class BookDetailedCard extends React.Component {
    constructor(bookProps) {
        super(bookProps);
        this.state = {
            shelf: 'Want To Read',
            bookRate: 'Rate this book',
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        const value = e.target.value;
        this.setState({
            shelf: value,
        })
        if (value === 'Read') {
            this.setState({
                bookRate: 'My rating:',
            })
        }
    }
    render() {
        const { title, author, avgRating, cover, id } = this.props
        return (
            <Card className="book-card book-card-detailed ">
                <Row className="no-gutters">
                    <Col md={2}>
                        <img src={cover} className="book-card-img" alt={title} />
                    </Col>
                    <Col md={7}>
                        <Card.Body>
                            <Link to={`/book/${id}`}>
                                <h3 className="book-card-title book-card-title-detailed">{title}</h3>
                            </Link>
                            <h5 className="book-card-author">by <Link to={`/author/${author.id}`} >{author.name}</Link> </h5>
                            <div>
                                <span><Rater rating={avgRating} total={5} interactive={false} /></span>
                                <span className="card-text"><small className="text-muted book-grey-text"> {avgRating} avg. rating</small></span>
                            </div>
                        </Card.Body>
                    </Col>
                    <Col md={3} className="shelfDropdown-container">
                        <Dropdown as={ButtonGroup} size="lg" >
                            <Button className="shelfDropdown-btn">{this.state.shelf}</Button>
                            <Dropdown.Toggle split id="dropdown-split-basic" className="shelfDropdown-btn" />
                            <Dropdown.Menu className="shelfDropdown-menu">
                                <Dropdown.Item as="button" onClick={this.handleClick} value="Read">Read</Dropdown.Item>
                                <Dropdown.Item as="button" onClick={this.handleClick} value="Currently Reading">Currently Reading</Dropdown.Item>
                                <Dropdown.Item as="button" onClick={this.handleClick} value="Want to Read">Want to Read</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <div className="myAlign-center">
                            <small className="text-muted grey-text">{this.state.bookRate} </small>
                            <p>
                                <img src="https://66.media.tumblr.com/710a680d6e81542117d8c6c3812fef69/tumblr_pp16ebAJmp1tfnoauo2_75sq.png" alt="rating" />
                            </p>
                        </div>
                    </Col>
                </Row>
            </Card>
        )
    }
}
