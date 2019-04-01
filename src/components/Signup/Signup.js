import React from 'react';
import { Link } from 'react-router-dom';

import { Form, Button, Overlay, Tooltip } from 'react-bootstrap';
import SimpleSchema from 'simpl-schema';

export default class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            input: {
                email: '',
                name: '',
                password: '',
                passwordConfirm: ''
            },
            error: {
                email: false,
                name: false,
                password: false,
                passwordConfirm: false
            },
            valErrors: 0

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
            },
            passwordConfirm: {
                type: String,
                optional: false
            }
        }).newContext();
        this.inputHandler = this.inputHandler.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.passRef = target => this.setState({ target });
    }
    inputHandler(event) {
        // debugger;
        const newInput = { ...this.state.input, [event.target.name]: event.target.value }
        this.validation.validate( //to validate all inputs each time
            newInput
        );
        //to reset the input validation state and capture and valid after invalid
        let temp = { name: false, email: false, password: false, passwordConfirm: false };
        this.validation.validationErrors().forEach((el) => {
            temp[el.name] = true; //to capture any invalid values
        })
        if (newInput.password !== newInput.passwordConfirm)
            temp.passwordConfirm = true;
        this.setState({
            input: { ...this.state.input, [event.target.name]: event.target.value },
            error: temp,
            valErrors: this.validation.validationErrors().length
        });

    }
    onSubmit(e) {
        e.preventDefault();
        this.validation.validate(
            { ...this.state.input }
        );
        const errors = this.validation.validationErrors();
        if (errors.length === 0) {

        } else {
            let temp = { name: false, email: false, password: false, passwordConfirm: false };
            this.validation.validationErrors().forEach((el) => {
                temp[el.name] = true; //to capture any invalid values
            })
            this.setState({
                error: temp,
                valErrors: this.validation.validationErrors().length
            });
        }
    }
    render() {
        const { error, input } = this.state;
        return (
            <Form className="d-flex flex-column signup" onSubmit={this.onSubmit}>
                <div className="signup__text">Already have an account? <Link to="/Login">Sign in</Link></div>

                <div className="signup__header">New here? Create a free account!</div>
                <Form.Group >
                    <Form.Control size="lg" className={error.name && 'is-invalid'} value={input.name} type="text" name="name" placeholder="Your Name" onChange={this.inputHandler} />
                </Form.Group>
                <Form.Group >
                    <Form.Control size="lg" className={error.email && 'is-invalid'} value={input.email} type="text" name="email" placeholder="Enter Email" onChange={this.inputHandler} />
                </Form.Group>
                <Form.Group>

                    <Form.Control ref={this.passRef} size="lg" className={error.password && 'is-invalid'} value={input.password} type="password" name="password" placeholder="Password" onChange={this.inputHandler} />

                    <Overlay target={this.state.target} show={error.password} placement="left">
                        {props => (
                            <Tooltip  {...props}>
                                * Password must be at least 8 characters long
                                and contain 1 lowercase letter and 1 uppercase letter
                                and 1 special character
                            </Tooltip>
                        )}
                    </Overlay>
                </Form.Group>
                <Form.Group>
                    <Form.Control size="lg" className={error.passwordConfirm && 'is-invalid'} value={input.passwordConfirm} type="password" name="passwordConfirm" placeholder="Confirm Password" onChange={this.inputHandler} />

                </Form.Group>
                <Form.Group>
                    Image: <input type="file" name="myFile" />
                </Form.Group>
                <Button className="signup__submit" type="submit" disabled={this.state.valErrors > 0}>
                    Submit
                </Button>
            </Form>
        )
    }
}