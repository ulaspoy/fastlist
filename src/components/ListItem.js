import React from 'react';
import './ListItem.css';

function ListItem({ title, owner, date }) {
    return (
        <div className="list-item">
            <h3>{title}</h3>
            <p>Owner: {owner}</p>
            <p>Date: {date}</p>
        </div>
    );
}

export default ListItem;
