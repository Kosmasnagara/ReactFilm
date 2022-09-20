import { Col, Container, Row, Button } from 'react-bootstrap';

const Intro = () => {
    return (
<div className=' intro' >
        <Container className='text-white d-flex justify-content-center
        align-items-center text-center'>
          <Row>
            <Col>
            <div className='title'>Film Gratis </div>
            <div className='title'>   Untuk Semua</div>
            <div className='introButton mt-4 text-center'>
                <Button href='#trending' variant="dark">Lihat semua List</Button>
            </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
}

export default Intro