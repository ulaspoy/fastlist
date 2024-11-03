// src/components/Sidebar.js
import React from 'react';

function Sidebar({ setPage }) {
    return React.createElement(
        'div',
        { className: 'sidebar' },
        React.createElement('div', { className: 'logo' }, 'LOGO'),
        React.createElement(
            'nav',
            null,
            React.createElement(
                'button',
                { onClick: () => setPage('home'), className: 'sidebar-link' },
                'Home'
            ),
            React.createElement(
                'button',
                { onClick: () => setPage('my-lists'), className: 'sidebar-link' },
                'My Lists'
            ),
            React.createElement(
                'button',
                { onClick: () => setPage('our-lists'), className: 'sidebar-link' },
                'Our Lists'
            ),
            React.createElement(
                'button',
                { onClick: () => setPage('my-archive'), className: 'sidebar-link' },
                'My Archive'
            ),
            React.createElement(
                'button',
                { onClick: () => setPage('our-archive'), className: 'sidebar-link' },
                'Our Archive'
            ),
            React.createElement(
                'button',
                { onClick: () => setPage('members'), className: 'sidebar-link' },
                'Members'
            ),
            React.createElement(
                'button',
                { onClick: () => setPage('create'), className: 'sidebar-link' },
                'Create List'
            )
        )
    );
}

export default Sidebar;
