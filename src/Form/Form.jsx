import PropTypes from 'prop-types';
import { FormSection, Label, Input, SubmitBt } from './Form.styled';
import generateId from '../tools/idRandomize';
import { useState } from 'react';

const inputIdName = generateId();
const inputIdNTel = generateId();

const Form = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleInput = ({ target: { value, name } }) => {
        if (name === 'name') setName(value);
        if (name === 'number') setNumber(value);
    };

    const handleSubmitForm = e => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        onSubmit(formData);
        setName('');
        setNumber('');
    };

    const form = (
        <FormSection onSubmit={handleSubmitForm}>
            <Label htmlFor={inputIdName}>Name</Label>
            <Input
                id={inputIdName}
                onChange={handleInput}
                type="text"
                name="name"
                pattern="^[a-zA-Z\u0080-\uFFFF '-]+$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                value={name}
                required
            />
            <Label htmlFor={inputIdNTel}>Phone</Label>
            <Input
                id={inputIdNTel}
                onChange={handleInput}
                value={number}
                type="tel"
                name="number"
                pattern="^\\+?\\d{1,4}[-.\\s]?\\(?(?:\\d{1,3})\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}$"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
            />
            <SubmitBt type="submit">add contact</SubmitBt>
        </FormSection>
    );
    return form;
};

export default Form;

Form.propTypes = {
    onSubmit: PropTypes.func,
};