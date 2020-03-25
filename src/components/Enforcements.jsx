import React from 'react'

import EnforcementCard from './EnforcementCard';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Enforcements = ({ sortedData }) => {
      
    return (
        
        <Container>
            <div className="background">
            <Row>
                <Col></Col>
                <Col xs={6}>
                    <h2>Recent Enforcement Leaderboard</h2>
                </Col>
                <Col></Col>
            </Row>

            <br></br>

           <EnforcementCard
           sortedData={sortedData}/>
            </div>
        </Container>

    )
    
}

export default Enforcements;