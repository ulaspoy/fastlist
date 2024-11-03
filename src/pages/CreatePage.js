// src/pages/CreatePage.js
import React, { useState } from 'react';

function CreatePage() {
    const [items, setItems] = useState(['']);

    const handleChange = (index, event) => {
        const newItems = [...items];
        newItems[index] = event.target.value;
        setItems(newItems);
    };

    const addItem = () => {
        setItems([...items, '']);
    };

    return React.createElement(
        'div',
        { className: 'create-page' },
        React.createElement('h2', null, 'Create New List'),
        React.createElement('input', { type: 'text', placeholder: 'Add Title...', className: 'title-input' }),
        React.createElement(
            'div',
            { className: 'items-container' },
            items.map((item, index) =>
                React.createElement('input', {
                    key: index,
                    type: 'text',
                    value: item,
                    onChange: (event) => handleChange(index, event),
                    className: 'item-input',
                    placeholder: 'Add item...'
                })
            )
        ),
        React.createElement(
            'button',
            { onClick: addItem, className: 'add-item-btn' },
            'Add Item'
        ),
        React.createElement(
            'button',
            { className: 'save-btn' },
            'Save'
        )
    );
}

export default CreatePage;
