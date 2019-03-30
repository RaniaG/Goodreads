import React from 'react'
import { Tabs, Tab } from 'react-bootstrap';
import AuthorListing from '../Author/Listing';
import BookListing from '../Book/Listing';

const SearchResults = (props) =>
    <Tabs defaultActiveKey="books" id="uncontrolled-tab-example">
        <Tab eventKey="books" title="Books">
            <BookListing showControls={true} searchValue=""></BookListing>
        </Tab>
        <Tab eventKey="authors" title="Authors">
            <AuthorListing showControls={true} searchValue="" />
        </Tab>
    </Tabs>
export default SearchResults