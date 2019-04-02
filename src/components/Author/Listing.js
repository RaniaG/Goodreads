import React from 'react'
import { Row, Col, Form, Badge, Button, Modal } from 'react-bootstrap';
import Listing from '../Listing/Listing';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import authors from '../../data/authors';
import Rater from 'react-rater'
import AuthorCard from './Card';
import { connect } from 'react-redux';



/**
 * this is listing for Authors
 * props: 
 *      *showControls: true or false
 *          it hides or shows the filters and search bar
 *      
 */

class AuthorListing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            filters: {
                search: this.props.searchValue || "",
                sort: "name",
                category: this.props.categories || [],
                rating: [],
            },
            addAuthorView: false
        }
        this.search = this.search.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleTextInput = this.handleTextInput.bind(this);
        this.showAddAuthor = this.showAddAuthor.bind(this);
        this.closeAddAuthor = this.closeAddAuthor.bind(this);
    }
    showAddAuthor() {
        this.setState({ addAuthorView: true });
    }
    closeAddAuthor() {
        this.setState({ addAuthorView: false });
    }
    handleTextInput(event) {
        this.setState({ filters: { ...this.state.filters, search: event.target.value } });
    }
    updateFilter(filter) {
        return (event) => {
            this.setState({ filters: { ...this.state.filters, [filter]: event.target.value } });
            this.search({ ...this.state.filters, [filter]: event.target.value });
        }
    }
    addFilter(filter, value) {
        return (event) => {
            debugger;
            const { filters } = this.state;
            if (!filters[filter].includes(value)) {
                this.setState({ filters: { ...filters, [filter]: [...filters[filter], value] } });
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
        const filteredData = authors.filter((el) => {
            return ((filters.category.length > 0 && filters.category.includes(el.category)) || filters.category.length === 0)
                &&
                ((filters.rating.length > 0 && filters.rating.includes(Math.round(el.rating))) || filters.rating.length === 0)
                &&
                el.name.toLowerCase().includes(filters.search.toLowerCase());
        });
        const sorting = {
            name: (a, b) => {
                // debugger;
                if (a.name.toLowerCase() < b.name.toLowerCase()) {
                    return -1;
                }
                if (a.name.toLowerCase() > b.name.toLowerCase()) {
                    return 1;
                }
                return 0;
            },
            rating: (a, b) => {
                if (a.rating < b.rating) {
                    return -1;
                }
                if (a.rating > b.rating) {
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
                                <option value="rating">Sort by: Rating</option>
                            </select>
                        </Col>
                    </Row>}
                    <Row className="no-gutters">
                        {showControls && <Col md={3} className="bg-light p-5">
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
                                    <Button variant="primary" onClick={this.showAddAuthor}>
                                        <FontAwesomeIcon icon={faUserPlus} size="2x" />
                                    </Button>
                                </div>

                            }
                            <Modal show={this.state.addAuthorView} onHide={this.closeAddAuthor}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Add new Author</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={this.closeAddAuthor}>
                                        Close
                                  </Button>
                                    <Button variant="primary" onClick={this.closeAddAuthor}>
                                        Save Changes
                                  </Button>
                                </Modal.Footer>
                            </Modal>
                            <Listing list={this.state.data} viewType='grid' viewControls={false}>
                                <AuthorCard />
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
export default connect(function (state) { return { userType: state.user.type } })(AuthorListing);