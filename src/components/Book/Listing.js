import React from 'react'
import { Row, Col, Form, Badge, Card, Button } from 'react-bootstrap';
import Listing from '../Listing/Listing';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'


/**
 * this is listing for books
 * props: 
 *      *showControls: true or false
 *          it hides or shows the filters and search bar
 *      
 */

export default class BookListing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }],
            filters: {
                search: "",
                sort: "name",
                bookshelf: "all",
                category: [],
                rating: [],
                language: []
            }
        }
        this.search = this.search.bind(this);
    }
    search(event) {
        if (event.key === 'Enter') {
        }
        else this.setState({ filters: { ...this.state.filters, search: event.target.value } });
    }
    updateFilter(filter, value) {
        return (event) => {
            this.setState({ filters: { ...this.state.filters, [filter]: value || event.target.value } })
        }
    }
    addFilter(filter, value) {
        return (event) => {
            const { filters } = this.state;
            if (!filters[filter].includes(value)) {
                this.setState({ filters: { ...filters, [filter]: [...filters[filter], value] } })
            }
        }
    }
    removeFilter(filter, value) {
        return (event) => {
            const { filters } = this.state;
            const arrCopy = filters[filter].slice();
            arrCopy.splice(arrCopy.indexOf(value), 1);
            this.setState({ filters: { ...filters, [filter]: arrCopy } });
        }
    }
    render() {
        const { showControls } = this.props;
        const { filters } = this.state;
        return (
            <Row className="no-gutters">
                <Col md={12}>
                    {showControls && <Row className="justify-content-end bg-info p-4 no-gutters">
                        <Col md={6} className="d-flex flex-row justify-content-end align-items-center">
                            <div className="mr-3">
                                <Form.Control size="lg" value={this.state.filters.value} type="text" placeholder="Search" onKeyDown={this.search} />
                            </div>
                            <select name="SortBy" onChange={this.updateFilter('sort')} >
                                <option value="name">Sort by: Name</option>
                                <option value="author">Sort by: Author</option>
                                <option value="rating">Sort by: Rating</option>
                                <option value="mostread">Sort by: Most read</option>
                            </select>
                        </Col>
                    </Row>}
                    <Row className="no-gutters">
                        {showControls && <Col md={3} className="bg-light p-5">
                            <h3 className="font-weight-bold">Bookshelves</h3>
                            <ul>
                                <li className="d-flex u-link justify-content-between align-items-center" onClick={this.updateFilter('bookshelf', 'all')} disabled={filters.bookshelf === 'all'}>All
                                    <Badge pill variant="primary">50000</Badge>
                                </li>
                                <li className="d-flex u-link justify-content-between align-items-center" onClick={this.updateFilter('bookshelf', 'read')} disabled={filters.bookshelf === 'read'}>Read
                                    <Badge pill variant="primary">10</Badge>
                                </li>
                                <li className="d-flex u-link justify-content-between align-items-center" onClick={this.updateFilter('bookshelf', 'currentlyreading')} disabled={filters.bookshelf === 'currentlyreading'}>Currently reading
                                    <Badge pill variant="primary">1</Badge>
                                </li>
                            </ul>
                            <h3 className="font-weight-bold">Category</h3>
                            <ul className="u-list-no-bullet">
                                <li className="u-link" onClick={this.addFilter('category', 'Fiction')}>Fiction</li>
                                <li className="u-link" onClick={this.addFilter('category', 'Mystery')}>Mystery</li>
                                <li className="u-link" onClick={this.addFilter('category', 'Horror')}>Horror</li>
                                <li className="u-link" onClick={this.addFilter('category', 'Romance')}>Romance</li>
                                <li className="u-link" onClick={this.addFilter('category', 'Thriller')}>Thriller</li>
                            </ul>
                            <h3 className="font-weight-bold">Reviews</h3>
                            <ul className="u-list-no-bullet">
                                <li>All</li>

                                <li>☆☆☆☆☆</li>
                            </ul>
                            <h3 className="font-weight-bold">Language</h3>
                            <ul className="u-list-no-bullet">
                                <li className="u-link" onClick={this.addFilter('language', 'English')} >English</li>
                                <li className="u-link" onClick={this.addFilter('category', 'Arabic')} >Arabic</li>
                                <li className="u-link" onClick={this.addFilter('category', 'French')} >French</li>
                            </ul>
                        </Col>
                        } <Col md={showControls ? 9 : 12}>
                            <div className="d-flex flex-row mt-4">
                                {
                                    filters.category.map((el) =>
                                        <Badge pill variant="info" key={el} className="d-flex align-items-center">
                                            {el}
                                            <FontAwesomeIcon icon={faTimesCircle} size="2x" className="ml-2" onClick={this.removeFilter('category', el)} />
                                        </Badge>
                                    )
                                }{
                                    filters.language.map((el) =>
                                        <Badge pill variant="info" key={el} className="d-flex align-items-center">
                                            {el}
                                            <FontAwesomeIcon icon={faTimesCircle} size="2x" className="ml-2" onClick={this.removeFilter('language', el)} />
                                        </Badge>
                                    )
                                }

                            </div>
                            <Listing list={this.state.data} viewType='list' viewControls={true}>
                                <Card>
                                    <Card.Header as="h5">Featured</Card.Header>
                                    <Card.Body>
                                        <Card.Title>Special title treatment</Card.Title>
                                        <Card.Text>
                                            With supporting text below as a natural lead-in to additional content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="holder.js/100px180" />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </Listing>
                        </Col>
                    </Row>
                </Col>
            </Row>
            // <Spinner animation="border" role="status">
            //     <span className="sr-only">Loading...</span>
            // </Spinner>
        )
    }
}