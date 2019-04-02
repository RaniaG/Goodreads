import React from 'react';
//bootstrap component
import { Form, Row, Col, Button } from 'react-bootstrap';
//sass file
import '../../sass/components/_login.scss';

class Login extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (

            <Form className="login">
                <div className="login-form">
                    <Form.Group as={Row} controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                            UserName
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" placeholder="UserName" className="login-inputs" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalPassword">
                        <Form.Label column sm={2}>
                            Password
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="password" placeholder="Password" className="login-inputs" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Button type="submit" className="login-btn">Login</Button>
                        </Col>
                    </Form.Group>
                </div>
            </Form>

        )
    }
}
export default Login;