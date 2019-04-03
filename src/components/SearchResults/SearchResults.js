import React from 'react'
import { Tabs, Tab } from 'react-bootstrap';
import AuthorListing from '../Author/Listing';
import BookListing from '../Book/Listing';

const SearchResults = (props) => {
    console.log(props);
    const { value, category } = props.match.params;
    return (
        <Tabs defaultActiveKey="books" id="uncontrolled-tab-example" className="justify-content-center">
            <Tab eventKey="books" title="Books">
                <BookListing showControls={true} searchValue={value || ""} categories={category && [category]} />
            </Tab>
            <Tab eventKey="authors" title="Authors">
                <AuthorListing showControls={true} searchValue={value || ""} categories={category && [category]} />
            </Tab>
        </Tabs>
    )
}

export default SearchResults