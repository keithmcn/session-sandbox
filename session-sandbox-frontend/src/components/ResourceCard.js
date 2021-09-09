import React, { Component } from 'react';
import '../App.css';
import { Container, Col, Row, Card,
            CardHeader, CardTitle, CardBody, CardText}
            from 'reactstrap';

const ResourceCard = ({resource}) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle tag="h5">{resource.title}</CardTitle>
            </CardHeader>
            <CardBody>
                <CardText>{resource.link}</CardText>
                <CardText>
                    <small>{resource.type}</small>
                </CardText>
            </CardBody>
        </Card>
    );
}

export default ResourceCard;
