import { Col, Container, Row, Button } from 'react-bootstrap'
import headerRightImg from './../../assets/headerImage.png'
import { Typewriter } from 'react-simple-typewriter'

const Intro = () => {
    return (
      <>
        <div className='intro' data-aos='fade-right' data-aos-duration="1000">
        <Container className='d-flex justify-content-start align-items-start user-select-none'>
          <Row className='rowMargin animate'>
            <Col md='6'>
              <div className='my-5'>
                <div className='title name fs-1 fs-md-6'>
                  Mahadi Saputra's
                </div>
                <div className='title fs-1 fs-md-6 my-2'>
                  <span>
                  <Typewriter
                    words={['Landing Page', 'Official Site', 'Portfolio Page', 'CV Site']}
                    loop={999}
                    cursor
                    cursorBlinking
                    cursorStyle='_'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                  </span>
                </div>
                <div className='description fs-6 mt-4'>
                  <span>
                    Website ini dibuat oleh diri saya sendiri. <br/>
                    Dengan ReactJS, Bootstrap, HTML, CSS & AOS.<br />
                    Website ini berisi tentang portofolio diri saya.<br />
                    Tampilan terinspirasi <strong>Harisenin.com</strong>\^o^/</span>
                </div>
                <div className='introButton mt-3'>
                    <Button className='flex justify-content-center align-items-center headerButton py-2 px-2' variant='success' href='/tentang'>Tekan Untuk Melihat Lebih Lanjut</Button>
                </div>
              </div>
            </Col>
            <Col md='6'>
              <div className='d-none d-md-flex flex-md-column justify-content-end align-items-end text-dark'>
                <img src={ headerRightImg } style={{ width: "345px", height: "auto", marginLeft: "450px" }} alt='Gambar anime' />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      </>
    )
}

export default Intro