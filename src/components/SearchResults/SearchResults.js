import React from 'react'
import { Tabs, Tab } from 'react-bootstrap';
import AuthorListing from '../Author/Listing';
import BookListing from '../Book/Listing';

const SearchResults = (props) => {
    console.log(props);
    const { searchValue, category } = props.match.params;
    return (
        <Tabs defaultActiveKey="books" id="uncontrolled-tab-example">
            <Tab eventKey="books" title="Books">
                <BookListing showControls={true} searchValue={searchValue || ""} categories={category && [category]} />
            </Tab>
            <Tab eventKey="authors" title="Authors">
                <AuthorListing showControls={true} searchValue={searchValue || ""} />
            </Tab>
        </Tabs>
    )
}

export default SearchResults