import React from 'react';
import { Card } from 'react-bootstrap';

const CardBrief = (bookProps) => (
    <Card style={{ width: '25rem' }} className="book-card book-card-brief">
        <Card.Img variant="top" src={bookProps.cover} />
        <Card.Body>
            <Card.Title className="book-card-title-brief">{bookProps.title}</Card.Title>
        </Card.Body>
    </Card>
);

export default CardBrief;