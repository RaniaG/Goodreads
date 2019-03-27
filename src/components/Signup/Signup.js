import React from 'react';
import { Form, Button, Overlay, Tooltip } from 'react-bootstrap';
import SimpleSchema from 'simpl-schema';

export default class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            input: {
                email: '',
                name: '',
                password: ''
            },
            error: {
                email: false,
                name: false,
                password: false
            }

        }
        this.validation = new SimpleSchema({
            name: {
                type: String,
                min: 3,
                max: 25,
                optional: false
            }
            , email: {
                type: String,
                regEx: SimpleSchema.RegEx.Email,
                min: 5,
                max: 150,
                optional: false
            },
            password: {
                type: String,
                regEx: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                min: 5,
                max: 150,
                optional: false
            }
        }).newContext();
        this.inputHandler = this.inputHandler.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.passRef = target => this.setState({ target });
    }
    inputHandler(event) {
        // debugger;
        this.validation.validate( //to validate all inputs each time
            { ...this.state.input, [event.target.name]: event.target.value }
        );
        //to reset the input validation state and capture and valid after invalid
        let temp = { name: false, email: false, password: false };
        this.validation.validationErrors().forEach((el) => {
            temp[el.name] = true; //to capture any invalid values
        })
        this.setState({
            input: { ...this.state.input, [event.target.name]: event.target.value },
            error: { ...temp }
        });

    }
    onSubmit(e) {
        e.preventDefault();
        this.validation.validate(
            { ...this.state.input }
        );
        if (this.validation.validationErrors().length == 0) {
        }
    }
    render() {
        const { error, input } = this.state;
        return (
            <Form className="d-flex flex-column" onSubmit={this.onSubmit}>
                <h2>New here? Create a free account!</h2>
                <Form.Group >
                    <Form.Control size="lg" className={error.name && 'is-invalid'} value={input.name} type="text" name="name" placeholder="Your Name" onChange={this.inputHandler} />
                </Form.Group>
                <Form.Group >
                    <Form.Control size="lg" className={error.email && 'is-invalid'} value={input.email} type="text" name="email" placeholder="Enter Email" onChange={this.inputHandler} />
                </Form.Group>
                <Form.Group>

                    <Form.Control ref={this.passRef} size="lg" className={error.password && 'is-invalid'} value={input.password} type="password" name="password" placeholder="Password" onChange={this.inputHandler} />
                    <Overlay target={this.state.target} show={error.password} placement="bottom">
                        {props => (
                            <Tooltip id="overlay-example" {...props}>
                                * Password must be at least 8 characters long
                                and contain 1 lowercase letter and 1 uppercase letter
                                and 1 special character
                            </Tooltip>
                        )}
                    </Overlay>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        )
    }
}