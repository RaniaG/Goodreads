import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import { connect } from 'react-redux';
import BookListing from '../Book/Listing';

class UserProfile extends React.Component {
    render() {
        const { name, email, photo } = this.props;
        console.log(this.props.match.params);
        return (
            <Row className="justify-content-center m-5">
                <Col md={9} className="d-flex flex-column">
                    <Row className="p-5">
                        <Col md={3}>
                            <Image src={photo} roundedCircle fluid style={{ height: '20rem', }} />
                        </Col>
                        <Col md={9} className="user-details">
                            <div className="border-bottom pb-3 name"><strong>{name}</strong></div>
                            <Row className="pt-3">
                                <Col md={2}><strong>Email:</strong></Col>
                                <Col md={10}>{email}</Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <BookListing showControls={true} showSearchbox={true} />
                        </Col>
                    </Row>
                </Col>
            </Row>
        )
    }
}

const mapStateToProps = state => {
    return ({
        id: state.user.id,
        name: state.user.name,
        email: state.user.email,
        photo: state.user.photo,
    });
};
export default connect(mapStateToProps)(UserProfile);