import React from 'react';
import { Row, Col } from 'react-bootstrap';

class CategoriesList extends React.Component {

    render() {
        return (
            <Row className="justify-content-center no-gutters">
                <Col md={8}>
                    <Row className="no-gutters justify-content-between">
                        <Col md={3} className="m-2">
                            <Row>
                                <Col md={12} className="u-bg-grey m-2 p-4">

                                    <h3 className="font-weight-bold">Fiction</h3>
                                    <ul className="u-list-no-bullet">
                                        <li className="u-link">Sub category</li>
                                        <li className="u-link" >Sub category</li>
                                        <li className="u-link" >Sub category</li>
                                        <li className="u-link" >Sub category</li>

                                    </ul>
                                </Col>
                                <Col md={12} className="u-bg-grey m-2 p-4">
                                    <h3 className="font-weight-bold">Mystery</h3>
                                    <ul className="u-list-no-bullet">
                                        <li className="u-link">Sub category</li>
                                        <li className="u-link" >Sub category</li>
                                        <li className="u-link" >Sub category</li>
                                    </ul>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={3} className="m-2">
                            <Row>
                                <Col md={12} className="u-bg-grey m-2 p-4">

                                    <h3 className="font-weight-bold">Fiction</h3>
                                    <ul className="u-list-no-bullet">
                                        <li className="u-link">Sub category</li>
                                        <li className="u-link" >Sub category</li>
                                        <li className="u-link" >Sub category</li>
                                        <li className="u-link" >Sub category</li>
                                        <li className="u-link" >Sub category</li>
                                        <li className="u-link" >Sub category</li>
                                        <li className="u-link" >Sub category</li>
                                        <li className="u-link" >Sub category</li>
                                    </ul>
                                </Col>
                                <Col md={12} className="u-bg-grey m-2 p-4">
                                    <h3 className="font-weight-bold">Mystery</h3>
                                    <ul className="u-list-no-bullet">
                                        <li className="u-link">Sub category</li>
                                        <li className="u-link" >Sub category</li>
                                        <li className="u-link" >Sub category</li>
                                    </ul>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={3} className="m-2">
                            <Row>
                                <Col md={12} className="u-bg-grey m-2 p-4">

                                    <h3 className="font-weight-bold">Fiction</h3>
                                    <ul className="u-list-no-bullet">
                                        <li className="u-link">Sub category</li>
                                        <li className="u-link" >Sub category</li>
                                        <li className="u-link" >Sub category</li>
                                        <li className="u-link" >Sub category</li>
                                        <li className="u-link" >Sub category</li>
                                    </ul>
                                </Col>
                                <Col md={12} className="u-bg-grey m-2 p-4">
                                    <h3 className="font-weight-bold">Mystery</h3>
                                    <ul className="u-list-no-bullet">
                                        <li className="u-link">Sub category</li>
                                        <li className="u-link" >Sub category</li>
                                        <li className="u-link" >Sub category</li>
                                    </ul>
                                </Col>
                            </Row>
                        </Col>

                    </Row>
                </Col>
            </Row>
        )
    }
}
export default CategoriesList;