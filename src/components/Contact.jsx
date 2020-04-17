import React from 'react';
import { Container, Row, Col, Image} from 'react-bootstrap';
import mountainImage from './images/mountain.jpg';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';





class Contact extends React.Component {
    constructor(props){
        super(props);

    }

    render(){
        return(
            <Container>
                <Row>
                    <Col>
                        <h1 className="mb-5">Hiroya Nakano</h1>
                        <Image src={mountainImage} alt="mountain" width="70%" roundedCircle/>
                    </Col>
                    <Col>
                        <h1 className="mb-5">Contact Me</h1>
                        <p>---------------------------------------------------------------------</p>
                        <h3 className="mb-3"><FontAwesomeIcon icon="check-square" />Mail</h3>
                        <p className="mb-5">hiroya_0610_15mro@me.com</p>
                        <h3 className="mb-3"><FontAwesomeIcon icon="check-square" />Line</h3>
                        <p>ID : hnakn01224</p>
                        <p>---------------------------------------------------------------------</p>
                    </Col>
                </Row>
            </Container>
        );
    }
}


export default Contact;