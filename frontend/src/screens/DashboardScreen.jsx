import React from 'react'
import {
  Container,
  Card,
  Row,
  Col,
  Form,
  Button,
  Carousel,
} from 'react-bootstrap'

const DashboardScreen = () => {
  return (
    <div
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
      }}
    >
      <h6 style={{ textAlign: 'center' }}>Name your Organization</h6>
      <Form.Group>
        <Form.Control type='org'></Form.Control>
      </Form.Group>
      <h6 className='mt-5' style={{ textAlign: 'center' }}>
        Select your organization type below
      </h6>
      <Container>
        <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Col
            lg={8}
            style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row' }}
          >
            <Card
              style={{
                width: '150px',
                height: '150px',
                padding: '20px',
                margin: '20px 20px 20px 20px',
              }}
            >
              <Card.Body>
                <Card.Img src='https://media.istockphoto.com/id/688550958/vector/black-plus-sign-positive-symbol.jpg?s=612x612&w=0&k=20&c=0tymWBTSEqsnYYXWeWmJPxMotTGUwaGMGs6BMJvr7X4=' />
              </Card.Body>
            </Card>
            <Card
              style={{
                width: '150px',
                height: '150px',
                padding: '20px',
                margin: '20px 20px 20px 20px',
              }}
            >
              <Card.Body>
                <Card.Text style={{ fontSize: '13px', textAlign: 'center' }}>
                  Construction
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              style={{
                width: '150px',
                height: '150px',
                padding: '20px',
                margin: '20px 20px 20px 20px',
              }}
            >
              <Card.Body>
                <Card.Text style={{ fontSize: '13px', textAlign: 'center' }}>
                  Education
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              style={{
                width: '150px',
                height: '150px',
                padding: '20px',
                margin: '20px 20px 20px 20px',
              }}
            >
              <Card.Body>
                <Card.Text style={{ fontSize: '13px', textAlign: 'center' }}>
                  Consultancy
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              style={{
                width: '150px',
                height: '150px',
                padding: '20px',
                margin: '20px 20px 20px 20px',
              }}
            >
              <Card.Body>
                <Card.Text style={{ fontSize: '13px', textAlign: 'center' }}>
                  Logistics
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              style={{
                width: '150px',
                height: '150px',
                padding: '20px',
                margin: '20px 20px 20px 20px',
              }}
            >
              <Card.Body>
                <Card.Text style={{ fontSize: '11px', textAlign: 'center' }}>
                  Manufacturing
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              style={{
                width: '150px',
                height: '150px',
                padding: '20px',
                margin: '20px 20px 20px 20px',
              }}
            >
              <Card.Body>
                <Card.Text style={{ fontSize: '13px', textAlign: 'center' }}>
                  Tourism
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              style={{
                width: '150px',
                height: '150px',
                padding: '20px',
                margin: '20px 20px 20px 20px',
              }}
            >
              <Card.Body>
                <Card.Text style={{ fontSize: '13px', textAlign: 'center' }}>
                  IT
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <div
        className='mt-5 '
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Button
          className='animated-gradient-button mt-5 '
          style={{
            position: 'relative',
            width: '150px',
          }}
        >
          Next
        </Button>
      </div>

      <Carousel
        controls={false}
        style={{ marginTop: '50px', marginRight: '10px' }}
      >
        <Carousel.Item></Carousel.Item>
        <Carousel.Item></Carousel.Item>
        <Carousel.Item></Carousel.Item>
      </Carousel>
    </div>
  )
}

export default DashboardScreen
