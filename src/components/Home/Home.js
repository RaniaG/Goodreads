import React from 'react';
import { Row, Col, Tabs, Tab } from 'react-bootstrap';
import SignUp from '../Signup/Signup';
import books from '../../data/books';
import Listing from '../Listing/Listing';
import CardBrief from '../Book/Card-brief';
import TabsComponent from '../Tabs/Tabs';
import TabItemComponent from '../Tabs/Item';


class HomeComponent extends React.Component {
    state = {
        mostViewed: [],
        featured: [],
        newArrivals: []
    }
    componentDidMount() {
        this.setState({ mostViewed: books, featured: books, newArrivals: books });
    }
    render() {
        return (
            <>
                <Row className="justify-content-around p-5 no-gutters home-cover">
                    <Col md={8} >
                        <div className="home-heading">
                            Meet your next favourite book
                        </div>
                    </Col>
                    <Col md={3}>
                        <SignUp />
                    </Col>
                </Row>
                <Row className="no-gutters mt-5">
                    <Col md={12}>
                        <TabsComponent >
                            <TabItemComponent header="New Arrivals" >
                                <Listing list={this.state.newArrivals} viewType='grid' viewControls={false}>
                                    <CardBrief />
                                </Listing>
                            </TabItemComponent>
                            <TabItemComponent header="Featured" >
                                <Listing list={this.state.featured} viewType='grid' viewControls={false}>
                                    <CardBrief />
                                </Listing>
                            </TabItemComponent>
                        </TabsComponent>
                    </Col>
                </Row>
            </>


        )
    }
}
export default HomeComponent