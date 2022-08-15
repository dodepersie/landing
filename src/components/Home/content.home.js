import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserNinja, faGraduationCap, faTrophy, faCode } from '@fortawesome/free-solid-svg-icons'
import { Card, Container, Row, Col } from 'react-bootstrap'

const Content = () => {

    return (
        <>
        <div className='d-flex justify-content-center align-items-start pt-4' id='about'>
            <div className='user-select-none'>
                <Container className='pt-2 my-5'>
                    <Row xs='6'>
                        <Col xs='6' md='3' className='mt-2'>
                            <div className='text-green fw-semibold'>
                                <Card>
                                <Card.Body>
                                <Card.Title className='fs-1'>
                                    <FontAwesomeIcon icon={faUserNinja} className='logoCard' />
                                </Card.Title>
                                <Card.Text>
                                    Nama saya adalah <strong>I Dewa Gede Mahadi Saputra</strong> dan biasa dipanggil <strong>Dode Mahadi</strong>
                                </Card.Text>
                                </Card.Body>
                                </Card>
                            </div>
                        </Col>
                        <Col xs='6' md='3' className='mt-2'>
                            <div className='text-green fw-semibold'>
                                <Card>
                                <Card.Body>
                                <Card.Title className='fs-1'>
                                    <FontAwesomeIcon icon={faGraduationCap} className='logoCard' />
                                </Card.Title>
                                <Card.Text>
                                    Saat ini, saya adalah seorang mahasiswa di <strong>ITB STIKOM Bali</strong> angkatan tahun 2019
                                </Card.Text>
                                </Card.Body>
                                </Card>
                            </div>
                        </Col>
                        <Col xs='6' md='3' className='mt-2'>
                            <div className='text-green fw-semibold'>
                                <Card>
                                <Card.Body>
                                <Card.Title className='fs-1'>
                                    <FontAwesomeIcon icon={faCode} className='logoCard' />
                                </Card.Title>
                                <Card.Text>
                                    Saya mengerti beberapa bahasa pemograman seperti: HTML, CSS, Javascript
                                </Card.Text>
                                </Card.Body>
                                </Card>
                            </div>
                        </Col>
                        <Col xs='6' md='3' className='mt-2'>
                            <div className='text-green fw-semibold'>
                                <Card>
                                <Card.Body>
                                <Card.Title className='fs-1'>
                                    <FontAwesomeIcon icon={faTrophy} className='logoCard' />
                                </Card.Title>
                                <Card.Text>
                                    Saya pernah mengikuti beberapa perlombaan dibidang komputer
                                </Card.Text>
                                </Card.Body>
                                </Card>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
        </>
        )
}

export default Content