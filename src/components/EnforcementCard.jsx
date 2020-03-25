import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const EnforcementCard = ({ sortedData }) => {

    return (
        <div>
            <Container>
                        <Row>
                            <Col><h3 className="title">Parking Lot Name</h3></Col>
                            <Col><h3 className="title">Enforcer Username</h3></Col>
                            <Col><h3 className="title">Min Since Last Enforced</h3></Col>
                        </Row>
                        <br></br>

                    {sortedData.map(obj =>
                        
                        <Row>
                            <Col><div className="font">{obj.name}</div></Col>
                            <Col><div className="font">{obj.username}</div></Col>
                            <Col><div className="font">{obj.minsPassed}</div></Col>
                        </Row>
                    )}
            </Container>
        </div>
    )
}

export default EnforcementCard;
