import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faCodeBranch, faTrophy, faCode, faContactCard } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import { Card, Container, Row, Col, ListGroup } from 'react-bootstrap'
import myPic from './../../assets/pic.jpg'

const AboutMe = () => {

    return (
        <>
        <div className='d-flex justify-content-center align-items-start pt-4' id='about'>
            <div className='user-select-none animate fadeInLeft animatex'>
                <Container className='pt-1 pt-md-5 my-5'>
                    <Row xs='6'>
                        <Col xs='12' md='4' className='mt-2'>
                            <div className='text-green fw-semibold'>
                                <Card>
                                <Card.Img variant="top" src={myPic} />
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
                                <Card>
                                <Card.Body>
                                <Card.Title>
                                    <FontAwesomeIcon icon={faGraduationCap} className='logoCard fs-2' />
                                    <span className="mx-2 fs-5">Riwayat Pendidikan</span>
                                </Card.Title>
                                <Card.Text>
                                    <ListGroup variant="flush" className="mt-3">
                                        <ListGroup.Item>
                                            TK Mandung
                                            <div className='float-end'>
                                                <h6><span class="badge bg-primary">2006</span></h6>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            TK Star Kids
                                            <div className='float-end'>
                                                <h6><span class="badge bg-primary">2007</span></h6>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            SD Bintang Persada
                                            <div className='float-end'>
                                                <h6><span class="badge bg-primary">2007-2013</span></h6>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            SMP N 1 Tabanan
                                            <div className='float-end'>
                                                <h6><span class="badge bg-primary">2013-2016</span></h6>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            SMA N 1 Tabanan
                                            <div className='float-end'>
                                                <h6><span class="badge bg-primary">2016-2019</span></h6>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            ITB STIKOM Bali
                                            <div className='float-end'>
                                                <h6><span class="badge bg-primary">2019-sekarang</span></h6>
                                            </div>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Card.Text>
                                </Card.Body>
                                </Card>

                                <Card className='mt-2 mt-md-5'>
                                <Card.Body>
                                <Card.Title>
                                    <FontAwesomeIcon icon={faCodeBranch} className='logoCard fs-2' />
                                    <span className="mx-2 fs-5">Kemampuan</span>
                                </Card.Title>
                                <Card.Text>
                                <ListGroup variant="flush" className="mt-3">
                                        <ListGroup.Item>
                                        <div className="row">
                                            <label className="col-sm-3 col-form-label">HTML</label>
                                            <div className="col-sm-9">
                                                <div className="progress my-2">
                                                    <div className="progress-bar" role="progressbar" aria-label="Basic example" style={{ width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">                          
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                        <div className="row">
                                            <label className="col-sm-3 col-form-label">CSS</label>
                                            <div className="col-sm-9">
                                                <div className="progress my-2">
                                                    <div className="progress-bar" role="progressbar" aria-label="Basic example" style={{ width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">                          
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                        <div className="row">
                                            <label className="col-sm-3 col-form-label">React</label>
                                            <div className="col-sm-9">
                                                <div className="progress my-2">
                                                    <div className="progress-bar" role="progressbar" aria-label="Basic example" style={{ width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">                          
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                        <div className="row">
                                            <label className="col-sm-3 col-form-label">Editing</label>
                                            <div className="col-sm-9">
                                                <div className="progress my-2">
                                                    <div className="progress-bar" role="progressbar" aria-label="Basic example" style={{ width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">                          
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Card.Text>
                                </Card.Body>
                                </Card>
                            </div>
                        </Col>
                        <Col xs='12' md='4' className='mt-2'>
                            <div className='text-green fw-semibold'>
                                <Card>
                                <Card.Body>
                                <Card.Title>
                                    <FontAwesomeIcon icon={faTrophy} className='logoCard fs-2' />
                                    <span className="mx-2 fs-5">Penghargaan</span>
                                </Card.Title>
                                <Card.Text>
                                    <ListGroup variant='flush' className="mt-3">
                                        <ListGroup.Item>
                                            <div className="row">
                                                Juara 1 Lomba Komputer Tingkat SD se-Kabupaten
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="row">
                                                Juara 2 Lomba Logika-Office (Log-Off) Tingkat SMP se-Kabupaten
                                            </div>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Card.Text>
                                </Card.Body>
                                </Card>

                                <Card className='mt-2 mt-md-5'>
                                <Card.Body>
                                <Card.Title className='fs-2'>
                                    <FontAwesomeIcon icon={faCode} className='logoCard fs-2' />
                                    <span className="mx-2 fs-5">Pengalaman</span>
                                </Card.Title>
                                <Card.Text>
                                <ListGroup variant="flush" className="mt-3">
                                        <ListGroup.Item>
                                            Blogging
                                            <div className='float-end'>
                                                <h6><span class="badge bg-primary">2011-2013</span></h6>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            Web Dev
                                            <div className='float-end'>
                                                <h6><span class="badge bg-primary">2012-2015</span></h6>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            Twitter API
                                            <div className='float-end'>
                                                <h6><span class="badge bg-primary">2013-2015</span></h6>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            Online Seller
                                            <div className='float-end'>
                                                <h6><span class="badge bg-primary">2013-2015</span></h6>
                                            </div>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Card.Text>
                                </Card.Body>
                                </Card>

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
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
        </>
        )
}

export default AboutMe