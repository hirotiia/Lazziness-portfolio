import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    Container,
    Col,
    Row,
 } from 'reactstrap';
 import { Image } from 'react-bootstrap';
import profImage from '../images/hiroya.jpg';
import './About.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee} from '@fortawesome/free-solid-svg-icons';
library.add(fab, faCheckSquare, faCoffee);


class About extends React.Component {
    render(){
        return(
            <Container>
                <Row className="mb-1">
                    <Col sm="12" md={{ size: 8, offset: 2 }} className="text-center mb-2">
                    <Image src={profImage} alt="私の写真です" className="image-scircle"/>
                    </Col>
                </Row>
                <Row className="mb-5">
                    <Col className="text-center">
                    <h2>Name：Hiroya Nakano</h2>
                    </Col>
                </Row>
                <Row className="mb-1">
                    <Col className="text-center">
                    <h2>Skills</h2>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col className="text-center" md={{ size: 8, offset: 2 }}>
                    <p>HTML / CSS / Bootstrap / Javascript / Ruby / Ruby on rails / React / React router / Node.js / Git</p>
                    </Col>
                </Row>
                <Row className="mb-5">
                    <Col className="text-center">
                    <h2>SNS アカウント</h2>
                    </Col>
                </Row>
                <Row className="mb-5">
                    <Col className="text-center">
                    {/* <FontAwesomeIcon icon={faCoffee} /> */}
                    {/* <FontAwesomeIcon icon={faGithub} /> */}
                    <FontAwesomeIcon icon="check-square" />
                    { renderFaIcons() }
                    </Col>
                </Row>
            </Container>
        );
    }
}
const renderFaIcons = () => {
  const faItemsList = [
    [
    {
      name: ['fab', 'facebook-square'],
      link: ''
    },
    {
      name: ['fab', 'github-square'],
      link: ''
    },
    {
      name: ['fab', 'twitter-square'],
      link: ''
    }
  ]
  ];
  return faItemsList.map((faItems,index)=> {
    return(
      <Row key={index} className="mb-2">
        {faItems.map((item,index) => {
          return(
            <Col className="text-center" key={index}>
              <a href={item.link} target="_blank" >
                {/* <FontAwesomeIcon icon={item.name.faCoffee} size="5x" /> */}
                <FontAwesomeIcon icon={item.name} size="5x" />
              </a>
            </Col>
          );
        })}
      </Row>
    )
  })
}
export default About;