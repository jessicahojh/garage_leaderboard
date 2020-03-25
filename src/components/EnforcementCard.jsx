import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const EnforcementCard = ({ sortedData }) => {

    return (
        <div>
            <Container>
                        <Row>
                            <Col><h3>Parking Lot Name</h3></Col>
                            <Col><h3>Enforcer Username</h3></Col>
                            <Col><h3>Min Since Last Enforced</h3></Col>
                        </Row>
                        <br></br>

                    {sortedData.map(obj =>
                        
                        <Row>
                            <Col><div>{obj.name}</div></Col>
                            <Col><div>{obj.username}</div></Col>
                            <Col><div>{obj.mins_passed}</div></Col>
                        </Row>
                    )}
            </Container>
        </div>
    )
}

export default EnforcementCard;
