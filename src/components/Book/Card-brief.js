import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CardBrief = (bookProps) => (
    <Card className="book-card book-card-brief">
        <Card.Img variant="top" src={bookProps.cover} />
        <Card.Body>
            <Link to={`/book/${bookProps.id}`}>
                <Card.Title className="book-card-title-brief">{bookProps.title}</Card.Title>
            </Link>
        </Card.Body>
    </Card>
);

export default CardBrief;