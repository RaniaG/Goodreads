import React from 'react';
import SimpleSchema from 'simpl-schema';
//bootstrap component
import { Form, Row, Col, Button } from 'react-bootstrap';
//sass file
// import '../../sass/components/_add-book.scss';
import cardDetailed from '../Author/Add';
import cardBrief from '../Login/Login';

class AddBook extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // input: {
            bookName: '',
            category: '',
            auther: '',
            image: '',
            // },
            error: {
                bookName: false,
                category: false,
                auther: false,
                image: false,
            }
        }
        this.validationContext = new SimpleSchema({
            bookName: {
                type: String,
                optional: false,
                min: 3,
                max: 25,
            },
            category: {
                type: String,
                optional: false,
                min: 3,
                max: 25,
            },
            auther: {
                type: String,
                optional: false,
                min: 3,
                max: 25,
            },
            image: {
                type: String,
                optional: false,
                min: 3,
            }
        }).newContext();
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
        // console.log({ [name]: value });
        // console.log(name + "   " + value);
        const { bookName, category, auther, image } = this.state;
        this.validationContext.validate({ bookName, category, auther, image });
        if (!(this.validationContext.isValid())) {

            let errorsArr = {
                bookName: false,
                category: false,
                auther: false,
                image: false,
            };
            this.validationContext.validationErrors().forEach((a) => {
                errorsArr[a.name] = true;
                console.log(a.name);
            });

            this.setState({
                error: { ...this.state.error, ...errorsArr },
            });

            console.log("invalid");
        } else {

            console.log("its true");
        }
        console.log(this.validationContext.isValid());
        console.log(this.validationContext.validationErrors());
    }

    handleSubmit(e) {
        e.preventDefault();
        const { bookName, category, auther, image } = this.state;
        console.log("state is:  " + bookName + "  " + category + "  " + auther + "  " + image);
        this.validationContext.validate({ bookName, category, auther, image });
    }

    componentDidMount() {
        const { edit, id } = this.props;
        if (edit && cardDetailed) {
            this.setState({
                bookName: cardDetailed[id - 1].bookName,
                category: cardDetailed[id - 1].category,
                auther: cardDetailed[id - 1].auther,
                image: cardDetailed[id - 1].image,
            })
        } else if (edit && cardBrief) {
            this.setState({
                bookName: cardBrief[id - 1].bookName,
                category: cardBrief[id - 1].category,
                auther: cardBrief[id - 1].auther,
                image: cardBrief[id - 1].image,
            })
        }

    }

    render() {
        const { bookName, category, auther, image, error } = this.state;
        return (
            <Form className="addBook" onSubmit={this.handleSubmit}>
                <div className="addBook-form">
                    <Form.Group as={Row} controlId="formHorizontalEmail">
                        <Form.Label column sm={2} className='addBook-labels'>
                            BookName
                    </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" name="bookName" placeholder="" className={'addBook-inputs ' + (error.bookName && "is-invalid")} onChange={this.handleChange} value={bookName} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalPassword">
                        <Form.Label column sm={2} className='addBook-labels'>
                            Category
                    </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" name="category" placeholder="" className={error.category && "is-invalid"} onChange={this.handleChange} value={category} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalPassword">
                        <Form.Label column sm={2} className='addBook-labels'>
                            Auther
                    </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" name="auther" placeholder="" className={error.auther && "is-invalid"} onChange={this.handleChange} value={auther} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalPassword">
                        <Form.Label column sm={2} className='addBook-labels'>
                            Image
                    </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" name="image" placeholder="" className={'addBook-inputs' + (error.image && "is-invalid")} onChange={this.handleChange} value={image} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Button type="submit" className="addBook-btn">Add Book</Button>
                        </Col>
                    </Form.Group>
                </div>
            </Form>
        )
    }
}

export default AddBook;