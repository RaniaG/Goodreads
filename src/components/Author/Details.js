

import React from 'react';
import '../../sass/components/_author.scss'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import Listing from '../Listing/Listing';


class AuthorDetails extends React.Component {
    render() {
        return (
            <>
                <Container className=' my-5'>
                    <Row className='author-detail'>
                        <Col md={4}>
                            <Card>
                                {/* <div className='author-detail-img'> */}
                                <Card.Img alt='Author Image' variant="top" src='https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' />
                                <Button className='m-2' variant="primary"><h2>Follow</h2></Button>
                            </Card>
                        </Col>
                        <Col md={8}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Author Name </Card.Title>
                                    <hr></hr>
                                    <div className='d-flex flex-row bd-highlight my-5'>
                                        <div className='w-25'>
                                            <Card.Subtitle className="mb-4 ">Website : </Card.Subtitle>
                                            <Card.Subtitle className="mb-4 ">Born : </Card.Subtitle>
                                            <Card.Subtitle className="mb-4 ">Member since : </Card.Subtitle>
                                            <Card.Subtitle className="mb-4 ">URL : </Card.Subtitle>
                                        </div>
                                        <div>
                                            <Card.Subtitle className="mb-4 ">https://www.facebook.com/khaoula.hamdi.novelist/</Card.Subtitle>
                                            <Card.Subtitle className="mb-4 ">Egypt </Card.Subtitle>
                                            <Card.Subtitle className="mb-4 ">July 2012</Card.Subtitle>
                                            <Card.Subtitle className="mb-4 ">https://www.goodreads.com/khaoula_hamdi</Card.Subtitle>
                                        </div>

                                    </div>
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

                <Container >
                    <Row className='author-detail'>
                        <Col>
                            <Listing list={this.state.data} viewType='grid' viewControls={false}>
                                <AuthorCard />
                            </Listing>
                        </Col>

                    </Row>
                </Container>
            </>
        )
    }
}


export default AuthorDetails;