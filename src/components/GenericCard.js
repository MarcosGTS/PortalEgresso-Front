import React from 'react';
import Card from 'react-bootstrap/Card';

function GerenricCard(props) {
    const title = props.title || "Title";
    const subTitle = props.subTitle;
    const descricao = props.descricao;
    const children = props.children

    return (  
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{subTitle}</Card.Subtitle>
        {children.map(e => {
            return e
        })}
        <Card.Text>{descricao}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default GerenricCard;