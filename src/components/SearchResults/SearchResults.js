import React from 'react'
import AuthorListing from '../Author/Listing';
import BookListing from '../Book/Listing';
import TabsComponent from '../Tabs/Tabs';
import TabItemComponent from '../Tabs/Item';
import { Row, Col } from 'react-bootstrap';

const SearchResults = (props) => {
    console.log(props);
    const { value, category } = props.match.params;
    return (

        <Row className="justify-content-center pt-4">
            <Col md={11} >
                <TabsComponent style="secondary" position="start" >
                    <TabItemComponent header="Books" >
                        <BookListing showControls={true} searchValue={value || ""} categories={category && [category]} showSearchbox={false} />

                    </TabItemComponent>
                    <TabItemComponent header="Authors" >
                        <AuthorListing showControls={true} searchValue={value || ""} categories={category && [category]} showSearchbox={false} />

                    </TabItemComponent>
                </TabsComponent>
            </Col>
        </Row>
    )
}

export default SearchResults