import PropTypes from 'prop-types';
import generateId from '../tools/idRandomize';
import { Item, ListItems } from './List.styled'
import Button from '@mui/material/Button';

export default function List({ getFilterContacts, hendleContactRemove }) {
    const list =
        <ListItems>
            {getFilterContacts.length !== 0 && getFilterContacts.map((item, i) => (
                <Item key={generateId()}>
                    <p>{item.name}: {item.phone}</p>
                    <Button variant="outlined" type="button" id={item.id} onClick={hendleContactRemove}>Delete</Button>
                </Item>))}
        </ListItems>
    return list;
}

List.propTypes = {
    hendleContactRemove: PropTypes.func,
    getFilterContacts: PropTypes.array,
}
