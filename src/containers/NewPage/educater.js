import React, { Component } from "react";
import {
  Image,
  Col,
  Card,
  CardImg,
  CardText,
  CardTitle,
  CardFooter,
  CardDeck,
} from "react-bootstrap";
import "./edu-cater.css";

export class educater extends Component {
  render() {
    return (
      <div>
        <CardDeck style={{ padding: "25px" }}>
          <Card>
            <Col xs={6} md={4}>
              <Image
                style={{
                  width: "18em",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSR2JI-YAizHPtrRIs_4Byg_nUnrGB-2ROdlg&usqp=CAU"
                roundedCircle
              />
            </Col>
            <Card.Body style={{ textAlign: "center" }}>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
              This card has supporting text below as a natural lead-in to
                additional content.
              </Card.Text>
            </Card.Body>
            {/* <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer> */}
          </Card>
          <Card>
            {/* <Col xs={6} md={4}> */}
            <Image
              style={{ width: "18em", marginLeft: "auto", marginRight: "auto" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSR2JI-YAizHPtrRIs_4Byg_nUnrGB-2ROdlg&usqp=CAU"
              roundedCircle
            />
            {/* </Col> */}
            <Card.Body style={{ textAlign: "center" }}>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.
              </Card.Text>
            </Card.Body>
            {/* <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer> */}
          </Card>
          <Card>
            <Col xs={6} md={4}>
              <Image
                style={{
                  width: "18em",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSR2JI-YAizHPtrRIs_4Byg_nUnrGB-2ROdlg&usqp=CAU"
                roundedCircle
              />
            </Col>
            <Card.Body style={{ textAlign: "center" }}>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
              This card has supporting text below as a natural lead-in to
                additional content.
              </Card.Text>
            </Card.Body>
            {/* <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer> */}
          </Card>

          <Card>
            <Col xs={6} md={4}>
              <Image
                style={{
                  width: "18em",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSR2JI-YAizHPtrRIs_4Byg_nUnrGB-2ROdlg&usqp=CAU"
                roundedCircle
              />
            </Col>
            <Card.Body style={{ textAlign: "center" }}>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
              This card has supporting text below as a natural lead-in to
                additional content.
              </Card.Text>
            </Card.Body>
            {/* <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer> */}
          </Card>
        </CardDeck>
      </div>
    );
  }
}

export default educater;
