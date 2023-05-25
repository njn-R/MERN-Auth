import React from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap'

const DashboardScreen = () => {
  return (
    <div
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        padding: '20px',
      }}
    >
      <h4 style={{ textAlign: 'center' }}>Name your Organization</h4>
      <Container
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          marginTop: '100px',
        }}
      >
        <Row lg={3}>
          <Col lg={4}>
            <Card
              style={{
                width: '200px',
                height: '200px',
                padding: '20px',
                margin: '20px 20px 20px 20px',
              }}
            >
              <Card.Body>
                <Card.Title>Card 1</Card.Title>
                <Card.Text>Card 1 content</Card.Text>
              </Card.Body>
            </Card>
            <Card
              style={{
                width: '200px',
                height: '200px',
                padding: '20px',
                margin: '20px 20px 20px 20px',
              }}
            >
              <Card.Body>
                <Card.Title>Card 2</Card.Title>
                <Card.Text>Card 2 content</Card.Text>
              </Card.Body>
            </Card>
            <Card
              style={{
                width: '200px',
                height: '200px',
                padding: '20px',
                margin: '20px 20px 20px 20px',
              }}
            >
              <Card.Body>
                <Card.Title>Card 3</Card.Title>
                <Card.Text>Card 3 content</Card.Text>
              </Card.Body>
            </Card>
            <Card
              style={{
                width: '200px',
                height: '200px',
                padding: '20px',
                margin: '20px 20px 20px 20px',
              }}
            >
              <Card.Body>
                <Card.Title>Card 4</Card.Title>
                <Card.Text>Card 4 content</Card.Text>
              </Card.Body>
            </Card>
            <Card
              style={{
                width: '200px',
                height: '200px',
                padding: '20px',
                margin: '20px 20px 20px 20px',
              }}
            >
              <Card.Body>
                <Card.Title>Card 5</Card.Title>
                <Card.Text>Card 5 content</Card.Text>
              </Card.Body>
            </Card>
            <Card
              style={{
                width: '200px',
                height: '200px',
                padding: '20px',
                margin: '20px 20px 20px 20px',
              }}
            >
              <Card.Body>
                <Card.Title>Card 6</Card.Title>
                <Card.Text>Card 6 content</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default DashboardScreen
