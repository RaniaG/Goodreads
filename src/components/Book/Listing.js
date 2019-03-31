import React from 'react'
import { Row, Col, Form, Badge, Button, Modal } from 'react-bootstrap';
import Listing from '../Listing/Listing';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle, faBookMedical } from '@fortawesome/free-solid-svg-icons'
import CardBrief from './Card-brief';
import BookDetailedCard from './Card-Detailed';
import books from '../../data/books';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.scss'
import { connect } from 'react-redux';


/**
 * this is listing for books
 * props: 
 *      *showControls: true or false
 *          it hides or shows the filters and search bar
 *      
 */

class BookListing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            filters: {
                search: this.props.searchValue || "",
                sort: "name",
                bookshelf: "all",
                category: this.props.categories || [],
                rating: [],
                language: []
            },
            addBookView: false
        }
        this.search = this.search.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleTextInput = this.handleTextInput.bind(this);
        this.showAddBook = this.showAddBook.bind(this);
        this.closeAddBook = this.closeAddBook.bind(this);
    }
    showAddBook() {
        this.setState({ addBookView: true });
    }
    closeAddBook() {
        this.setState({ addBookView: false });
    }
    handleTextInput(event) {
        this.setState({ filters: { ...this.state.filters, search: event.target.value } });
    }
    updateFilter(filter, value) {
        return (event) => {
            this.setState({ filters: { ...this.state.filters, [filter]: value || event.target.value } })
            this.search({ ...this.state.filters, [filter]: value || event.target.value });
        }
    }
    addFilter(filter, value) {
        return (event) => {
            const { filters } = this.state;
            if (!filters[filter].includes(value)) {
                this.setState({ filters: { ...filters, [filter]: [...filters[filter], value] } })
                this.search({ ...filters, [filter]: [...filters[filter], value] });
            }
        }
    }
    removeFilter(filter, value) {
        return (event) => {
            const { filters } = this.state;
            const arrCopy = filters[filter].slice();
            arrCopy.splice(arrCopy.indexOf(value), 1);
            this.setState({ filters: { ...filters, [filter]: arrCopy } });
            this.search({ ...filters, [filter]: arrCopy });
        }
    }
    onSubmit(e) {
        e.preventDefault();
        this.search();
    }
    search(newFilters) {
        const filters = newFilters || this.state.filters;
        const filteredData = books.filter((el) => {
            return ((filters.category.length > 0 && filters.category.includes(el.category)) || filters.category.length === 0)
                &&
                ((filters.rating.length > 0 && filters.rating.includes(Math.round(el.avgRating))) || filters.rating.length === 0)
                &&
                ((filters.language.length > 0 && filters.language.includes(el.language)) || filters.language.length === 0)
                &&
                el.title.toLowerCase().includes(filters.search.toLowerCase())
            // &&
            // el.bookshelf === filters.bookshelf;
        });
        const sorting = {
            name: (a, b) => {
                if (a.title.toLowerCase() < b.title.toLowerCase()) {
                    return -1;
                }
                if (a.title.toLowerCase() > b.title.toLowerCase()) {
                    return 1;
                }
                return 0;
            },
            rating: (a, b) => {
                if (a.avgRating < b.avgRating) {
                    return -1;
                }
                if (a.avgRating > b.avgRating) {
                    return 1;
                }
                return 0;
            },
            author: (a, b) => {
                if (a.author.name < b.author.name) {
                    return -1;
                }
                if (a.author.name > b.author.name) {
                    return 1;
                }
                return 0;
            },
            mostread: (a, b) => {
                if (a.read < b.read) {
                    return -1;
                }
                if (a.read > b.read) {
                    return 1;
                }
                return 0;
            }
        }
        // debugger;
        // const x = sorting[filters.sort];
        this.setState({ data: filteredData.sort(sorting[filters.sort]) });
    }
    componentDidMount() {
        this.search();
    }
    render() {
        // debugger;
        const { showControls } = this.props;
        const { filters } = this.state;
        return (
            <Row className="no-gutters">
                <Col md={12}>
                    {showControls && <Row className="justify-content-end bg-info p-4 no-gutters">
                        <Col md={6} className="d-flex flex-row justify-content-end align-items-center">
                            <div className="mr-3">
                                <Form onSubmit={this.onSubmit}>
                                    <Form.Control size="lg" value={this.state.filters.search} type="text" placeholder="Search" onChange={this.handleTextInput} />
                                </Form>
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
                                <li onClick={this.addFilter('rating', 5)}>
                                    <Rater rating={5} total={5} interactive={false} />
                                    {/* <FontAwesomeIcon icon={faStar} className="checked" />
                                    <FontAwesomeIcon icon={faStar} className="checked" />
                                    <FontAwesomeIcon icon={faStar} className="checked" />
                                    <FontAwesomeIcon icon={faStar} className="checked" />
                                    <FontAwesomeIcon icon={faStar} className="checked" /> */}
                                </li>
                                <li onClick={this.addFilter('rating', 4)}>
                                    <Rater rating={4} total={5} interactive={false} />
                                </li>
                                <li onClick={this.addFilter('rating', 3)}>
                                    <Rater rating={3} total={5} interactive={false} />
                                </li>
                                <li onClick={this.addFilter('rating', 2)}>
                                    <Rater rating={2} total={5} interactive={false} />
                                </li>
                                <li onClick={this.addFilter('rating', 1)}>
                                    <Rater rating={1} total={5} interactive={false} />
                                </li>

                            </ul>
                            <h3 className="font-weight-bold">Language</h3>
                            <ul className="u-list-no-bullet">
                                <li className="u-link" onClick={this.addFilter('language', 'English')} >English</li>
                                <li className="u-link" onClick={this.addFilter('language', 'Arabic')} >Arabic</li>
                                <li className="u-link" onClick={this.addFilter('language', 'French')} >French</li>
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
                                {
                                    filters.rating.map((el) =>
                                        <Badge pill variant="info" key={el} className="d-flex align-items-center">
                                            Rating: {el}
                                            <FontAwesomeIcon icon={faTimesCircle} size="2x" className="ml-2" onClick={this.removeFilter('rating', el)} />
                                        </Badge>
                                    )
                                }

                            </div>
                            {
                                this.props.userType === 'admin' &&
                                <div className="d-flex justify-content-end pr-5">
                                    <Button variant="primary" onClick={this.showAddBook}>
                                        <FontAwesomeIcon icon={faBookMedical} size="3x" />
                                    </Button>
                                </div>}
                            <Modal show={this.state.addBookView} onHide={this.closeAddBook}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Add new Book</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={this.closeAddBook}>
                                        Close
                                  </Button>
                                    <Button variant="primary" onClick={this.closeAddBook}>
                                        Save Changes
                                  </Button>
                                </Modal.Footer>
                            </Modal>
                            <Listing list={this.state.data} viewType='list' viewControls={true}>
                                <BookDetailedCard />
                                <CardBrief />
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
export default connect(function (state) { return { userType: state.user.type } })(BookListing);