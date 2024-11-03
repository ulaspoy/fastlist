// src/pages/HomePage.js
import React from 'react';
import ListItem from '../components/ListItem';
import './HomePage.css';

function HomePage() {
    const recentLists = [
        { title: 'TO DO LIST', owner: 'ourfirm.com', date: '10.05.2024' },
        { title: 'Supermarket', owner: 'ulas', date: '10.01.2024' },
        { title: 'Meeting', owner: 'pavlo3', date: '07.09.2024' },
    ];

    return (
        <div className="home-page">
            <h2>Recent Lists</h2>
            <div className="list-container">
                {recentLists.map((list, index) => (
                    <ListItem key={index} {...list} />
                ))}
            </div>
        </div>
    );
}

export default HomePage;
