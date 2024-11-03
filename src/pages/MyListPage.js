// src/pages/MyListPage.js
import React from 'react';
import ListItem from '../components/ListItem';

function MyListPage() {
    const myLists = [
        { title: 'Personal Tasks', owner: 'self', date: '12.05.2024' },
        { title: 'Grocery', owner: 'self', date: '13.01.2024' },
    ];

    return (
        <div className="my-list-page">
            <h2>My Lists</h2>
            <div className="list-container">
                {myLists.map((list, index) => (
                    <ListItem key={index} {...list} />
                ))}
            </div>
        </div>
    );
}

export default MyListPage;
