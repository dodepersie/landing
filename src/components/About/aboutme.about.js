import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faCodeBranch, faTrophy, faCode, faContactCard } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import { Card, Container, Row, Col, ListGroup } from 'react-bootstrap'
import myPic from './../../assets/pic.jpg'
import { educationHistory, ability, award, experience } from '../Utilities/constants'

const AboutMe = () => {

    return (
        <>
        <div className='d-flex justify-content-center align-items-start pt-4' id='about' data-aos='fade-right' data-aos-duration="1000">
            <div className='user-select-none animate fadeInLeft animatex'>
                <Container className='pt-1 pt-md-5 my-5'>
                    <Row xs='6'>
                        <Col xs='12' md='4' className='mt-2'>
                            <div className='text-green fw-semibold'>
                                <Card>
                                <Card.Img variant="top" src={ myPic } />
                                <Card.Body>
                                <Card.Text>
                                    Nama saya adalah <strong>I Dewa Gede Mahadi Saputra</strong> dan biasa dipanggil <strong>Dode Mahadi</strong> atau <strong>Mahadi Saputra</strong>. Saya berasal dari <strong>Bali, Indonesia</strong>. Saya bisa bekerja sama dalam tim dan mengerjakan tugas dengan tepat waktu.
                                </Card.Text>
                                </Card.Body>
                                </Card>
                            </div>
                        </Col>
                        <Col xs='12' md='4' className='mt-2'>
                            <div className='text-green fw-semibold'>
                                <div data-aos='fade-up' data-aos-duration="1000">
                                <Card>
                                <Card.Body>
                                <Card.Title>
                                    <FontAwesomeIcon icon={faGraduationCap} className='logoCard fs-2' />
                                    <span className="mx-2 fs-5">Riwayat Pendidikan</span>
                                </Card.Title>
                                <Card.Text>
                                    <ListGroup variant="flush" className="mt-3">
                                        { educationHistory.map( ({ name, year }) => (
                                            <ListGroup.Item>
                                            { name }
                                            <div className='float-end'>
                                                <h6><span class="badge bg-primary">{ year }</span></h6>
                                            </div>
                                        </ListGroup.Item>
                                        ))}
                                    </ListGroup>
                                </Card.Text>
                                </Card.Body>
                                </Card>
                                </div>

                                <div data-aos='fade-up' data-aos-duration="1000">
                                <Card className='mt-2 mt-md-5'>
                                <Card.Body>
                                <Card.Title>
                                    <FontAwesomeIcon icon={faCodeBranch} className='logoCard fs-2' />
                                    <span className="mx-2 fs-5">Kemampuan</span>
                                </Card.Title>
                                <Card.Text>
                                <ListGroup variant="flush" className="mt-3">
                                        {ability.map( ({ name, percentage }) => (
                                            <ListGroup.Item>
                                            <div className="row">
                                                <label className="col-sm-3 col-form-label">{ name }</label>
                                                <div className="col-sm-9">
                                                    <div className="progress my-2">
                                                        <div className="progress-bar" role="progressbar" style={{ width: percentage }} aria-valuenow={ percentage } aria-valuemin="0" aria-valuemax="100">                          
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            </ListGroup.Item>
                                        ))}
                                    </ListGroup>
                                </Card.Text>
                                </Card.Body>
                                </Card>
                                </div>
                            </div>
                        </Col>
                        <Col xs='12' md='4' className='mt-2'>
                            <div className='text-green fw-semibold'>
                                <div data-aos='fade-up' data-aos-duration="1000">
                                <Card>
                                <Card.Body>
                                <Card.Title>
                                    <FontAwesomeIcon icon={faTrophy} className='logoCard fs-2' />
                                    <span className="mx-2 fs-5">Penghargaan</span>
                                </Card.Title>
                                <Card.Text>
                                    <ListGroup variant='flush' className="mt-3">
                                        {award.map( ({ name }) => (
                                            <ListGroup.Item>
                                            <div className="row">
                                                { name }
                                            </div>
                                            </ListGroup.Item>
                                        ))}
                                    </ListGroup>
                                </Card.Text>
                                </Card.Body>
                                </Card>
                                </div>

                                <div data-aos='fade-up' data-aos-duration="1000">
                                <Card className='mt-2 mt-md-5'>
                                <Card.Body>
                                <Card.Title className='fs-2'>
                                    <FontAwesomeIcon icon={faCode} className='logoCard fs-2' />
                                    <span className="mx-2 fs-5">Pengalaman</span>
                                </Card.Title>
                                <Card.Text>
                                <ListGroup variant="flush" className="mt-3">
                                        {experience.map( ({ name, year }) => (
                                            <ListGroup.Item>
                                            { name }
                                            <div className='float-end'>
                                                <h6><span class="badge bg-primary">{ year }</span></h6>
                                            </div>
                                            </ListGroup.Item>
                                        ))}
                                    </ListGroup>
                                </Card.Text>
                                </Card.Body>
                                </Card>
                                </div>

                                <div data-aos='fade-up' data-aos-duration="1000">
                                <Card className='mt-2 mt-md-5'>
                                <Card.Body>
                                <Card.Title>
                                    <FontAwesomeIcon icon={faContactCard} className='logoCard fs-2' />
                                    <span className="mx-2 fs-5">Kontak</span>
                                </Card.Title>
                                <Card.Text>
                                <ListGroup variant="flush" className="mt-3">
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <ListGroup.Item>
                                            <button type="button" className='btn btn-primary'>
                                                <a href="https://www.facebook.com/DodePersie" className="text-white">
                                                    <FontAwesomeIcon icon={faFacebookF} />
                                                </a>
                                            </button>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <button className='btn btn-primary'>
                                            <a href="https://instagram.com/DodePersie" className="text-white">
                                                    <FontAwesomeIcon icon={faInstagram} />
                                                </a>
                                            </button>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <button className='btn btn-dark'>
                                            <a href="https://github.com/dodepersie" className="text-white">
                                                    <FontAwesomeIcon icon={faGithub} />
                                                </a>
                                            </button>
                                        </ListGroup.Item>
                                    </div>
                                    </ListGroup>
                                </Card.Text>
                                </Card.Body>
                                </Card>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
        </>
        )
}

export default AboutMe