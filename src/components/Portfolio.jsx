import React from 'react';
import { Card, Container, Row, Col} from 'react-bootstrap';
import rubyImage from './images/ruby.png';
import jsImage from './images/javascript.png';
class Portfolio extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            change: false
        };
        this.changeJavascriptPortfolioPage = this.changeJavascriptPortfolioPage.bind(this);
        this.changeRailsPortfolioPage = this.changeRailsPortfolioPage.bind(this);
    }

    changeJavascriptPortfolioPage(){
        this.setState({
            change: false
        });
    }
    changeRailsPortfolioPage(){
        this.setState({
            change: true
        });
    }

    render(){
        if( this.state.change){
            return(
                <Container>
                    <Row>
                        <Col className="text-center">
                            <h1>My Portfolio</h1>
                            <hr />
                            <RailsPortfolioPage />
                            <button onClick={() => this.changeJavascriptPortfolioPage()} className="btn-primary mt-5">JavascriptPortfolioPage</button>
                        </Col>
                    </Row>
                </Container>
            );
        }
        return(
            <Container>
                <Row>
                    <Col className="text-center">
                        <h1>My Portfolio</h1>
                        <hr />
                        <JavascriptPortfolioPage />
                        <button onClick={() => this.changeRailsPortfolioPage()} className="btn-primary mt-5">RailsPortfolioPage</button>
                    </Col>
                </Row>
            </Container>
        );
        
    }
}
const RailsPortfolioPage = () => {
    return(
        <Card border="danger" style={{ width: '18rem',margin: '0 auto'}}>
            <Card.Img variant="top" src={rubyImage}/>
            <Card.Body>
                <Card.Title>RailsPortfolioPage</Card.Title>
                <Card.Text>ruby on rails でメモアプリ作成してみました。</Card.Text>
            </Card.Body>
            <a href="https://hiroya1101-memo.herokuapp.com/" target="_blank">Link</a>
        </Card>
    );
};
const JavascriptPortfolioPage = () => {
    return(
        <Card border="warning" style={{ width: '18rem' ,margin: '0 auto'}}>
            <Card.Img variant="top" src={jsImage}/>
            <Card.Body>
                <Card.Title>JavascriptPortfolioPage</Card.Title>
                <Card.Text>javascript でQuizアプリを作成してみました。</Card.Text>
                <a href="https://github.com/hirotiia/quiz-app" target="_blank">Link</a>
            </Card.Body>
        </Card>
    );
};


export default Portfolio;