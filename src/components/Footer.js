import React, {Component} from 'react';
import { Container, Row } from 'reactstrap';

class Footer extends Component {
    render(){
        return (
        <Container fluid={true} className="footer ">
            <Row className="justify-content-center py-3">
                <span><a href="/">Telegram</a></span>
                <span><a href="/">Github</a></span>
                <span><a href="/">Linkedin</a></span>                  
            </Row>
            <Row className="justify-content-center"> 
                <p><span>&copy; 2021 by Irene Elizabeth Sabu</span></p>
            </Row>
        </Container>
        )
    }
}

export default Footer;