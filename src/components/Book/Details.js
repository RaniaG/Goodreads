

import React from 'react';
// import{NavLink} from 'react-router-dom';

import '../../sass/components/_book.scss'
import {Container , Row , Col , Card , DropdownButton ,Dropdown} from 'react-bootstrap'
import NavLink from 'react-bootstrap/NavLink';

class BookDetails extends React.Component{
    render(){
        return(
            <>
            <Container className=' my-5'>
                <Row className='book-detail'>
                    <Col md={4}>
                        <Card>
                            <Card.Img alt='book Image' variant="top" src='https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' />
                        </Card>
                        <Dropdown className='m-2'>
                            <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                Want to Read 
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Currently Read</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Read </Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Want to Read</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Card.Text>Rate this book</Card.Text> 
                        <Card.Text>Rating Here</Card.Text>
                    </Col>
                    <Col md={8}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Book Name </Card.Title>
                                <hr></hr>
                                {/* will be a link */}
                                <Card.Text>by Autor Name </Card.Text> 
                                {/* will be a link */}
                                <Card.Text>Category Name </Card.Text>
                                {/* <NavLink>Category</NavLink> */}
                                <Card.Text>Rating Here</Card.Text>

                                <Card.Text >
                                    أستاذة جامعية في تقنية المعلومات بجامعة الملك سعود بالرياض
                                    متحصلة على شهادة في الهندسة الصناعية و الماجستير من مدرسة "المناجم" في مدينة سانت إتيان الفرنسية سنة 2008
                                    متحصلة على الدكتوراه في بحوث العمليات (أحد فروع الرياضيات التطبيقية) من جامعة التكنولوجيا بمدينة تروا بفرنسا سنة 2011
                                    روايتها الأولى الصادرة سنة 2012 تحمل عنوان "في قلبي أنثى عبرية" و هي مستوحاة من قصة حقيقية ليهودية تونسية 
                                    دخلت الإسلام بعد تأثرها ب`شخصية طفلة مسلمة يتيمة الأبوين صمدت في وجه الحياة بشجاعة، و بشخصية شاب لبناني مقاوم ترك بصمة في حياتها
                                </Card.Text>   
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

           </>
        )
    }
}


export default BookDetails;