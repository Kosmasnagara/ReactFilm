import { Card, Col, Container, Row, Image} from "react-bootstrap"
import antman from "../assets/images/superhero/antman.jpg"
import avenger from "../assets/images/superhero/avenger.jpg"
import batman from "../assets/images/superhero/batman.jpg"
import robinhood from "../assets/images/superhero/robinhood.jpg"
import spidermam from "../assets/images/superhero/spiderman-cover.jpg"
import superman from "../assets/images/superhero/superman.jpg"



const Superhero = () => {
    return (
        <div>
            <Container>
                <br/>
                 <h1 className="text-white">Superhero Movies</h1>
                <br/>
                <Row>
                    <Col md={4} className="movieWrapper" id="superhero">
                     <Card className=" bg-dark text-white movieImage">
                        <Image
                        src={antman}
                        alt="Dune Movies"
                        className="images"
                        />
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                   <Card.Title className="text-center">Antman</Card.Title>
                <Card.Text className="text-left" >
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
            </Card.Text>
            </div>
        <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
            </div>
    </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                     <Card className=" bg-dark text-white movieImage">
                        <Image
                        src={avenger}
                        alt="Everything Movies"
                        className="images"
                        />
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                   <Card.Title className="text-center">Avenger</Card.Title>
                <Card.Text className="text-left" >
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
            </Card.Text>
            </div>
        <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
            </div>
    </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                     <Card className=" bg-dark text-white movieImage">
                        <Image
                        src={batman}
                        alt="Infinite Movies"
                        className="images"
                        />
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                   <Card.Title className="text-center">Batman</Card.Title>
                <Card.Text className="text-left" >
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
            </Card.Text>
            </div>
        <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
            </div>
    </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                     <Card className=" bg-dark text-white movieImage">
                        <Image
                        src={robinhood}
                        alt="Joker Movies"
                        className="images"
                        />
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                   <Card.Title className="text-center">RobinHood</Card.Title>
                <Card.Text className="text-left" >
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
            </Card.Text>
            </div>
        <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
            </div>
    </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                     <Card className=" bg-dark text-white movieImage">
                        <Image
                        src={spidermam}
                        alt="Lightyear Movies"
                        className="images"
                        />
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                   <Card.Title className="text-center">Spiderman</Card.Title>
                <Card.Text className="text-left" >
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
            </Card.Text>
            </div>
        <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
            </div>
    </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                     <Card className=" bg-dark text-white movieImage">
                        <Image
                        src={superman}
                        alt="Morbius Movies"
                        className="images"
                        />
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                   <Card.Title className="text-center">Superman</Card.Title>
                <Card.Text className="text-left" >
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
            </Card.Text>
            </div>
        <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
            </div>
    </Card>
                    </Col>
                </Row>
            </Container>
   
        </div>
    )
}

export default Superhero