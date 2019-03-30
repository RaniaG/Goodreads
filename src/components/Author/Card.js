

import React from 'react';
import { Col, Card } from 'react-bootstrap';
// import{NavLink} from 'react-router-dom';
// class AuthorCard extends React.Component {
//     render(){
//         const {author} = this.props;
//         return(
//             <Col md={4}>
//                 <Card className='m-3'>
//                     <Card.Img variant="top" src={author.image} />
//                     <Card.Body>
//                         <Card.Title>{author.name}</Card.Title>
//                     </Card.Body>
//                 </Card>
//             </Col>
//         )
//     }
// }
const AuthorCard = ({ image, name }) => {
    return (
        <Card className='author m-3'>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                {/* <NavLink to={`/author/`}>{author.name}</NavLink> */}
            </Card.Body>
        </Card>
    )
}

export default AuthorCard;