import React from 'react';
import { Nav } from 'react-bootstrap';

class Portfolio extends React.Component {
    constructor(props){
        super(props);

    }

    render(){
        return(
            <Nav fill variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Portfolio1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Portfolio2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-3">Portfolio3</Nav.Link>
                </Nav.Item>
            </Nav>
        );
    }
}


export default Portfolio;