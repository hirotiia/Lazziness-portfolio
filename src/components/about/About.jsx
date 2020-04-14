import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import {
    Container,
    Col,
    Row,
 } from 'reactstrap';
 import { Image } from 'react-bootstrap';
import profImage from '../images/hiroya.jpg';
import './About.css';


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
                    <FontAwesomeIcon icon={faCoffee} />
                    { renderFaIcons() }
                    </Col>
                </Row>
            </Container>
        );
    }
}
const renderFaIcons = () => {
  const faIconsList = [
    [
    {
      name: 'fa-accusoft',
      link: ''
    },
    {
      name: 'twitter-square',
      link: ''
    },
    {
      name: 'facebook-square',
      link: ''
    }
  ]
  ];
  return faIconsList.map((faIcons,index)=> {
    return(
      <Row key={index} className="mb-2">
        {faIcons.map((icon,index) => {
          return(
            <Col className="text-center" key={index}>
              <a href={icon.link} target="_blank" >
                <FontAwesomeIcon name={icon.name} size="5x" />
              </a>
            </Col>
          );
        })}
      </Row>
    )
  })
}
export default About;