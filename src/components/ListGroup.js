import ListGroup from 'react-bootstrap/ListGroup';

function GenericList(props) {
    const title = props.title;
    const list = props.list;

    return (
        <ListGroup>
            <ListGroup.Item as="li" active>
                {title}
            </ListGroup.Item>
            {list.map(e => {
                return <ListGroup.Item>{e}</ListGroup.Item>
            })}
        </ListGroup>
    );
}

export default GenericList;