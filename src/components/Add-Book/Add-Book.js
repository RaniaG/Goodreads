import React from 'react';
//bootstrap component
import { Form, Row, Col, Button } from 'react-bootstrap';
//sass file
import '../../sass/components/_add-book.scss';

class AddBook extends React.Component{

    render(){
        return(
            <Form className="addBook">
            <div className="addBook-form">
                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={2} className='addBook-labels'>
                        BookName
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="text" placeholder="" className="addBook-inputs" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalPassword">
                    <Form.Label column sm={2} className='addBook-labels'>
                        Category
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="text" placeholder="" className="addBook-inputs" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalPassword">
                    <Form.Label column sm={2} className='addBook-labels'>
                        Auther
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="text" placeholder="" className="addBook-inputs" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalPassword">
                    <Form.Label column sm={2} className='addBook-labels'>
                        Image
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="text" placeholder="" className="addBook-inputs" />
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